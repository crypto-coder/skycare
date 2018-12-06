import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {EscortAvailability} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EscortAvailabilityRepository extends DefaultCrudRepository<
  EscortAvailability,
  typeof EscortAvailability.prototype.availabilityID
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(EscortAvailability, dataSource);
  }
}
