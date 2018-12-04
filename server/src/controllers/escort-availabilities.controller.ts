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
import {EscortAvailability} from '../models';
import {EscortAvailabilityRepository} from '../repositories';

export class EscortAvailabilitiesController {
  constructor(
    @repository(EscortAvailabilityRepository)
    public escortAvailabilityRepository : EscortAvailabilityRepository,
  ) {}

  @post('/escort-availabilities', {
    responses: {
      '200': {
        description: 'EscortAvailability model instance',
        content: {'application/json': {schema: {'x-ts-type': EscortAvailability}}},
      },
    },
  })
  async create(@requestBody() escortAvailability: EscortAvailability): Promise<EscortAvailability> {
    return await this.escortAvailabilityRepository.create(escortAvailability);
  }

  @get('/escort-availabilities/count', {
    responses: {
      '200': {
        description: 'EscortAvailability model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EscortAvailability)) where?: Where,
  ): Promise<Count> {
    return await this.escortAvailabilityRepository.count(where);
  }

  @get('/escort-availabilities', {
    responses: {
      '200': {
        description: 'Array of EscortAvailability model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': EscortAvailability}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(EscortAvailability)) filter?: Filter,
  ): Promise<EscortAvailability[]> {
    return await this.escortAvailabilityRepository.find(filter);
  }

  @patch('/escort-availabilities', {
    responses: {
      '200': {
        description: 'EscortAvailability PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() escortAvailability: EscortAvailability,
    @param.query.object('where', getWhereSchemaFor(EscortAvailability)) where?: Where,
  ): Promise<Count> {
    return await this.escortAvailabilityRepository.updateAll(escortAvailability, where);
  }

  @get('/escort-availabilities/{id}', {
    responses: {
      '200': {
        description: 'EscortAvailability model instance',
        content: {'application/json': {schema: {'x-ts-type': EscortAvailability}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<EscortAvailability> {
    return await this.escortAvailabilityRepository.findById(id);
  }

  @patch('/escort-availabilities/{id}', {
    responses: {
      '204': {
        description: 'EscortAvailability PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() escortAvailability: EscortAvailability,
  ): Promise<void> {
    await this.escortAvailabilityRepository.updateById(id, escortAvailability);
  }

  @del('/escort-availabilities/{id}', {
    responses: {
      '204': {
        description: 'EscortAvailability DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.escortAvailabilityRepository.deleteById(id);
  }
}
