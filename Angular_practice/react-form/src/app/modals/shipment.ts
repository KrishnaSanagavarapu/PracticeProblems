export interface GenericShipment {
  shippingDestination: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    zipCode: number;
    companyName: string;
    contactName: string;
    phone: string;
  };
  origin: number;
  packageType: number;
  salesPerson: number;
  shippingService: {
    shipmentBilling: {
      billType: string;
    },
    shippingCarrier: {
      carrierId: string;
      levelId: string;
    };
    notes: string;
    shippingSterlingLevel: {
      id: string;
    },
    transactionId: string;
  };
  shipType: string;
  value: number;
  weight: number;
  merchandise: string;

  noOfJewelryPieces: number;
  review: GenericShipmentReview;
}

export interface GenericShipmentReview {
  imageData: string;
  trackingNo: string;
  verificationreport: string;
}

export interface State {
  code: string;
  name: string;
  minZipcode: number[];
  maxZipcode: number[];
}
