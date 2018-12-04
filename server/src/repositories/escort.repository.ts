import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Escort} from '../models';
import {LocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EscortRepository extends DefaultCrudRepository<
  Escort,
  typeof Escort.prototype.escortID
> {
  constructor(
    @inject('datasources.local') dataSource: LocalDataSource,
  ) {
    super(Escort, dataSource);
  }
}
