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
import {CaseDocument} from '../models';
import {CaseDocumentRepository} from '../repositories';

export class CaseDocumentsController {
  constructor(
    @repository(CaseDocumentRepository)
    public caseDocumentRepository : CaseDocumentRepository,
  ) {}

  @post('/case-documents', {
    responses: {
      '200': {
        description: 'CaseDocument model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseDocument}}},
      },
    },
  })
  async create(@requestBody() caseDocument: CaseDocument): Promise<CaseDocument> {
    return await this.caseDocumentRepository.create(caseDocument);
  }

  @get('/case-documents/count', {
    responses: {
      '200': {
        description: 'CaseDocument model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CaseDocument)) where?: Where,
  ): Promise<Count> {
    return await this.caseDocumentRepository.count(where);
  }

  @get('/case-documents', {
    responses: {
      '200': {
        description: 'Array of CaseDocument model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CaseDocument}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CaseDocument)) filter?: Filter,
  ): Promise<CaseDocument[]> {
    return await this.caseDocumentRepository.find(filter);
  }

  @patch('/case-documents', {
    responses: {
      '200': {
        description: 'CaseDocument PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() caseDocument: CaseDocument,
    @param.query.object('where', getWhereSchemaFor(CaseDocument)) where?: Where,
  ): Promise<Count> {
    return await this.caseDocumentRepository.updateAll(caseDocument, where);
  }

  @get('/case-documents/{id}', {
    responses: {
      '200': {
        description: 'CaseDocument model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseDocument}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CaseDocument> {
    return await this.caseDocumentRepository.findById(id);
  }

  @patch('/case-documents/{id}', {
    responses: {
      '204': {
        description: 'CaseDocument PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() caseDocument: CaseDocument,
  ): Promise<void> {
    await this.caseDocumentRepository.updateById(id, caseDocument);
  }

  @del('/case-documents/{id}', {
    responses: {
      '204': {
        description: 'CaseDocument DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.caseDocumentRepository.deleteById(id);
  }
}
