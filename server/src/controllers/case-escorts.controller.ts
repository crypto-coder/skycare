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
import {CaseEscort} from '../models';
import {CaseEscortRepository} from '../repositories';

export class CaseEscortsController {
  constructor(
    @repository(CaseEscortRepository)
    public caseEscortRepository : CaseEscortRepository,
  ) {}

  @post('/case-escorts', {
    responses: {
      '200': {
        description: 'CaseEscort model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseEscort}}},
      },
    },
  })
  async create(@requestBody() caseEscort: CaseEscort): Promise<CaseEscort> {
    return await this.caseEscortRepository.create(caseEscort);
  }

  @get('/case-escorts/count', {
    responses: {
      '200': {
        description: 'CaseEscort model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CaseEscort)) where?: Where,
  ): Promise<Count> {
    return await this.caseEscortRepository.count(where);
  }

  @get('/case-escorts', {
    responses: {
      '200': {
        description: 'Array of CaseEscort model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CaseEscort}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CaseEscort)) filter?: Filter,
  ): Promise<CaseEscort[]> {
    return await this.caseEscortRepository.find(filter);
  }

  @patch('/case-escorts', {
    responses: {
      '200': {
        description: 'CaseEscort PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() caseEscort: CaseEscort,
    @param.query.object('where', getWhereSchemaFor(CaseEscort)) where?: Where,
  ): Promise<Count> {
    return await this.caseEscortRepository.updateAll(caseEscort, where);
  }

  @get('/case-escorts/{id}', {
    responses: {
      '200': {
        description: 'CaseEscort model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseEscort}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CaseEscort> {
    return await this.caseEscortRepository.findById(id);
  }

  @patch('/case-escorts/{id}', {
    responses: {
      '204': {
        description: 'CaseEscort PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() caseEscort: CaseEscort,
  ): Promise<void> {
    await this.caseEscortRepository.updateById(id, caseEscort);
  }

  @del('/case-escorts/{id}', {
    responses: {
      '204': {
        description: 'CaseEscort DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.caseEscortRepository.deleteById(id);
  }
}
