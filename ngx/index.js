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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var AliyunPush = /** @class */ (function (_super) {
    __extends(AliyunPush, _super);
    function AliyunPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AliyunPush.prototype.onMessage = function () { return cordova(this, "onMessage", {}, arguments); };
    AliyunPush.prototype.requireNotifyPermission = function (msg) { return cordova(this, "requireNotifyPermission", {}, arguments); };
    AliyunPush.prototype.getRegisterId = function () { return cordova(this, "getRegisterId", {}, arguments); };
    AliyunPush.prototype.bindAccount = function (account) { return cordova(this, "bindAccount", {}, arguments); };
    AliyunPush.prototype.unbindAccount = function () { return cordova(this, "unbindAccount", {}, arguments); };
    AliyunPush.prototype.bindTags = function (tags) { return cordova(this, "bindTags", {}, arguments); };
    AliyunPush.prototype.unbindTags = function (tags) { return cordova(this, "unbindTags", {}, arguments); };
    AliyunPush.prototype.listTags = function () { return cordova(this, "listTags", {}, arguments); };
    AliyunPush.pluginName = "AliyunPush";
    AliyunPush.plugin = "cordova-plugin-aliyunpush";
    AliyunPush.pluginRef = "cordova.plugins.aliyunPush";
    AliyunPush.repo = "https://github.com/vivlong/cordova-plugin-aliyunpush";
    AliyunPush.install = "ionic cordova plugin add https://github.com/vivlong/cordova-plugin-aliyunpush.git --variable HMSAPPID=your_hw_app_id";
    AliyunPush.installVariables = ["HMSAPPID"];
    AliyunPush.platforms = ["Android"];
    AliyunPush = __decorate([
        Injectable()
    ], AliyunPush);
    return AliyunPush;
}(IonicNativePlugin));
export { AliyunPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FsaXl1bnB1c2gvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBMEJYLDhCQUFpQjs7OztJQUcvQyw4QkFBUztJQUtULDRDQUF1QixhQUFDLEdBQVc7SUFLbkMsa0NBQWE7SUFLYixnQ0FBVyxhQUFDLE9BQWU7SUFLM0Isa0NBQWE7SUFLYiw2QkFBUSxhQUFDLElBQWM7SUFLdkIsK0JBQVUsYUFBQyxJQUFjO0lBS3pCLDZCQUFROzs7Ozs7OztJQXRDRyxVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBM0J2QjtFQTJCZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBbGl5dW5QdXNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGlzIHVzZWQgZm9yIEFsaXl1blB1c2ggc3VwcG9ydC4gSW50ZWdyYXRlZCB3aXRoIHRoZSBsYXRlc3QgU0RLLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYWxpeXVucHVzaGAuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBbGl5dW5QdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbGl5dW5wdXNoJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsaXl1blB1c2g6IEFsaXl1blB1c2gpIHtcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWxpeXVuUHVzaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFsaXl1bnB1c2gnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYWxpeXVuUHVzaCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdml2bG9uZy9jb3Jkb3ZhLXBsdWdpbi1hbGl5dW5wdXNoJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBodHRwczovL2dpdGh1Yi5jb20vdml2bG9uZy9jb3Jkb3ZhLXBsdWdpbi1hbGl5dW5wdXNoLmdpdCAtLXZhcmlhYmxlIEhNU0FQUElEPXlvdXJfaHdfYXBwX2lkJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydITVNBUFBJRCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFsaXl1blB1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBvbk1lc3NhZ2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlcXVpcmVOb3RpZnlQZXJtaXNzaW9uKG1zZzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldFJlZ2lzdGVySWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGJpbmRBY2NvdW50KGFjY291bnQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1bmJpbmRBY2NvdW50KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBiaW5kVGFncyh0YWdzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB1bmJpbmRUYWdzKHRhZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGxpc3RUYWdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=