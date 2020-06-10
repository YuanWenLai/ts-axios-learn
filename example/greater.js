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
var Animal = /** @class */ (function () {
    function Animal(age) {
        this.age = age;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("animal moved " + distance + "m");
    };
    return Animal;
}());
// User 已经继承了 Animal的age，在User属性中不用再生命，只需要调用即可
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lasetName, age) {
        var _this = _super.call(this, age) || this;
        _this.firstName = firstName;
        _this.lastName = lasetName;
        _this.fullName = firstName + lasetName;
        return _this;
    }
    User.prototype.sayHi = function () {
        return this.fullName + ' ' + 'Hi!' + ' age: ' + this.age;
    };
    // 静态方法无法直接访问class的属性，需要外部传参
    User.welcome = function (name) {
        return 'no instance ,welcome by class ' + name;
    };
    return User;
}(Animal));
function greater(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('Yuan', 'Wenlai', 23);
console.log(greater(user));
console.log(user.sayHi());
console.log(User.welcome(user.fullName));
