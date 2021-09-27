# JPush 极光推送
  - typescript
  - json payload and config
  - axios
## Based on REST API v3
[REST API v3] (https://docs.jiguang.cn/jpush/server/push/rest_api_v3_push/)

## Install
```bash
npm i jpush-json-payload
```

## Example
```js
import { JPushClient, JPushClientConfig, JPushPayload } from 'jpush-json-payload';

const clientConfig: JPushClientConfig = {
  auth: {
    username: 'appKey',
    password: 'masterSecret',
  },
};

const client = new JPushClient(clientConfig);

const payload: JPushPayload = {
  platform: 'all',
  audience: 'all',
  notification: {
    alert: 'Hello',
  },
};

async function main() {
  try {
    const response = await client.validate(payload);
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
}

main()
  .finally(() => {
    console.log('done');
  });

```
