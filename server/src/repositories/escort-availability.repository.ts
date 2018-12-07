import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {EscortAvailability} from '../models';
import {CloudantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EscortAvailabilityRepository extends DefaultCrudRepository<
  EscortAvailability,
  typeof EscortAvailability.prototype.availabilityID
> {
  constructor(
    @inject('datasources.cloudant') dataSource: CloudantDataSource,
  ) {
    super(EscortAvailability, dataSource);
  }
}
