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
    AliyunPush.plugin = "cordova-plugin-vivlong-aliyunpush";
    AliyunPush.pluginRef = "aliyunPush";
    AliyunPush.repo = "https://github.com/vivlong/ionic-native-vivlong-aliyunpush.git";
    AliyunPush.install = "ionic cordova plugin add cordova-plugin-vivlong-aliyunpush --variable HMSAPPID=your_hw_app_id";
    AliyunPush.installVariables = ["HMSAPPID"];
    AliyunPush.platforms = ["Android"];
    AliyunPush = __decorate([
        Injectable()
    ], AliyunPush);
    return AliyunPush;
}(IonicNativePlugin));
export { AliyunPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FsaXl1bnB1c2gvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBNEJYLDhCQUFpQjs7OztJQUcvQyw4QkFBUztJQUtULDRDQUF1QixhQUFDLEdBQVc7SUFLbkMsa0NBQWE7SUFLYixnQ0FBVyxhQUFDLE9BQWU7SUFLM0Isa0NBQWE7SUFLYiw2QkFBUSxhQUFDLElBQWM7SUFLdkIsK0JBQVUsYUFBQyxJQUFjO0lBS3pCLDZCQUFROzs7Ozs7OztJQXRDRyxVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBN0J2QjtFQTZCZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBhbGl5dW5QdXNoOiBhbnk7XG5cbi8qKlxuICogQG5hbWUgQWxpeXVuUHVzaFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBpcyB1c2VkIGZvciBBbGl5dW5QdXNoIHN1cHBvcnQuIEludGVncmF0ZWQgd2l0aCB0aGUgbGF0ZXN0IFNESy5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWFsaXl1bnB1c2hgLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQWxpeXVuUHVzaCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYWxpeXVucHVzaCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhbGl5dW5QdXNoOiBBbGl5dW5QdXNoKSB7XG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FsaXl1blB1c2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi12aXZsb25nLWFsaXl1bnB1c2gnLFxuICBwbHVnaW5SZWY6ICdhbGl5dW5QdXNoJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aXZsb25nL2lvbmljLW5hdGl2ZS12aXZsb25nLWFsaXl1bnB1c2guZ2l0JyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi12aXZsb25nLWFsaXl1bnB1c2ggLS12YXJpYWJsZSBITVNBUFBJRD15b3VyX2h3X2FwcF9pZCcsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnSE1TQVBQSUQnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGl5dW5QdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgb25NZXNzYWdlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZXF1aXJlTm90aWZ5UGVybWlzc2lvbihtc2c6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRSZWdpc3RlcklkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBiaW5kQWNjb3VudChhY2NvdW50OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdW5iaW5kQWNjb3VudCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgYmluZFRhZ3ModGFnczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdW5iaW5kVGFncyh0YWdzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBsaXN0VGFncygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19