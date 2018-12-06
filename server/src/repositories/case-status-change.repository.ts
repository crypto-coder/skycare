import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseStatusChange} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseStatusChangeRepository extends DefaultCrudRepository<
  CaseStatusChange,
  typeof CaseStatusChange.prototype.statusChangeID
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(CaseStatusChange, dataSource);
  }
}
