import { BaseMock } from 'typescript-helper-functions';
import * as Lambda from '@aws-sdk/client-lambda';

/**
 * Lambda Mock class
 */
export class LambdaMock extends BaseMock {

    /**
     * Mocks an Lambda.EventSourceMappingConfiguration response
     */
    public EventSourceMappingConfiguration: Lambda.EventSourceMappingConfiguration = {};

    /**
     * Mocks an Lambda.InvocationResponse response
     */
    public InvocationResponse: Lambda.InvocationResponse = {};

    /**
     * Mocks an Lambda.InvokeAsyncResponse response
     */
    public InvokeAsyncResponse: Lambda.InvokeAsyncResponse = {};

    /**
     * Mocks an Lambda.ListEventSourceMappingsResponse response
     */
    public ListEventSourceMappingsResponse: Lambda.ListEventSourceMappingsResponse = {};

    /**
     * Create the Lambda mock
     */
    protected CreateMock(returnError: boolean) {
        const rejectResponse = new Error(`AWS Error`);

        // implement the AWS responses
        const awsResponses = {
            // invoke sync response
            invoke: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<Lambda.InvocationResponse>(this.InvocationResponse);
                }),
            },
            // invoke async response
            invokeAsync: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<Lambda.InvokeAsyncResponse>(this.InvokeAsyncResponse);
                }),
            },
            // get event source mapping response
            getEventSourceMapping: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<Lambda.EventSourceMappingConfiguration>(this.EventSourceMappingConfiguration);
                }),
            },
             // list event source mappings response
             listEventSourceMappings: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<Lambda.ListEventSourceMappingsResponse>(this.ListEventSourceMappingsResponse);
                }),
            },
            // update event source mapping response
            updateEventSourceMapping: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<Lambda.EventSourceMappingConfiguration>(this.EventSourceMappingConfiguration);
                }),
            },
        };

        const options = {} as Lambda.LambdaClientConfig;

        // create the functions
        let functions = new Lambda.Lambda(options);
        functions = {
            invoke: () => awsResponses.invoke,
            invokeAsync: () => awsResponses.invokeAsync,
            getEventSourceMapping: () => awsResponses.getEventSourceMapping,
            listEventSourceMappings: () => awsResponses.listEventSourceMappings,
            updateEventSourceMapping: () => awsResponses.updateEventSourceMapping,
        };

        return functions;
    }
}
