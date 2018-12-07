import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseEscort} from '../models';
import {CloudantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseEscortRepository extends DefaultCrudRepository<
  CaseEscort,
  typeof CaseEscort.prototype.caseEscortID
> {
  constructor(
    @inject('datasources.cloudant') dataSource: CloudantDataSource,
  ) {
    super(CaseEscort, dataSource);
  }
}
