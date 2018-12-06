import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseEscort} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseEscortRepository extends DefaultCrudRepository<
  CaseEscort,
  typeof CaseEscort.prototype.caseEscortID
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(CaseEscort, dataSource);
  }
}
