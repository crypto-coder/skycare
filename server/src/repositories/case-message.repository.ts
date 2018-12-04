import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseMessage} from '../models';
import {LocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseMessageRepository extends DefaultCrudRepository<
  CaseMessage,
  typeof CaseMessage.prototype.messageID
> {
  constructor(
    @inject('datasources.local') dataSource: LocalDataSource,
  ) {
    super(CaseMessage, dataSource);
  }
}
