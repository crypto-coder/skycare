import {Entity, model, property} from '@loopback/repository';

@model()
export class CaseProgressNote extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  noteID: string;

  @property({
    type: 'string',
    required: true,
  })
  caseID: string;

  @property({
    type: 'string',
    required: true,
  })
  escourtID: string;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'date',
    required: true,
    default: Date.now().toString(),
  })
  date: string;

  constructor(data?: Partial<CaseProgressNote>) {
    super(data);
  }
}
