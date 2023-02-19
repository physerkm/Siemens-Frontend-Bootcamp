class BasePhone {
    call() {
        console.log("Arama yapildi.");
    }
}

class IPhone12 extends BasePhone {
    takePhoto() {
        console.log("Fotoğraf çekildi.")
    }
}

class Nokia extends BasePhone {
    takePhoto() {
        throw new Error("Fotoğraf çekme özelliği yok.");
    }
}

let phone: BasePhone;
phone = new IPhone12();waes

phone = new IPhone12();
phone.call();
(phone as IPhone12).takePhoto();

phone = new Nokia();
