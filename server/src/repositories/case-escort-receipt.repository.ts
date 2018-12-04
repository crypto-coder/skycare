import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseEscortReceipt} from '../models';
import {LocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseEscortReceiptRepository extends DefaultCrudRepository<
  CaseEscortReceipt,
  typeof CaseEscortReceipt.prototype.receiptID
> {
  constructor(
    @inject('datasources.local') dataSource: LocalDataSource,
  ) {
    super(CaseEscortReceipt, dataSource);
  }
}
