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
import {Escort} from '../models';
import {EscortRepository} from '../repositories';

export class EscortsController {
  constructor(
    @repository(EscortRepository)
    public escortRepository : EscortRepository,
  ) {}

  @post('/escorts', {
    responses: {
      '200': {
        description: 'Escort model instance',
        content: {'application/json': {schema: {'x-ts-type': Escort}}},
      },
    },
  })
  async create(@requestBody() escort: Escort): Promise<Escort> {
    return await this.escortRepository.create(escort);
  }

  @get('/escorts/count', {
    responses: {
      '200': {
        description: 'Escort model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Escort)) where?: Where,
  ): Promise<Count> {
    return await this.escortRepository.count(where);
  }

  @get('/escorts', {
    responses: {
      '200': {
        description: 'Array of Escort model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Escort}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Escort)) filter?: Filter,
  ): Promise<Escort[]> {
    return await this.escortRepository.find(filter);
  }

  @patch('/escorts', {
    responses: {
      '200': {
        description: 'Escort PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() escort: Escort,
    @param.query.object('where', getWhereSchemaFor(Escort)) where?: Where,
  ): Promise<Count> {
    return await this.escortRepository.updateAll(escort, where);
  }

  @get('/escorts/{id}', {
    responses: {
      '200': {
        description: 'Escort model instance',
        content: {'application/json': {schema: {'x-ts-type': Escort}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Escort> {
    return await this.escortRepository.findById(id);
  }

  @patch('/escorts/{id}', {
    responses: {
      '204': {
        description: 'Escort PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() escort: Escort,
  ): Promise<void> {
    await this.escortRepository.updateById(id, escort);
  }

  @del('/escorts/{id}', {
    responses: {
      '204': {
        description: 'Escort DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.escortRepository.deleteById(id);
  }
}
