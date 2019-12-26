import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name AliyunPush
 * @description
 * This plugin is used for AliyunPush support. Integrated with the latest SDK.
 *
 * Requires Cordova plugin: `cordova-plugin-vivlong-aliyunpush`.
 *
 * @usage
 * ```typescript
 * import { AliyunPush } from 'ionic-native-vivlong-aliyunpush';
 *
 * constructor(private aliyunPush: AliyunPush) {
 *
 */
export declare class AliyunPushOriginal extends IonicNativePlugin {
    onMessage(): Promise<any>;
    requireNotifyPermission(msg: string): Promise<any>;
    getRegisterId(): Promise<any>;
    bindAccount(account: string): Promise<any>;
    unbindAccount(): Promise<any>;
    bindTags(tags: string[]): Promise<any>;
    unbindTags(tags: string[]): Promise<any>;
    listTags(): Promise<any>;
}

export declare const AliyunPush: AliyunPushOriginal;