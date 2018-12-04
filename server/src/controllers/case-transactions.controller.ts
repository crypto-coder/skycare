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
import {CaseTransaction} from '../models';
import {CaseTransactionRepository} from '../repositories';

export class CaseTransactionsController {
  constructor(
    @repository(CaseTransactionRepository)
    public caseTransactionRepository : CaseTransactionRepository,
  ) {}

  @post('/case-transactions', {
    responses: {
      '200': {
        description: 'CaseTransaction model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseTransaction}}},
      },
    },
  })
  async create(@requestBody() caseTransaction: CaseTransaction): Promise<CaseTransaction> {
    return await this.caseTransactionRepository.create(caseTransaction);
  }

  @get('/case-transactions/count', {
    responses: {
      '200': {
        description: 'CaseTransaction model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CaseTransaction)) where?: Where,
  ): Promise<Count> {
    return await this.caseTransactionRepository.count(where);
  }

  @get('/case-transactions', {
    responses: {
      '200': {
        description: 'Array of CaseTransaction model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CaseTransaction}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CaseTransaction)) filter?: Filter,
  ): Promise<CaseTransaction[]> {
    return await this.caseTransactionRepository.find(filter);
  }

  @patch('/case-transactions', {
    responses: {
      '200': {
        description: 'CaseTransaction PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() caseTransaction: CaseTransaction,
    @param.query.object('where', getWhereSchemaFor(CaseTransaction)) where?: Where,
  ): Promise<Count> {
    return await this.caseTransactionRepository.updateAll(caseTransaction, where);
  }

  @get('/case-transactions/{id}', {
    responses: {
      '200': {
        description: 'CaseTransaction model instance',
        content: {'application/json': {schema: {'x-ts-type': CaseTransaction}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CaseTransaction> {
    return await this.caseTransactionRepository.findById(id);
  }

  @patch('/case-transactions/{id}', {
    responses: {
      '204': {
        description: 'CaseTransaction PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() caseTransaction: CaseTransaction,
  ): Promise<void> {
    await this.caseTransactionRepository.updateById(id, caseTransaction);
  }

  @del('/case-transactions/{id}', {
    responses: {
      '204': {
        description: 'CaseTransaction DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.caseTransactionRepository.deleteById(id);
  }
}
