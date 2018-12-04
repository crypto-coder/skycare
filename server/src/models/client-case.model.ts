import {Entity, model, property} from '@loopback/repository';

@model()
export class ClientCase extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  caseID: string;

  @property({
    type: 'string',
    required: true,
  })
  companyID: string;

  @property({
    type: 'number',
    required: true,
  })
  caseNumber: number;

  @property({
    type: 'string',
    required: true,
  })
  patientFirstName: string;

  @property({
    type: 'string',
    required: true,
  })
  patientLastName: string;

  @property({
    type: 'string',
    required: true,
  })
  diagnosis: string;

  @property({
    type: 'date',
    required: true,
  })
  firstDayOfTravel: string;

  @property({
    type: 'number',
    required: true,
  })
  numberTravelDays: number;

  @property({
    type: 'string',
    required: true,
  })
  originCity: string;

  @property({
    type: 'string',
    required: true,
  })
  destinationCity: string;

  @property({
    type: 'number',
    required: true,
  })
  quotedPrice: number;

  constructor(data?: Partial<ClientCase>) {
    super(data);
  }
}
