import {Entity, model, property} from '@loopback/repository';

@model()
export class EscortAvailability extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  availabilityID: string;

  @property({
    type: 'string',
    required: true,
  })
  escortID: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  constructor(data?: Partial<EscortAvailability>) {
    super(data);
  }
}
