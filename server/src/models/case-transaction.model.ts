import {Entity, model, property} from '@loopback/repository';

@model()
export class CaseTransaction extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  transactionID: string;

  @property({
    type: 'string',
    required: true,
  })
  caseID: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  constructor(data?: Partial<CaseTransaction>) {
    super(data);
  }
}
