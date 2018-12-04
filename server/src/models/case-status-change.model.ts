import {Entity, model, property} from '@loopback/repository';

@model()
export class CaseStatusChange extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  statusChangeID: string;

  @property({
    type: 'string',
    required: true,
  })
  caseID: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'date',
    required: true,
    default: Date.now().toString(),
  })
  date: string;

  constructor(data?: Partial<CaseStatusChange>) {
    super(data);
  }
}
