import {Entity, model, property} from '@loopback/repository';

@model()
export class CompanyUser extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  companyUserID: string;

  @property({
    type: 'string',
    required: true,
  })
  companyID: string;

  @property({
    type: 'number',
    required: true,
  })
  userID: number;

  @property({
    type: 'date',
    required: true,
    default: Date.now().toString(),
  })
  lastLogin: string;



  constructor(data?: Partial<CompanyUser>) {
    super(data);
  }
}
