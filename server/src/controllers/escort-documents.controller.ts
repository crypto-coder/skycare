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
import {EscortDocument} from '../models';
import {EscortDocumentRepository} from '../repositories';

export class EscortDocumentsController {
  constructor(
    @repository(EscortDocumentRepository)
    public escortDocumentRepository : EscortDocumentRepository,
  ) {}

  @post('/escort-documents', {
    responses: {
      '200': {
        description: 'EscortDocument model instance',
        content: {'application/json': {schema: {'x-ts-type': EscortDocument}}},
      },
    },
  })
  async create(@requestBody() escortDocument: EscortDocument): Promise<EscortDocument> {
    return await this.escortDocumentRepository.create(escortDocument);
  }

  @get('/escort-documents/count', {
    responses: {
      '200': {
        description: 'EscortDocument model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EscortDocument)) where?: Where,
  ): Promise<Count> {
    return await this.escortDocumentRepository.count(where);
  }

  @get('/escort-documents', {
    responses: {
      '200': {
        description: 'Array of EscortDocument model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': EscortDocument}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(EscortDocument)) filter?: Filter,
  ): Promise<EscortDocument[]> {
    return await this.escortDocumentRepository.find(filter);
  }

  @patch('/escort-documents', {
    responses: {
      '200': {
        description: 'EscortDocument PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() escortDocument: EscortDocument,
    @param.query.object('where', getWhereSchemaFor(EscortDocument)) where?: Where,
  ): Promise<Count> {
    return await this.escortDocumentRepository.updateAll(escortDocument, where);
  }

  @get('/escort-documents/{id}', {
    responses: {
      '200': {
        description: 'EscortDocument model instance',
        content: {'application/json': {schema: {'x-ts-type': EscortDocument}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<EscortDocument> {
    return await this.escortDocumentRepository.findById(id);
  }

  @patch('/escort-documents/{id}', {
    responses: {
      '204': {
        description: 'EscortDocument PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() escortDocument: EscortDocument,
  ): Promise<void> {
    await this.escortDocumentRepository.updateById(id, escortDocument);
  }

  @del('/escort-documents/{id}', {
    responses: {
      '204': {
        description: 'EscortDocument DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.escortDocumentRepository.deleteById(id);
  }
}
