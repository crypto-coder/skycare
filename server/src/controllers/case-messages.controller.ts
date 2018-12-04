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
import {CaseMessage} from '../models';
import {CaseMessageRepository} from '../repositories';

export class CaseMessagesController {
  constructor(
    @repository(CaseMessageRepository)
    public caseMessageRepository : CaseMessageRepository,
  ) {}

  @post('/case-messages', {
    responses: {
      '200': {
        description: 'CaseMessage model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseMessage}}},
      },
    },
  })
  async create(@requestBody() caseMessage: CaseMessage): Promise<CaseMessage> {
    return await this.caseMessageRepository.create(caseMessage);
  }

  @get('/case-messages/count', {
    responses: {
      '200': {
        description: 'CaseMessage model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CaseMessage)) where?: Where,
  ): Promise<Count> {
    return await this.caseMessageRepository.count(where);
  }

  @get('/case-messages', {
    responses: {
      '200': {
        description: 'Array of CaseMessage model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CaseMessage}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CaseMessage)) filter?: Filter,
  ): Promise<CaseMessage[]> {
    return await this.caseMessageRepository.find(filter);
  }

  @patch('/case-messages', {
    responses: {
      '200': {
        description: 'CaseMessage PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() caseMessage: CaseMessage,
    @param.query.object('where', getWhereSchemaFor(CaseMessage)) where?: Where,
  ): Promise<Count> {
    return await this.caseMessageRepository.updateAll(caseMessage, where);
  }

  @get('/case-messages/{id}', {
    responses: {
      '200': {
        description: 'CaseMessage model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseMessage}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CaseMessage> {
    return await this.caseMessageRepository.findById(id);
  }

  @patch('/case-messages/{id}', {
    responses: {
      '204': {
        description: 'CaseMessage PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() caseMessage: CaseMessage,
  ): Promise<void> {
    await this.caseMessageRepository.updateById(id, caseMessage);
  }

  @del('/case-messages/{id}', {
    responses: {
      '204': {
        description: 'CaseMessage DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.caseMessageRepository.deleteById(id);
  }
}
