import { AxiosRequestConfig } from 'axios';

type JPushPlatformType = 'ios' | 'android'| 'quickapp'| 'winphone';

interface Audience {
  tag?: string[];
  tag_and?: string[];
  tag_not?: string[];
  alias?: string[];
  registration_id?: string[];
  segment?: string[];
  abtest?: string[];
}

interface Notification {
  ai_opportunity?: boolean;
  alert?: string;
  android?: {
    alert: string;
    title?: string;
    builder_id?: number;
    channel_id?: string;
    priority?: number;
    category?: string;
    style?: number;
    alert_type?: number;
    big_text?: string;
    inbox?: object;
    big_pic_path?: string;
    extras?: {
      third_url_encode?: boolean;
      [key: string]: any;
    };
    large_icon?: string;
    small_icon_uri?: string;
    intent?: {
      url: string;
      [key: string]: any;
    };
    uri_activity?: string;
    uri_action?: string;
    badge_add_num?: number;
    badge_class?: string;
    sound?: string;
    show_begin_time?: string;
    show_end_time?: string;
    display_foreground?: string;
  };
  ios?: {
    alert: string | {
      title: string;
      body: string;
      'title-loc-key': string | null;
      'title-loc-args': string | null;
      'action-loc-key': string | null;
      'loc-key': string;
      'loc-args': string[];
      'launch-image': string;
      [key: string]: any;
    };
    sound?: string | {
      critical: number;
      name: string;
      volume: number;
      [key: string]: any;
    };
    badge?: number;
    'content-available'?: boolean;
    'mutable-content'?: boolean;
    category?: string;
    extras?: object;
    'thread-id'?: string;
  };
  voip?: object;
  quickapp?: {
    title: string;
    alert: string;
    page: string;
    extras?: object;
  };
  winphone?: {
    alert: string;
    title?: string;
    _open_page?: string;
    extras?: object;
  };
}

interface Message {
  msg_content: string;
  title?: string;
  content_type?: string;
  extras?: object;
}

interface SMSMessage {
  delay_time: number;
  signid?: number;
  temp_id: bigint;
  temp_para?: object;
  active_filter?: boolean;
}

interface Options {
  sendno?: number;
  time_to_live?: number;
  override_msg_id?: bigint;
  apns_production?: boolean;
  apns_collapse_id?: string;
  big_push_duration?: number;
  third_party_channel?: object;
}

interface Callback {
 url?: string;
  params?: object;
  type?: string;
}

interface Notification_3rd {
  title?: string;
  content: string;
  channel_id?: string;
  uri_activity?: string;
  uri_action?: string;
  badge_add_num?: string;
  badge_class?: string;
  sound?: string;
  extras?: object;
}

export interface JPushPayload {
  platform: 'all' | JPushPlatformType | JPushPlatformType[];
  audience: 'all' | Audience;
  notification?: Notification;
  message?: Message;
  inapp_message?: object;
  sms_message?: SMSMessage;
  options?: Options;
  callback?: Callback;
  notification_3rd?: Notification_3rd;
  cid?: string;
}

export interface JPushBatchSinglePayload {
  pushlist: {
    [key: string]: {
      platform: 'all' | JPushPlatformType | JPushPlatformType[];
      target: string,
      notification?: Notification;
      message?: Message;
      sms_message?: SMSMessage;
      options?: Options;
    }
  }
}

export interface JPushClientConfig extends AxiosRequestConfig {
  auth: {
    username: string,
    password: string,
  }
}
