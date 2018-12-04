import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ClientCase} from '../models';
import {LocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClientCaseRepository extends DefaultCrudRepository<
  ClientCase,
  typeof ClientCase.prototype.caseID
> {
  constructor(
    @inject('datasources.local') dataSource: LocalDataSource,
  ) {
    super(ClientCase, dataSource);
  }
}
