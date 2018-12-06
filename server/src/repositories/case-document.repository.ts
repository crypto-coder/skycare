import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseDocument} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseDocumentRepository extends DefaultCrudRepository<
  CaseDocument,
  typeof CaseDocument.prototype.documentID
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(CaseDocument, dataSource);
  }
}
