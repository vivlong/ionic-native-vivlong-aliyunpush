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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FsaXl1bnB1c2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBMkJ4Qyw4QkFBaUI7Ozs7SUFHL0MsOEJBQVM7SUFLVCw0Q0FBdUIsYUFBQyxHQUFXO0lBS25DLGtDQUFhO0lBS2IsZ0NBQVcsYUFBQyxPQUFlO0lBSzNCLGtDQUFhO0lBS2IsNkJBQVEsYUFBQyxJQUFjO0lBS3ZCLCtCQUFVLGFBQUMsSUFBYztJQUt6Qiw2QkFBUTs7Ozs7Ozs7cUJBakVWO0VBMkJnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEFsaXl1blB1c2hcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaXMgdXNlZCBmb3IgQWxpeXVuUHVzaCBzdXBwb3J0LiBJbnRlZ3JhdGVkIHdpdGggdGhlIGxhdGVzdCBTREsuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1hbGl5dW5wdXNoYC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFsaXl1blB1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FsaXl1bnB1c2gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxpeXVuUHVzaDogQWxpeXVuUHVzaCkge1xuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbGl5dW5QdXNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdml2bG9uZy1hbGl5dW5wdXNoJyxcbiAgcGx1Z2luUmVmOiAnYWxpeXVuUHVzaCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdml2bG9uZy9pb25pYy1uYXRpdmUtdml2bG9uZy1hbGl5dW5wdXNoLmdpdCcsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tdml2bG9uZy1hbGl5dW5wdXNoIC0tdmFyaWFibGUgSE1TQVBQSUQ9eW91cl9od19hcHBfaWQnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0hNU0FQUElEJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxpeXVuUHVzaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIG9uTWVzc2FnZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWlyZU5vdGlmeVBlcm1pc3Npb24obXNnOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmVnaXN0ZXJJZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYmluZEFjY291bnQoYWNjb3VudDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHVuYmluZEFjY291bnQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGJpbmRUYWdzKHRhZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHVuYmluZFRhZ3ModGFnczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgbGlzdFRhZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==