interface ElectronicDevices {
    brandName: string;
    canTakePhoto: boolean;
    canHaveNetflixApp: boolean;
    cameraResolution: string;
    wirelessMobileInternetService: string;
    ram: number;
    havePencil(): void;
}

class MyMobilePhone implements ElectronicDevices {
    brandName: string;
    canTakePhoto: boolean;
    canHaveNetflixApp: boolean;
    cameraResolution: string;
    wirelessMobileInternetService: string;
    ram: number;
    constructor(brandName: string, canTakePhoto: boolean, canHaveNetflixApp: boolean, cameraResolution: string, wirelessMobileInternetService: string, ram: number) {
        this.brandName = brandName;
        this.canTakePhoto = canTakePhoto;
        this.canHaveNetflixApp = canHaveNetflixApp;
        this.cameraResolution = cameraResolution;
        this.wirelessMobileInternetService = wirelessMobileInternetService;
        this.ram = ram;
    }
    havePencil(): void {
        console.log("Ultra Mobile Phone")
    }
}

MyMobilePhone.havePencil();