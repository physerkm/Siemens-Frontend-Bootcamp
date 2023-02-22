var MyComputer = /** @class */ (function () {
    function MyComputer(myPrivateFiles) {
        this._myPrivateFiles = myPrivateFiles;
    }
    Object.defineProperty(MyComputer.prototype, "myPrivateFiles", {
        get: function () {
            return this._myPrivateFiles;
        },
        set: function (value) {
            if (value === '')
                throw new Error("File names can't be an empty string");
            this._myPrivateFiles = value;
        },
        enumerable: false,
        configurable: true
    });
    return MyComputer;
}());
var object = new MyComputer('string');
object.myPrivateFiles = 'another string';
console.log(object.myPrivateFiles);
