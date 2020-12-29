import * as Lambda from '@aws-sdk/client-lambda';
import { ILogger } from 'typescript-ilogger';
import { BaseClass } from 'typescript-helper-functions';
import { ILambdaHelper } from './interface';
import { Readable } from 'stream';

/**
 * Lambda Helper
 */
export class LambdaHelper extends BaseClass implements ILambdaHelper {

    /**
     * AWS Repository for Lambda
     */
    public Repository: Lambda.Lambda;

    /**
     * Default batch size for Dynamo Event Source Mapping
     */
    private DefaultDynamoBatchSize: number = 100;

    /**
     * Default batch size for Kinesis Event Source Mapping
     */
    private DefaultKinesisBatchSize: number = 100;

    /**
     * Default batch size for SQS Event Source Mapping
     */
    private DefaultSQSBatchSize: number = 10;

    /**
     * Initializes new instance of LambdaHelper
     * @param logger {ILogger} Injected logger
     * @param repository {Lambda} Injected Repository. A new repository will be created if not supplied
     * @param options {Lambda.ClientConfiguration} Injected configuration if a Repository is supplied
     */
    constructor(logger: ILogger,
        repository?: Lambda.Lambda,
        options?: Lambda.LambdaClientConfig) {

        super(logger);
        options = this.ObjectOperations.IsNullOrEmpty(options) ? { region: 'us-east-1' } as Lambda.LambdaClientConfig : options!;
        this.Repository = repository || new Lambda.Lambda(options);
    }

    /**
     * Disable event source mapping for a Dynamo stream
     * @param functionName {string} Function name to update. Best to use the full ARN
     * @param uuid {string} Event source mapping uuid
     * @param batchSize {number} Batch size for the event source mapping. Default 100
     */
    public async DisableDynamoEventSourceMappingAsync(functionName: string,
        uuid: string,
        batchSize?: number): Promise<Lambda.EventSourceMappingConfiguration> {

        return await this.UpdateEventSourceMappingAsync(functionName,
            false,
            uuid,
            batchSize || this.DefaultDynamoBatchSize);
    }

    /**
     * Disable event source mapping for a Kinesis stream
     * @param functionName {string} Function name to update. Best to use the full ARN
     * @param uuid {string} Event source mapping uuid
     * @param batchSize {number} Batch size for the event source mapping. Default 100
     */
    public async DisableKinesisEventSourceMappingAsync(functionName: string,
        uuid: string,
        batchSize?: number): Promise<Lambda.EventSourceMappingConfiguration> {

        return await this.UpdateEventSourceMappingAsync(functionName,
            false,
            uuid,
            batchSize || this.DefaultKinesisBatchSize);
    }

    /**
     * Disable event source mapping for a SQS queue
     * @param functionName {string} Function name to update. Best to use the full ARN
     * @param uuid {string} Event source mapping uuid
     * @param batchSize {number} Batch size for the event source mapping. Default 10
     */
    public async DisableSQSEventSourceMappingAsync(functionName: string,
        uuid: string,
        batchSize?: number): Promise<Lambda.EventSourceMappingConfiguration> {

        return await this.UpdateEventSourceMappingAsync(functionName,
            false,
            uuid,
            batchSize || this.DefaultSQSBatchSize);
    }

    /**
     * Enable event source mapping for a Dynamo stream
     * @param functionName {string} Function name to update. Best to use the full ARN
     * @param uuid {string} Event source mapping uuid
     * @param batchSize {number} Batch size for the event source mapping. Default 100
     */
    public async EnableDynamoEventSourceMappingAsync(functionName: string,
        uuid: string,
        batchSize?: number): Promise<Lambda.EventSourceMappingConfiguration> {

        return await this.UpdateEventSourceMappingAsync(functionName,
            true,
            uuid,
            batchSize || this.DefaultDynamoBatchSize);
    }

    /**
     * Enable event source mapping for a Kinesis stream
     * @param functionName {string} Function name to update. Best to use the full ARN
     * @param uuid {string} Event source mapping uuid
     * @param batchSize {number} Batch size for the event source mapping. Default 100
     */
    public async EnableKinesisEventSourceMappingAsync(functionName: string,
        uuid: string,
        batchSize?: number): Promise<Lambda.EventSourceMappingConfiguration> {

        return await this.UpdateEventSourceMappingAsync(functionName,
            true,
            uuid,
            batchSize || this.DefaultKinesisBatchSize);
    }

    /**
     * Enable event source mapping for a SQS queue
     * @param functionName {string} Function name to update. Best to use the full ARN
     * @param uuid {string} Event source mapping uuid
     * @param batchSize {number} Batch size for the event source mapping. Default 10
     */
    public async EnableSQSEventSourceMappingAsync(functionName: string,
        uuid: string,
        batchSize?: number): Promise<Lambda.EventSourceMappingConfiguration> {

        return await this.UpdateEventSourceMappingAsync(functionName,
            true,
            uuid,
            batchSize || this.DefaultSQSBatchSize);
    }

    /**
     * Get an Event Source Mapping
     * @param uuid {string} Uuid of Event Source Mapping
     */
    public async GetEventSourceMappingAsync(uuid: string): Promise<Lambda.EventSourceMappingConfiguration> {

        const action = `${LambdaHelper.name}.${this.GetEventSourceMappingAsync.name}`;
        this.LogHelper.LogInputs(action, { uuid });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(uuid)) { throw new Error(`[${action}]-Must supply uuid`); }

        // create params object
        const params: Lambda.GetEventSourceMappingRequest = {
            UUID: uuid,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.getEventSourceMapping(params);
        this.LogHelper.LogResponse(action, response);

        return response;
    }

    /**
     * List Event Source Mappings
     * @param functionName {string} Function name to get event source mappings for. Best to use the full ARN
     * @param eventSourceArn {string} Event Source ARN
     */
    public async ListEventSourceMappingsAsync(functionName: string,
        eventSourceArn: string): Promise<Lambda.ListEventSourceMappingsResponse> {

        const action = `${LambdaHelper.name}.${this.ListEventSourceMappingsAsync.name}`;
        this.LogHelper.LogInputs(action, { functionName, eventSourceArn });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(functionName)) { throw new Error(`[${action}]-Must supply functionName`); }
        if (this.ObjectOperations.IsNullOrWhitespace(eventSourceArn)) { throw new Error(`[${action}]-Must supply eventSourceArn`); }

        // create params object
        const params: Lambda.ListEventSourceMappingsRequest = {
            EventSourceArn: eventSourceArn,
            FunctionName: functionName,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.listEventSourceMappings(params);
        this.LogHelper.LogResponse(action, response);

        return response;
    }

    /**
     * Invoke lambda async
     * @param functionName {string} Function name to invoke
     * @param payload {T} Payload to pass to function
     */
    public async InvokeAsync<T>(functionName: string,
        payload: T): Promise<Lambda.InvokeAsyncResponse> {

        const action = `${LambdaHelper.name}.${this.InvokeAsync.name}`;
        this.LogHelper.LogInputs(action, { functionName, payload });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(functionName)) { throw new Error(`[${action}]-Must supply functionName`); }

        const payloadString = JSON.stringify(payload);

        const readable = new Readable();
        readable.push(payloadString);
        readable.push(null);

        // create params object
        const params: Lambda.InvokeAsyncRequest = {
            FunctionName: functionName,
            InvokeArgs: readable,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.invokeAsync(params);
        this.LogHelper.LogResponse(action, response);

        return response;
    }

    /**
     * Invoke lambda sync
     * @param functionName {string} Function name to invoke
     * @param payload {T} Payload to pass to function
     */
    public async InvokeSync<T>(functionName: string,
        payload: T): Promise<Lambda.InvocationResponse> {

        const action = `${LambdaHelper.name}.${this.InvokeSync.name}`;
        this.LogHelper.LogInputs(action, { functionName, payload });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(functionName)) { throw new Error(`[${action}]-Must supply functionName`); }

        const payloadString = JSON.stringify(payload);

        const array = this.ObjectOperations.ConvertStringToArrayBuffer(payloadString);

        // create params object
        const params: Lambda.InvocationRequest = {
            FunctionName: functionName,
            Payload: array,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.invoke(params);
        this.LogHelper.LogResponse(action, response);

        return response;
    }

    /**
     * Update an event source mapping
     * @param functionName {string} Function name to update. Best to use the full ARN
     * @param enabled {boolean} Turn the event source mapping on or off
     * @param uuid {string} Event source mapping uuid
     * @param batchSize {number} Batch size for the event source mapping
     */
    public async UpdateEventSourceMappingAsync(functionName: string,
        enabled: boolean,
        uuid: string,
        batchSize: number): Promise<Lambda.EventSourceMappingConfiguration> {

        const action = `${LambdaHelper.name}.${this.UpdateEventSourceMappingAsync.name}`;
        this.LogHelper.LogInputs(action, { functionName, enabled, uuid, batchSize });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(functionName)) { throw new Error(`[${action}]-Must supply functionName`); }
        if (this.ObjectOperations.IsNullOrWhitespace(uuid)) { throw new Error(`[${action}]-Must supply uuid`); }

        // create params object
        const params: Lambda.UpdateEventSourceMappingRequest = {
            BatchSize: batchSize,
            Enabled: enabled,
            FunctionName: functionName,
            UUID: uuid,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.updateEventSourceMapping(params);
        this.LogHelper.LogResponse(action, response);

        return response;
    }
}
