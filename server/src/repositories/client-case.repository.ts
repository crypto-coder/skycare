import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ClientCase} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClientCaseRepository extends DefaultCrudRepository<
  ClientCase,
  typeof ClientCase.prototype.caseID
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(ClientCase, dataSource);
  }
}
