"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlertMock = /** @class */ (function () {
    function AlertMock() {
    }
    AlertMock.instance = function () {
        var _dismissCallback;
        var instance = jasmine.createSpyObj('Alert', ['present', 'dismiss', 'onDidDismiss']);
        instance.present.and.returnValue(Promise.resolve());
        instance.dismiss.and.callFake(function (x) {
            _dismissCallback(x);
            return Promise.resolve();
        });
        instance.onDidDismiss.and.callFake(function (callback) {
            if (callback) {
                _dismissCallback = callback;
            }
        });
        return instance;
    };
    return AlertMock;
}());
exports.AlertMock = AlertMock;
//# sourceMappingURL=alert.js.map