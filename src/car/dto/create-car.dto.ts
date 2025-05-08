export class CreateCarDto {
    brand: string;
    model: string;
    license: string;
    VIN: string;
    vignetteDate: Date;
    registrationDate: Date;
    insuranceDate: Date;
    inspectionDate: Date;
    images: string[];
    ownerId: String;
  }
  
