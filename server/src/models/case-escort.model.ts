import {Entity, model, property} from '@loopback/repository';

@model()
export class CaseEscort extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  caseEscortID: string;

  @property({
    type: 'string',
    required: true,
  })
  caseID: string;

  @property({
    type: 'string',
    required: true,
  })
  escortID: string;

  @property({
    type: 'number',
    required: true,
  })
  payPerDay: number;

  @property({
    type: 'string',
  })
  flightNumber?: string;

  @property({
    type: 'string',
  })
  connectionCity1?: string;

  @property({
    type: 'string',
  })
  flightNumber2?: string;

  @property({
    type: 'string',
  })
  connectionCity2?: string;

  @property({
    type: 'string',
  })
  flightNumber3?: string;

  constructor(data?: Partial<CaseEscort>) {
    super(data);
  }
}
