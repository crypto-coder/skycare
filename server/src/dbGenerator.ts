import {DataSource, Repository} from '@loopback/repository';
import {ServerApplication} from './index';
import {UserRepository} from './repositories';
import {CaseDocumentRepository} from './repositories';
import {CaseEscortReceiptRepository} from './repositories';
import {CaseEscortRepository} from './repositories';
import {CaseMessageRepository} from './repositories';
import {CaseProgressNoteRepository} from './repositories';
import {CaseStatusChangeRepository} from './repositories';
import {CaseTransactionRepository} from './repositories';
import {ClientCaseRepository} from './repositories';
import {CompanyUserRepository} from './repositories';
import {CompanyRepository} from './repositories';
import {EscortAvailabilityRepository} from './repositories';
import {EscortDocumentRepository} from './repositories';
import {EscortRepository} from './repositories';


export async function createDB(app: ServerApplication) {
  const ds = await app.get<DataSource>('datasources.cloudant');
  setTimeout(() => finishCreatingDB(app, ds), 5000);
}

export async function finishCreatingDB(app: ServerApplication, ds: DataSource) {
  const userRepo = await app.getRepository(UserRepository);
  const caseDocRepo = await app.getRepository(CaseDocumentRepository);
  const caseEscortRecRepo = await app.getRepository(CaseEscortReceiptRepository);
  const caseEscortRepo = await app.getRepository(CaseEscortRepository);
  const caseMessageRepo = await app.getRepository(CaseMessageRepository);
  const caseProgressNote = await app.getRepository(CaseProgressNoteRepository);
  const caseStatusChange = await app.getRepository(CaseStatusChangeRepository);
  const caseTransactionRep = await app.getRepository(CaseTransactionRepository);
  const clientCaseRepo = await app.getRepository(ClientCaseRepository);
  const compnayUserRepo = await app.getRepository(CompanyUserRepository);
  const companyUserRepo = await app.getRepository(CompanyRepository);
  const escortAva = await app.getRepository(EscortAvailabilityRepository);
  const escourtDoc= await app.getRepository(EscortDocumentRepository);
  const escourtRepo = await app.getRepository(EscortRepository);

  await ds.automigrate();

  userRepo.create({
    id: 1,
    username: 'admin',
    password: 'test',
    email: 'admin@test.com',
    key2FA: 'empty',
    emailVerified: true
  });

}

export async function updateDB(app: ServerApplication) {
 const ds = await app.get<DataSource>('datasources.cloudant');
 const userRepo = await app.getRepository(UserRepository);
 const caseDocRepo = await app.getRepository(CaseDocumentRepository);
 const caseEscortRecRepo = await app.getRepository(CaseEscortReceiptRepository);
 const caseEscortRepo = await app.getRepository(CaseEscortRepository);
 const caseMessageRepo = await app.getRepository(CaseMessageRepository);
 const caseProgressNote = await app.getRepository(CaseProgressNoteRepository);
 const caseStatusChange = await app.getRepository(CaseStatusChangeRepository);
 const caseTransactionRep = await app.getRepository(CaseTransactionRepository);
 const clientCaseRepo = await app.getRepository(ClientCaseRepository);
 const compnayUserRepo = await app.getRepository(CompanyUserRepository);
 const companyUserRepo = await app.getRepository(CompanyRepository);
 const escortAva = await app.getRepository(EscortAvailabilityRepository);
 const escourtDoc= await app.getRepository(EscortDocumentRepository);
 const escourtRepo = await app.getRepository(EscortRepository);

 await ds.autoupdate();
}