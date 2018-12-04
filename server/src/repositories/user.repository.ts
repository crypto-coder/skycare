import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {User} from '../models';
import {LocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.local') dataSource: LocalDataSource,
  ) {
    super(User, dataSource);
  }
}
