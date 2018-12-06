import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {EscortDocument} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EscortDocumentRepository extends DefaultCrudRepository<
  EscortDocument,
  typeof EscortDocument.prototype.documentID
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(EscortDocument, dataSource);
  }
}
