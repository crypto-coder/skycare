import {Entity, model, property} from '@loopback/repository';

@model()
export class Escort extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  escortID: string;

  @property({
    type: 'number',
    required: true,
  })
  userID: number;

  @property({
    type: 'string',
    required: true,
  })
  contactPhone: string;

  @property({
    type: 'string',
  })
  licenseType?: string;

  @property({
    type: 'date',
  })
  licenseExpiration?: string;

  @property({
    type: 'date',
  })
  alsExpiration?: string;

  @property({
    type: 'date',
  })
  passportExpiration?: string;

  @property({
    type: 'string',
  })
  passportCountry?: string;

  @property({
    type: 'string',
  })
  visaCountry1?: string;

  @property({
    type: 'string',
  })
  visaCountry2?: string;

  @property({
    type: 'string',
  })
  visaCountry3?: string;

  @property({
    type: 'string',
  })
  language1?: string;

  @property({
    type: 'string',
  })
  language2?: string;

  @property({
    type: 'string',
  })
  language3?: string;

  @property({
    type: 'string',
  })
  language4?: string;

  @property({
    type: 'string',
  })
  homeAirportCity?: string;

  @property({
    type: 'string',
  })
  emergencyContactName?: string;

  @property({
    type: 'string',
  })
  emergencyContactPhone?: string;

  @property({
    type: 'string',
  })
  emergencyContactRelation?: string;

  @property({
    type: 'string',
  })
  paymentAccountName?: string;

  @property({
    type: 'string',
  })
  paymentBankName?: string;

  @property({
    type: 'string',
  })
  paymentBankAddress1?: string;

  @property({
    type: 'string',
  })
  paymentBankAddress2?: string;

  @property({
    type: 'string',
  })
  paymentBankCity?: string;

  @property({
    type: 'string',
  })
  paymentBankRegion?: string;

  @property({
    type: 'string',
  })
  paymentBankCountry?: string;

  @property({
    type: 'string',
  })
  paymentBankPostalCode?: string;

  @property({
    type: 'string',
  })
  paymentUSRoutingNumber?: string;

  @property({
    type: 'string',
  })
  paymentIntlRoutingNumber?: string;

  @property({
    type: 'string',
  })
  paymentAccountNumber?: string;

  constructor(data?: Partial<Escort>) {
    super(data);
  }
}
