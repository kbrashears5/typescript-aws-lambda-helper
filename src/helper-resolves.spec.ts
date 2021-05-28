import { LambdaHelper } from './helper';
import { Logger, LogLevel } from 'typescript-ilogger';
import { TestingValues } from './test-values';
import * as Lambda from '@aws-sdk/client-lambda';

const eventSourceMappingConfigurationResponse: Lambda.EventSourceMappingConfiguration =
  {};
const invocationResponseResponse: Lambda.InvocationResponse = {};
const invokeAsyncResponseResponse: Lambda.InvokeAsyncResponse = {};
const listEventSourceMappingsResponseResponse: Lambda.ListEventSourceMappingsResponse =
  {};

const getEventSourceMapping = jest.fn().mockImplementation(() => {
  return Promise.resolve<Lambda.EventSourceMappingConfiguration>(
    eventSourceMappingConfigurationResponse,
  );
});
const invoke = jest.fn().mockImplementation(() => {
  return Promise.resolve<Lambda.InvocationResponse>(invocationResponseResponse);
});
const invokeAsync = jest.fn().mockImplementation(() => {
  return Promise.resolve<Lambda.InvokeAsyncResponse>(
    invokeAsyncResponseResponse,
  );
});
const listEventSourceMappings = jest.fn().mockImplementation(() => {
  return Promise.resolve<Lambda.ListEventSourceMappingsResponse>(
    listEventSourceMappingsResponseResponse,
  );
});
const updateEventSourceMapping = jest.fn().mockImplementation(() => {
  return Promise.resolve<Lambda.EventSourceMappingConfiguration>(
    eventSourceMappingConfigurationResponse,
  );
});

// mock the functions
jest.mock('@aws-sdk/client-lambda', () => {
  return {
    Lambda: jest.fn().mockImplementation(() => {
      return {
        getEventSourceMapping,
        invoke,
        invokeAsync,
        listEventSourceMappings,
        updateEventSourceMapping,
      };
    }),
  };
});

const logger = new Logger(LogLevel.Off);
const lambdaHelperMock = new LambdaHelper(logger);
const TestValues = new TestingValues();

/**
 * Test the DisableDynamoEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.DisableDynamoEventSourceMappingAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.UpdateEventSourceMappingAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.DisableDynamoEventSourceMappingAsync(
      TestValues.EmptyString,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ThrowsOnEmpty} uuid`, () => {
    const actual = lambdaHelperMock.DisableDynamoEventSourceMappingAsync(
      TestValues.Name,
      TestValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} uuid`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.DisableDynamoEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).resolves.toEqual(
      eventSourceMappingConfigurationResponse,
    );
  });
});

/**
 * Test the DisableKinesisEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.DisableKinesisEventSourceMappingAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.UpdateEventSourceMappingAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.DisableKinesisEventSourceMappingAsync(
      TestValues.EmptyString,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ThrowsOnEmpty} uuid`, () => {
    const actual = lambdaHelperMock.DisableKinesisEventSourceMappingAsync(
      TestValues.Name,
      TestValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} uuid`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.DisableKinesisEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).resolves.toEqual(
      eventSourceMappingConfigurationResponse,
    );
  });
});

/**
 * Test the DisableSQSEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.DisableSQSEventSourceMappingAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.UpdateEventSourceMappingAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.DisableSQSEventSourceMappingAsync(
      TestValues.EmptyString,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ThrowsOnEmpty} uuid`, () => {
    const actual = lambdaHelperMock.DisableSQSEventSourceMappingAsync(
      TestValues.Name,
      TestValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} uuid`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.DisableSQSEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).resolves.toEqual(
      eventSourceMappingConfigurationResponse,
    );
  });
});

/**
 * Test the EnableDynamoEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.EnableDynamoEventSourceMappingAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.UpdateEventSourceMappingAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.EnableDynamoEventSourceMappingAsync(
      TestValues.EmptyString,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ThrowsOnEmpty} uuid`, () => {
    const actual = lambdaHelperMock.EnableDynamoEventSourceMappingAsync(
      TestValues.Name,
      TestValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} uuid`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.EnableDynamoEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).resolves.toEqual(
      eventSourceMappingConfigurationResponse,
    );
  });
});

/**
 * Test the EnableKinesisEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.EnableKinesisEventSourceMappingAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.UpdateEventSourceMappingAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.EnableKinesisEventSourceMappingAsync(
      TestValues.EmptyString,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ThrowsOnEmpty} uuid`, () => {
    const actual = lambdaHelperMock.EnableKinesisEventSourceMappingAsync(
      TestValues.Name,
      TestValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} uuid`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.EnableKinesisEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).resolves.toEqual(
      eventSourceMappingConfigurationResponse,
    );
  });
});

/**
 * Test the EnableSQSEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.EnableSQSEventSourceMappingAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.UpdateEventSourceMappingAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.EnableSQSEventSourceMappingAsync(
      TestValues.EmptyString,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ThrowsOnEmpty} uuid`, () => {
    const actual = lambdaHelperMock.EnableSQSEventSourceMappingAsync(
      TestValues.Name,
      TestValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} uuid`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.EnableSQSEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).resolves.toEqual(
      eventSourceMappingConfigurationResponse,
    );
  });
});

/**
 * Test the GetEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.GetEventSourceMappingAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.GetEventSourceMappingAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} uuid`, () => {
    const actual = lambdaHelperMock.GetEventSourceMappingAsync(
      TestValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} uuid`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.GetEventSourceMappingAsync(TestValues.Uuid);
    return expect(actual).resolves.toEqual(
      eventSourceMappingConfigurationResponse,
    );
  });
});

/**
 * Test the ListEventSourceMappingsAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.ListEventSourceMappingsAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.ListEventSourceMappingsAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.ListEventSourceMappingsAsync(
      TestValues.EmptyString,
      TestValues.Arn,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ThrowsOnEmpty} eventSourceArn`, () => {
    const actual = lambdaHelperMock.ListEventSourceMappingsAsync(
      TestValues.Name,
      TestValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} eventSourceArn`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.ListEventSourceMappingsAsync(
      TestValues.Name,
      TestValues.Arn,
    );
    return expect(actual).resolves.toEqual(
      listEventSourceMappingsResponseResponse,
    );
  });
});

/**
 * Test the InvokeSync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.InvokeSync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.InvokeSync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.InvokeSync<string>(
      TestValues.EmptyString,
      TestValues.Body,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.InvokeSync<string>(
      TestValues.Name,
      TestValues.Body,
    );
    return expect(actual).resolves.toEqual(invocationResponseResponse);
  });
});

/**
 * Test the InvokeAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.InvokeAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.InvokeAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.InvokeAsync<string>(
      TestValues.EmptyString,
      TestValues.Body,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.InvokeAsync<string>(
      TestValues.Name,
      TestValues.Body,
    );
    return expect(actual).resolves.toEqual(invocationResponseResponse);
  });
});

/**
 * Test the UpdateEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.UpdateEventSourceMappingAsync.name}`, () => {
  // set action for this method
  const action = `${LambdaHelper.name}.${lambdaHelperMock.UpdateEventSourceMappingAsync.name}`;

  test(`${TestValues.ThrowsOnEmpty} functionName`, () => {
    const actual = lambdaHelperMock.UpdateEventSourceMappingAsync(
      TestValues.EmptyString,
      TestValues.BooleanValue,
      TestValues.Uuid,
      TestValues.NumberValue,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} functionName`,
    );
  });
  test(`${TestValues.ThrowsOnEmpty} uuid`, () => {
    const actual = lambdaHelperMock.UpdateEventSourceMappingAsync(
      TestValues.Name,
      TestValues.BooleanValue,
      TestValues.EmptyString,
      TestValues.NumberValue,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${TestValues.MustSupply} uuid`,
    );
  });
  test(`${TestValues.ValidTest}`, () => {
    const actual = lambdaHelperMock.UpdateEventSourceMappingAsync(
      TestValues.Name,
      TestValues.BooleanValue,
      TestValues.Uuid,
      TestValues.NumberValue,
    );
    return expect(actual).resolves.toEqual(
      eventSourceMappingConfigurationResponse,
    );
  });
});
