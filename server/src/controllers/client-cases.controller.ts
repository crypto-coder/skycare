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
import {ClientCase} from '../models';
import {ClientCaseRepository} from '../repositories';

export class ClientCasesController {
  constructor(
    @repository(ClientCaseRepository)
    public clientCaseRepository : ClientCaseRepository,
  ) {}

  @post('/client-cases', {
    responses: {
      '200': {
        description: 'ClientCase model instance',
        content: {'application/json': {schema: {'x-ts-type': ClientCase}}},
      },
    },
  })
  async create(@requestBody() clientCase: ClientCase): Promise<ClientCase> {
    return await this.clientCaseRepository.create(clientCase);
  }

  @get('/client-cases/count', {
    responses: {
      '200': {
        description: 'ClientCase model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ClientCase)) where?: Where,
  ): Promise<Count> {
    return await this.clientCaseRepository.count(where);
  }

  @get('/client-cases', {
    responses: {
      '200': {
        description: 'Array of ClientCase model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ClientCase}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ClientCase)) filter?: Filter,
  ): Promise<ClientCase[]> {
    return await this.clientCaseRepository.find(filter);
  }

  @patch('/client-cases', {
    responses: {
      '200': {
        description: 'ClientCase PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() clientCase: ClientCase,
    @param.query.object('where', getWhereSchemaFor(ClientCase)) where?: Where,
  ): Promise<Count> {
    return await this.clientCaseRepository.updateAll(clientCase, where);
  }

  @get('/client-cases/{id}', {
    responses: {
      '200': {
        description: 'ClientCase model instance',
        content: {'application/json': {schema: {'x-ts-type': ClientCase}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<ClientCase> {
    return await this.clientCaseRepository.findById(id);
  }

  @patch('/client-cases/{id}', {
    responses: {
      '204': {
        description: 'ClientCase PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() clientCase: ClientCase,
  ): Promise<void> {
    await this.clientCaseRepository.updateById(id, clientCase);
  }

  @del('/client-cases/{id}', {
    responses: {
      '204': {
        description: 'ClientCase DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.clientCaseRepository.deleteById(id);
  }
}
