import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseTransaction} from '../models';
import {CloudantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseTransactionRepository extends DefaultCrudRepository<
  CaseTransaction,
  typeof CaseTransaction.prototype.transactionID
> {
  constructor(
    @inject('datasources.cloudant') dataSource: CloudantDataSource,
  ) {
    super(CaseTransaction, dataSource);
  }
}
