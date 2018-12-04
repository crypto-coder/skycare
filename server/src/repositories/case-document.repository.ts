import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseDocument} from '../models';
import {LocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseDocumentRepository extends DefaultCrudRepository<
  CaseDocument,
  typeof CaseDocument.prototype.documentID
> {
  constructor(
    @inject('datasources.local') dataSource: LocalDataSource,
  ) {
    super(CaseDocument, dataSource);
  }
}
