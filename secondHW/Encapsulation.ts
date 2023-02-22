class MyComputer {
    private _myPrivateFiles: string;

    constructor(myPrivateFiles: string) {
        this._myPrivateFiles = myPrivateFiles;
    }

    get myPrivateFiles(): string {
        return this._myPrivateFiles;
    }

    set myPrivateFiles(value: string) {
        if (value === '') throw new Error("File names can't be an empty string");
        this._myPrivateFiles = value;
    }
}

const object = new MyComputer('string');

object.myPrivateFiles = 'another string';

console.log(object.myPrivateFiles);