# Logger

## Desc

// @TODO:

#### Create logger instance

```js
const logger = new Logger({
  scope: 'app',
  tags: ['App', 'init()'],
  accessHandler: () => process.env.NODE_ENV !== 'production',
});
```

#### Logger simple usage

```js
logger.log('Debug');
logger.error(new Error());
```

#### Logger advanced usage

```js
logger.log(new LogModel({
  tags: ['methodName()'],
  messages: ['Data is invalid!'],
  data: {
    title: 'Hello world',
    age: 42,
    date: new Date(),
  },
  epilog: new Error(),
}));

logger.error(new LogModel({
  tags: ['methodName()'],
  data: {
    ...prepareError(new Error()),
  },
}));
```
