"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyObservable_1 = require("rxjs/observable/EmptyObservable");
var KeyboardMock = /** @class */ (function () {
    function KeyboardMock() {
    }
    KeyboardMock.instance = function () {
        var instance = jasmine.createSpyObj('Keyboard', [
            'hideKeyboardAccessoryBar',
            'show',
            'close',
            'disableScroll',
            'onKeyboardShow',
            'onKeyboardHide'
        ]);
        instance.onKeyboardShow.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.onKeyboardHide.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        return instance;
    };
    return KeyboardMock;
}());
exports.KeyboardMock = KeyboardMock;
//# sourceMappingURL=keyboard.js.map