<h1 align="center">typescript-aws-lambda-helper</h1>

<div align="center">
    
<b>Typescript helper functions for AWS Lambda service</b>
    
[![CI/CD](https://github.com/kbrashears5/typescript-aws-lambda-helper/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/kbrashears5/typescript-aws-lambda-helper/actions/workflows/ci-cd.yml)

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
import * as Lambda from '@aws-sdk/client-lambda';

const logger = new Logger(LogLevel.Trace);

const options: Lambda.LambdaClientConfig = {
  accessKeyId: '{access_key}',
  secretAccessKey: '{secret_key}',
  region: 'us-east-1',
};

const repository = new Lambda.Lambda(options);

const helper = new LambdaHelper(logger, repository);

const response = await helper.InvokeAsync('lambdaName', 'payload');
```

## Notes

If no options are supplied, will default to `us-east-1` as the region

## Development

Clone the latest and run

```npm
npm run prep
```

to install packages and prep the git hooks
