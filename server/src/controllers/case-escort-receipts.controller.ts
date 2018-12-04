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
import {CaseEscortReceipt} from '../models';
import {CaseEscortReceiptRepository} from '../repositories';

export class CaseEscortReceiptsController {
  constructor(
    @repository(CaseEscortReceiptRepository)
    public caseEscortReceiptRepository : CaseEscortReceiptRepository,
  ) {}

  @post('/case-escort-receipts', {
    responses: {
      '200': {
        description: 'CaseEscortReceipt model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseEscortReceipt}}},
      },
    },
  })
  async create(@requestBody() caseEscortReceipt: CaseEscortReceipt): Promise<CaseEscortReceipt> {
    return await this.caseEscortReceiptRepository.create(caseEscortReceipt);
  }

  @get('/case-escort-receipts/count', {
    responses: {
      '200': {
        description: 'CaseEscortReceipt model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CaseEscortReceipt)) where?: Where,
  ): Promise<Count> {
    return await this.caseEscortReceiptRepository.count(where);
  }

  @get('/case-escort-receipts', {
    responses: {
      '200': {
        description: 'Array of CaseEscortReceipt model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CaseEscortReceipt}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CaseEscortReceipt)) filter?: Filter,
  ): Promise<CaseEscortReceipt[]> {
    return await this.caseEscortReceiptRepository.find(filter);
  }

  @patch('/case-escort-receipts', {
    responses: {
      '200': {
        description: 'CaseEscortReceipt PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() caseEscortReceipt: CaseEscortReceipt,
    @param.query.object('where', getWhereSchemaFor(CaseEscortReceipt)) where?: Where,
  ): Promise<Count> {
    return await this.caseEscortReceiptRepository.updateAll(caseEscortReceipt, where);
  }

  @get('/case-escort-receipts/{id}', {
    responses: {
      '200': {
        description: 'CaseEscortReceipt model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseEscortReceipt}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CaseEscortReceipt> {
    return await this.caseEscortReceiptRepository.findById(id);
  }

  @patch('/case-escort-receipts/{id}', {
    responses: {
      '204': {
        description: 'CaseEscortReceipt PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() caseEscortReceipt: CaseEscortReceipt,
  ): Promise<void> {
    await this.caseEscortReceiptRepository.updateById(id, caseEscortReceipt);
  }

  @del('/case-escort-receipts/{id}', {
    responses: {
      '204': {
        description: 'CaseEscortReceipt DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.caseEscortReceiptRepository.deleteById(id);
  }
}
