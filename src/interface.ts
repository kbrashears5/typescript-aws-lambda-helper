/* eslint-disable no-unused-vars */
import * as Lambda from '@aws-sdk/client-lambda';

/**
 * Lambda Helper
 */
export interface ILambdaHelper {
  /**
   * Disable event source mapping for a Dynamo stream
   * @param functionName {string} Function name to update. Best to use the full ARN
   * @param uuid {string} Event source mapping uuid
   * @param batchSize {number} Batch size for the event source mapping. Default 100
   */
  DisableDynamoEventSourceMappingAsync(
    functionName: string,
    uuid: string,
    batchSize?: number,
  ): Promise<Lambda.EventSourceMappingConfiguration>;

  /**
   * Disable event source mapping for a Kinesis stream
   * @param functionName {string} Function name to update. Best to use the full ARN
   * @param uuid {string} Event source mapping uuid
   * @param batchSize {number} Batch size for the event source mapping. Default 100
   */
  DisableKinesisEventSourceMappingAsync(
    functionName: string,
    uuid: string,
    batchSize?: number,
  ): Promise<Lambda.EventSourceMappingConfiguration>;

  /**
   * Disable event source mapping for a SQS queue
   * @param functionName {string} Function name to update. Best to use the full ARN
   * @param uuid {string} Event source mapping uuid
   * @param batchSize {number} Batch size for the event source mapping. Default 10
   */
  DisableSQSEventSourceMappingAsync(
    functionName: string,
    uuid: string,
    batchSize?: number,
  ): Promise<Lambda.EventSourceMappingConfiguration>;

  /**
   * Enable event source mapping for a Dynamo stream
   * @param functionName {string} Function name to update. Best to use the full ARN
   * @param uuid {string} Event source mapping uuid
   * @param batchSize {number} Batch size for the event source mapping. Default 100
   */
  EnableDynamoEventSourceMappingAsync(
    functionName: string,
    uuid: string,
    batchSize?: number,
  ): Promise<Lambda.EventSourceMappingConfiguration>;

  /**
   * Enable event source mapping for a Kinesis stream
   * @param functionName {string} Function name to update. Best to use the full ARN
   * @param uuid {string} Event source mapping uuid
   * @param batchSize {number} Batch size for the event source mapping. Default 100
   */
  EnableKinesisEventSourceMappingAsync(
    functionName: string,
    uuid: string,
    batchSize?: number,
  ): Promise<Lambda.EventSourceMappingConfiguration>;

  /**
   * Enable event source mapping for a SQS queue
   * @param functionName {string} Function name to update. Best to use the full ARN
   * @param uuid {string} Event source mapping uuid
   * @param batchSize {number} Batch size for the event source mapping. Default 10
   */
  EnableSQSEventSourceMappingAsync(
    functionName: string,
    uuid: string,
    batchSize?: number,
  ): Promise<Lambda.EventSourceMappingConfiguration>;

  /**
   * Get an Event Source Mapping
   * @param uuid {string} Uuid of Event Source Mapping
   */
  GetEventSourceMappingAsync(
    uuid: string,
  ): Promise<Lambda.EventSourceMappingConfiguration>;

  /**
   * List Event Source Mappings
   * @param functionName {string} Function name to get event source mappings for. Best to use the full ARN
   * @param eventSourceArn {string} Event Source ARN
   */
  ListEventSourceMappingsAsync(
    functionName: string,
    eventSourceArn: string,
  ): Promise<Lambda.ListEventSourceMappingsResponse>;

  /**
   * Invoke lambda async
   * @param functionName {string} Function name to invoke
   * @param payload {T} Payload to pass to function
   */
  InvokeAsync<T>(
    functionName: string,
    payload: T,
  ): Promise<Lambda.InvokeAsyncResponse>;

  /**
   * Invoke lambda sync
   * @param functionName {string} Function name to invoke
   * @param payload {T} Payload to pass to function
   */
  InvokeSync<T>(
    functionName: string,
    payload: T,
  ): Promise<Lambda.InvocationResponse>;

  /**
   * Update an event source mapping
   * @param functionName {string} Function name to update. Best to use the full ARN
   * @param enabled {boolean} Turn the event source mapping on or off
   * @param uuid {string} Event source mapping uuid
   * @param batchSize {number} Batch size for the event source mapping
   */
  UpdateEventSourceMappingAsync(
    functionName: string,
    enabled: boolean,
    uuid: string,
    batchSize: number,
  ): Promise<Lambda.EventSourceMappingConfiguration>;
}
