import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseTransaction} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseTransactionRepository extends DefaultCrudRepository<
  CaseTransaction,
  typeof CaseTransaction.prototype.transactionID
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(CaseTransaction, dataSource);
  }
}
