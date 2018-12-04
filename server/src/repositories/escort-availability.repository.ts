import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {EscortAvailability} from '../models';
import {LocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EscortAvailabilityRepository extends DefaultCrudRepository<
  EscortAvailability,
  typeof EscortAvailability.prototype.availabilityID
> {
  constructor(
    @inject('datasources.local') dataSource: LocalDataSource,
  ) {
    super(EscortAvailability, dataSource);
  }
}
