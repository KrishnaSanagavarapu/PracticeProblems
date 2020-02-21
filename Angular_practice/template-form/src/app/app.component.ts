import { Component, ViewChild, ElementRef } from '@angular/core';
import { ShipmentState } from './state/shipment.state';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { GenericShipmentReview, GenericShipment } from './modals/shipment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  genericShipmentData: GenericShipment;
  genericShippingForm: FormGroup;
  states: string[] = ['OH', 'KY', 'TX'];
  subscriptions: Subscription[] = [];
  @ViewChild('printBtn') printBtnField: ElementRef;

  constructor( private fb: FormBuilder, private shipmentState: ShipmentState) {}

  ngOnInIt() {
    this.buildFormGroup();
  }

  buildFormGroup(): void {
    this.genericShippingForm = this.fb.group({
      shippingDestination: this.fb.group({
            address1: ['', Validators.required],
            address2: [''],
            city: ['', Validators.required],
            state: ['', Validators.required],
            country: ['', Validators.required],
            zipCode: ['', Validators.required],
            contactName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
            companyName: ['', Validators.required],
            phone: ['', Validators.required]
         }),
      origin: [950],
      salesPerson: [570127],
      shippingService: this.fb.group({
        shipmentBilling: this.fb.group({
          billType: ['SENDER']
        }),
        shippingCarrier: this.fb.group({
          carrierId: ['UPS'],
          levelId: ['OPM']
        }),
        notes: [''],
        shippingSterlingLevel: this.fb.group({
          id: ['IPU']
        }),
      }),
      shipType: ['GENERIC'],
      weight: ['', [Validators.required, Validators.pattern('^[0-9]*')]],
      value: ['', [Validators.required, Validators.pattern('^[0-9]+[\.][0-9]{2}$')]],
      noOfJewelryPieces: ['', [Validators.required, Validators.pattern('^[0-9]*')]],
      merchandise: [''],
      packageType: ['1']

    });
  }

  submitForm() {
    const formValueObject = this.genericShippingForm.value;
    formValueObject.origin = 950;
    formValueObject.salesPerson = 570127;
    formValueObject.shippingService.shipmentBilling.billType = 'SENDER';
    formValueObject.shippingService.notes = '';
    formValueObject.shippingService.shippingCarrier.carrierId = 'UPS';
    formValueObject.shippingService.shippingCarrier.levelId = 'OPM';
    formValueObject.shippingService.transactionId = '123456';
    formValueObject.weight = (formValueObject.weight);
    formValueObject.value = Number(formValueObject.value);
    formValueObject.shipType = 'GENERIC';
    formValueObject.merchandise = '';
    formValueObject.packageType = 1;
    const jewelryCount = formValueObject.noOfJewelryPieces;
    delete formValueObject.noOfJewelryPieces;


    this.subscriptions.push(
      this.shipmentState.submitGenericShipping(formValueObject).subscribe((resp: GenericShipmentReview) => {
        this.genericShipmentData = formValueObject;
        this.genericShipmentData.noOfJewelryPieces = jewelryCount;
        this.genericShipmentData.review = resp;
        setTimeout(() => {
          this.triggerPrint();
        }, 1000);
      })
    );
  }


  triggerPrint(): void {
   this.printBtnField.nativeElement.click();
  }

  get address1(): AbstractControl {
    return this.destination.get('address1');
  }

  get address2(): AbstractControl {
    return this.destination.get('address2');
  }



  get city(): AbstractControl {
    return this.destination.get('city');
  }

  get state(): AbstractControl {
    return this.destination.get('state');
  }

  get country(): AbstractControl {
    return this.destination.get('country');
  }

  get zipCode(): AbstractControl {
    return this.destination.get('zipCode');
  }

  get contactName(): AbstractControl {
    return this.destination.get('contactName');
  }

  get companyName(): AbstractControl {
    return this.destination.get('companyName');
  }

  get phone(): AbstractControl {
    return this.destination.get('phone');
  }



  get destination(): AbstractControl {
    return this.genericShippingForm.get('shippingDestination');
  }



  get weight(): AbstractControl {
    return this.genericShippingForm.get('weight');
  }

  get noOfJewelryPieces(): AbstractControl {
    return this.genericShippingForm.get('noOfJewelryPieces');
  }

  get value(): AbstractControl {
    return this.genericShippingForm.get('value');
  }


}


//Request URL: https://test-repair.jewels.com/SignetRepairService/api/shipment/genericShipment

/*

{
  "shippingDestination":
    {
      "address1":"60 HUNT CLUB DR, APT 109",
      "address2":"copley","city":"AKRON",
      "state":"OH",
      "country":"USA",
      "zipCode":"44321",
      "contactName":"krishna",
      "companyName":"signet",
      "phone":"5712867286"},
      "origin":950,
      "salesPerson":"570127",
      "shippingService":
           { "shipmentBilling":
              {
       "billType":"SENDER"
      },
  "shippingCarrier":
    {"carrierId":"UPS","levelId":"OPM"},
    "notes":"",
    "shippingSterlingLevel":{"id":"IPU"},
    "transactionId":"123456"},
    "shipType":"GENERIC",
    "weight":"1",
    "value":12,
    "merchandise":"","packageType":1
  }

  */
