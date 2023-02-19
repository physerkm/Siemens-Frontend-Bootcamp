enum SizeType {
    Large,
    Medium,
    Small    
}

interface ISize{
     calculate(size: number): number;
}

class LargeCalculate implements ISize{
    calculate(size: number): number {
        return size * 1.14;
    }
}

class MediumCalculate implements ISize {
    calculate(size: number): number {
        return size * 1.07;
    }   
}

class SmallCalculate implements ISize{
    calculate(size: number): number {
        return size * 1.00;
    }    
}

class SizeCalculate {
    calculate(size:number, sizeCalculate:ISize) {
        return sizeCalculate.calculate(size);
    }
}

var sizeCalculate = new SizeCalculate();

interface ISizeKeyValue {
    sizeType: SizeType;
    SizeCalculate: ISize;
}

let externalSizeType = SizeType.Large;
let externalSize = 14.5;

let sizeArray:ISizeKeyValue[] = [];

sizeArray.push({sizeType:SizeType.Large, SizeCalculate: new LargeCalculate()});
sizeArray.push({sizeType:SizeType.Medium, SizeCalculate: new MediumCalculate()});
sizeArray.push({sizeType:SizeType.Small, SizeCalculate: new SmallCalculate()});

let currentSize= sizeArray.find(x=>x.sizeType==externalSizeType);
console.log(currentSize?.SizeCalculate.calculate(externalSize));