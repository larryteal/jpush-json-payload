import axios, { AxiosInstance } from 'axios';
import {
  JPushBatchSinglePayload,
  JPushClientConfig,
  JPushPayload,
} from './interface';

import {
  JPUSH_API_BATCH_ALIAS_SINGLE_URL,
  JPUSH_API_BATCH_REGID_SINGLE_URL,
  JPUSH_API_CID_URL, JPUSH_API_PUSH_URL,
  JPUSH_API_REVOKE_URL,
  JPUSH_API_VALIDATE_URL,
} from './constant';

export class JPushClient {
  private axiosClient: AxiosInstance;

  constructor(config: JPushClientConfig) {
    this.axiosClient = axios.create(config);
  }

  push(payload: JPushPayload) {
    return this.axiosClient.post(JPUSH_API_PUSH_URL, payload);
  }

  cid(count: number = 1, type: 'push' | 'schedule' = 'push') {
    return this.axiosClient.get(`${JPUSH_API_CID_URL}?count=${count}&type=${type}`);
  }

  validate(payload: JPushPayload) {
    return this.axiosClient.post(JPUSH_API_VALIDATE_URL, payload);
  }

  pushBatchSingle(type: 'regid' | 'alias', payload: JPushBatchSinglePayload) {
    return type === 'regid'
      ? this.axiosClient.post(JPUSH_API_BATCH_REGID_SINGLE_URL, payload)
      : this.axiosClient.post(JPUSH_API_BATCH_ALIAS_SINGLE_URL, payload);
  }

  pushRevoke(msgid: string) {
    return this.axiosClient.delete(`${JPUSH_API_REVOKE_URL}/${msgid}`);
  }
}

export * from './interface';
