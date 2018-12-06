import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CaseProgressNote} from '../models';
import {CouchdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaseProgressNoteRepository extends DefaultCrudRepository<
  CaseProgressNote,
  typeof CaseProgressNote.prototype.noteID
> {
  constructor(
    @inject('datasources.couchdb') dataSource: CouchdbDataSource,
  ) {
    super(CaseProgressNote, dataSource);
  }
}
