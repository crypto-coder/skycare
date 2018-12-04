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
import {CaseStatusChange} from '../models';
import {CaseStatusChangeRepository} from '../repositories';

export class CaseStatusChangesController {
  constructor(
    @repository(CaseStatusChangeRepository)
    public caseStatusChangeRepository : CaseStatusChangeRepository,
  ) {}

  @post('/case-status-changes', {
    responses: {
      '200': {
        description: 'CaseStatusChange model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseStatusChange}}},
      },
    },
  })
  async create(@requestBody() caseStatusChange: CaseStatusChange): Promise<CaseStatusChange> {
    return await this.caseStatusChangeRepository.create(caseStatusChange);
  }

  @get('/case-status-changes/count', {
    responses: {
      '200': {
        description: 'CaseStatusChange model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CaseStatusChange)) where?: Where,
  ): Promise<Count> {
    return await this.caseStatusChangeRepository.count(where);
  }

  @get('/case-status-changes', {
    responses: {
      '200': {
        description: 'Array of CaseStatusChange model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CaseStatusChange}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CaseStatusChange)) filter?: Filter,
  ): Promise<CaseStatusChange[]> {
    return await this.caseStatusChangeRepository.find(filter);
  }

  @patch('/case-status-changes', {
    responses: {
      '200': {
        description: 'CaseStatusChange PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() caseStatusChange: CaseStatusChange,
    @param.query.object('where', getWhereSchemaFor(CaseStatusChange)) where?: Where,
  ): Promise<Count> {
    return await this.caseStatusChangeRepository.updateAll(caseStatusChange, where);
  }

  @get('/case-status-changes/{id}', {
    responses: {
      '200': {
        description: 'CaseStatusChange model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseStatusChange}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CaseStatusChange> {
    return await this.caseStatusChangeRepository.findById(id);
  }

  @patch('/case-status-changes/{id}', {
    responses: {
      '204': {
        description: 'CaseStatusChange PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() caseStatusChange: CaseStatusChange,
  ): Promise<void> {
    await this.caseStatusChangeRepository.updateById(id, caseStatusChange);
  }

  @del('/case-status-changes/{id}', {
    responses: {
      '204': {
        description: 'CaseStatusChange DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.caseStatusChangeRepository.deleteById(id);
  }
}
