<h1 align="center">typescript-aws-lambda-helper</h1>

<div align="center">
    
<b>Typescript helper functions for AWS Lambda service</b>
    
[![Build Status](https://dev.azure.com/kbrashears5/github/_apis/build/status/kbrashears5.typescript-aws-lambda-helper?branchName=master)](https://dev.azure.com/kbrashears5/github/_build/latest?definitionId=16&branchName=master)
[![Tests](https://img.shields.io/azure-devops/tests/kbrashears5/github/16)](https://img.shields.io/azure-devops/tests/kbrashears5/github/16)
[![Code Coverage](https://img.shields.io/azure-devops/coverage/kbrashears5/github/16)](https://img.shields.io/azure-devops/coverage/kbrashears5/github/16)

[![NPM Version](https://img.shields.io/npm/v/typescript-aws-lambda-helper)](https://img.shields.io/npm/v/typescript-aws-lambda-helper)
[![Downloads](https://img.shields.io/npm/dt/typescript-aws-lambda-helper)](https://img.shields.io/npm/dt/typescript-aws-lambda-helper)

</div>

## Install

```
npm install typescript-aws-lambda-helper@latest
```

## Usage

### Default - running in Lambda in your own account

```typescript
const logger = new Logger(LogLevel.Trace);

const helper = new LambdaHelper(logger);

const response = await helper.InvokeAsync('lambdaName', 'payload');
```

### Running in separate account or not in Lambda

```typescript
const logger = new Logger(LogLevel.Trace);

const options: AWS.Lambda.ClientConfiguration = {
  accessKeyId: '{access_key}',
  secretAccessKey: '{secret_key}',
  region: 'us-east-1',
};

const repository = new AWS.Lambda(options);

const helper = new LambdaHelper(logger, repository);

const response = await helper.InvokeAsync('lambdaName', 'payload');
```

## Notes

If no options are supplied, will default to `us-east-1` as the region
