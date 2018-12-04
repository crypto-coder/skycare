import {Entity, model, property} from '@loopback/repository';

@model()
export class CaseEscortReceipt extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  receiptID: string;

  @property({
    type: 'string',
    required: true,
  })
  caseEscortID: string;

  @property({
    type: 'string',
    required: true,
  })
  documentID: string;

  @property({
    type: 'string',
    required: true,
  })
  currencyType: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'date',
    required: true,
  })
  receiptDate: string;

  constructor(data?: Partial<CaseEscortReceipt>) {
    super(data);
  }
}
