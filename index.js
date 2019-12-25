var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AliyunPushOriginal = /** @class */ (function (_super) {
    __extends(AliyunPushOriginal, _super);
    function AliyunPushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AliyunPushOriginal.prototype.onMessage = function () { return cordova(this, "onMessage", {}, arguments); };
    AliyunPushOriginal.prototype.requireNotifyPermission = function (msg) { return cordova(this, "requireNotifyPermission", {}, arguments); };
    AliyunPushOriginal.prototype.getRegisterId = function () { return cordova(this, "getRegisterId", {}, arguments); };
    AliyunPushOriginal.prototype.bindAccount = function (account) { return cordova(this, "bindAccount", {}, arguments); };
    AliyunPushOriginal.prototype.unbindAccount = function () { return cordova(this, "unbindAccount", {}, arguments); };
    AliyunPushOriginal.prototype.bindTags = function (tags) { return cordova(this, "bindTags", {}, arguments); };
    AliyunPushOriginal.prototype.unbindTags = function (tags) { return cordova(this, "unbindTags", {}, arguments); };
    AliyunPushOriginal.prototype.listTags = function () { return cordova(this, "listTags", {}, arguments); };
    AliyunPushOriginal.pluginName = "AliyunPush";
    AliyunPushOriginal.plugin = "cordova-plugin-vivlong-aliyunpush";
    AliyunPushOriginal.pluginRef = "aliyunPush";
    AliyunPushOriginal.repo = "https://github.com/vivlong/ionic-native-vivlong-aliyunpush.git";
    AliyunPushOriginal.install = "ionic cordova plugin add cordova-plugin-vivlong-aliyunpush --variable HMSAPPID=your_hw_app_id";
    AliyunPushOriginal.installVariables = ["HMSAPPID"];
    AliyunPushOriginal.platforms = ["Android"];
    return AliyunPushOriginal;
}(IonicNativePlugin));
var AliyunPush = new AliyunPushOriginal();
export { AliyunPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FsaXl1bnB1c2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkJ4Qyw4QkFBaUI7Ozs7SUFHL0MsOEJBQVM7SUFLVCw0Q0FBdUIsYUFBQyxHQUFXO0lBS25DLGtDQUFhO0lBS2IsZ0NBQVcsYUFBQyxPQUFlO0lBSzNCLGtDQUFhO0lBS2IsNkJBQVEsYUFBQyxJQUFjO0lBS3ZCLCtCQUFVLGFBQUMsSUFBYztJQUt6Qiw2QkFBUTs7Ozs7Ozs7cUJBbkVWO0VBNkJnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IGFsaXl1blB1c2g6IGFueTtcblxuLyoqXG4gKiBAbmFtZSBBbGl5dW5QdXNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGlzIHVzZWQgZm9yIEFsaXl1blB1c2ggc3VwcG9ydC4gSW50ZWdyYXRlZCB3aXRoIHRoZSBsYXRlc3QgU0RLLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYWxpeXVucHVzaGAuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBbGl5dW5QdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbGl5dW5wdXNoJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsaXl1blB1c2g6IEFsaXl1blB1c2gpIHtcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWxpeXVuUHVzaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXZpdmxvbmctYWxpeXVucHVzaCcsXG4gIHBsdWdpblJlZjogJ2FsaXl1blB1c2gnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpdmxvbmcvaW9uaWMtbmF0aXZlLXZpdmxvbmctYWxpeXVucHVzaC5naXQnLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXZpdmxvbmctYWxpeXVucHVzaCAtLXZhcmlhYmxlIEhNU0FQUElEPXlvdXJfaHdfYXBwX2lkJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydITVNBUFBJRCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFsaXl1blB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBvbk1lc3NhZ2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlcXVpcmVOb3RpZnlQZXJtaXNzaW9uKG1zZzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldFJlZ2lzdGVySWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGJpbmRBY2NvdW50KGFjY291bnQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1bmJpbmRBY2NvdW50KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBiaW5kVGFncyh0YWdzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1bmJpbmRUYWdzKHRhZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGxpc3RUYWdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=