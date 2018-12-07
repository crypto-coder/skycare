import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseStatusChange} from '../models';
import {CloudantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseStatusChangeRepository extends DefaultCrudRepository<
  CaseStatusChange,
  typeof CaseStatusChange.prototype.statusChangeID
> {
  constructor(
    @inject('datasources.cloudant') dataSource: CloudantDataSource,
  ) {
    super(CaseStatusChange, dataSource);
  }
}
