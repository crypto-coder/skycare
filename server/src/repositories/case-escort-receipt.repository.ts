import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseEscortReceipt} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseEscortReceiptRepository extends DefaultCrudRepository<
  CaseEscortReceipt,
  typeof CaseEscortReceipt.prototype.receiptID
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(CaseEscortReceipt, dataSource);
  }
}
