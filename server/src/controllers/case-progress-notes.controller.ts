import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {CaseProgressNote} from '../models';
import {CaseProgressNoteRepository} from '../repositories';

export class CaseProgressNotesController {
  constructor(
    @repository(CaseProgressNoteRepository)
    public caseProgressNoteRepository : CaseProgressNoteRepository,
  ) {}

  @post('/case-progress-notes', {
    responses: {
      '200': {
        description: 'CaseProgressNote model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseProgressNote}}},
      },
    },
  })
  async create(@requestBody() caseProgressNote: CaseProgressNote): Promise<CaseProgressNote> {
    return await this.caseProgressNoteRepository.create(caseProgressNote);
  }

  @get('/case-progress-notes/count', {
    responses: {
      '200': {
        description: 'CaseProgressNote model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CaseProgressNote)) where?: Where,
  ): Promise<Count> {
    return await this.caseProgressNoteRepository.count(where);
  }

  @get('/case-progress-notes', {
    responses: {
      '200': {
        description: 'Array of CaseProgressNote model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CaseProgressNote}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CaseProgressNote)) filter?: Filter,
  ): Promise<CaseProgressNote[]> {
    return await this.caseProgressNoteRepository.find(filter);
  }

  @patch('/case-progress-notes', {
    responses: {
      '200': {
        description: 'CaseProgressNote PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() caseProgressNote: CaseProgressNote,
    @param.query.object('where', getWhereSchemaFor(CaseProgressNote)) where?: Where,
  ): Promise<Count> {
    return await this.caseProgressNoteRepository.updateAll(caseProgressNote, where);
  }

  @get('/case-progress-notes/{id}', {
    responses: {
      '200': {
        description: 'CaseProgressNote model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseProgressNote}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CaseProgressNote> {
    return await this.caseProgressNoteRepository.findById(id);
  }

  @patch('/case-progress-notes/{id}', {
    responses: {
      '204': {
        description: 'CaseProgressNote PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() caseProgressNote: CaseProgressNote,
  ): Promise<void> {
    await this.caseProgressNoteRepository.updateById(id, caseProgressNote);
  }

  @del('/case-progress-notes/{id}', {
    responses: {
      '204': {
        description: 'CaseProgressNote DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.caseProgressNoteRepository.deleteById(id);
  }
}
