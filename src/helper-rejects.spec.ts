import { LambdaHelper } from './helper';
import { Logger, LogLevel } from 'typescript-ilogger';
import { TestingValues } from './test-values';

const error = new Error(`AWS Error`);

const getEventSourceMapping = jest.fn().mockImplementation(() => {
  return Promise.reject(error);
});
const invoke = jest.fn().mockImplementation(() => {
  return Promise.reject(error);
});
const invokeAsync = jest.fn().mockImplementation(() => {
  return Promise.reject(error);
});
const listEventSourceMappings = jest.fn().mockImplementation(() => {
  return Promise.reject(error);
});
const updateEventSourceMapping = jest.fn().mockImplementation(() => {
  return Promise.reject(error);
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
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.DisableDynamoEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the DisableKinesisEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.DisableKinesisEventSourceMappingAsync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.DisableKinesisEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the DisableSQSEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.DisableSQSEventSourceMappingAsync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.DisableSQSEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the EnableDynamoEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.EnableDynamoEventSourceMappingAsync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.EnableDynamoEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the EnableKinesisEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.EnableKinesisEventSourceMappingAsync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.EnableKinesisEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the EnableSQSEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.EnableSQSEventSourceMappingAsync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.EnableSQSEventSourceMappingAsync(
      TestValues.Name,
      TestValues.Uuid,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the GetEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.GetEventSourceMappingAsync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.GetEventSourceMappingAsync(TestValues.Uuid);
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the ListEventSourceMappingsAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.ListEventSourceMappingsAsync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.ListEventSourceMappingsAsync(
      TestValues.Name,
      TestValues.Arn,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the InvokeSync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.InvokeSync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.InvokeSync<string>(
      TestValues.Name,
      TestValues.Body,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the InvokeAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.InvokeAsync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.InvokeAsync<string>(
      TestValues.Name,
      TestValues.Body,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});

/**
 * Test the UpdateEventSourceMappingAsync method
 */
describe(`${LambdaHelper.name}.${lambdaHelperMock.UpdateEventSourceMappingAsync.name}`, () => {
  test(TestValues.InvalidTest, () => {
    const actual = lambdaHelperMock.UpdateEventSourceMappingAsync(
      TestValues.Name,
      TestValues.BooleanValue,
      TestValues.Uuid,
      TestValues.NumberValue,
    );
    return expect(actual).rejects.toThrow(TestValues.AWSError);
  });
});
