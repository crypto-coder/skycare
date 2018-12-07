import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ClientCase} from '../models';
import {CloudantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClientCaseRepository extends DefaultCrudRepository<
  ClientCase,
  typeof ClientCase.prototype.caseID
> {
  constructor(
    @inject('datasources.cloudant') dataSource: CloudantDataSource,
  ) {
    super(ClientCase, dataSource);
  }
}
