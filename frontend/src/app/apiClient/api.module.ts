import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';




import { CaseDocumentsControllerService } from './api/caseDocumentsController.service';

import { CaseEscortReceiptsControllerService } from './api/caseEscortReceiptsController.service';

import { CaseEscortsControllerService } from './api/caseEscortsController.service';

import { CaseMessagesControllerService } from './api/caseMessagesController.service';

import { CaseProgressNotesControllerService } from './api/caseProgressNotesController.service';

import { CaseStatusChangesControllerService } from './api/caseStatusChangesController.service';

import { CaseTransactionsControllerService } from './api/caseTransactionsController.service';

import { ClientCasesControllerService } from './api/clientCasesController.service';

import { CompaniesControllerService } from './api/companiesController.service';

import { CompanyUsersControllerService } from './api/companyUsersController.service';

import { EscortAvailabilitiesControllerService } from './api/escortAvailabilitiesController.service';

import { EscortDocumentsControllerService } from './api/escortDocumentsController.service';

import { EscortsControllerService } from './api/escortsController.service';

import { PingControllerService } from './api/pingController.service';

import { UsersControllerService } from './api/usersController.service';



@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CaseDocumentsControllerService,
    CaseEscortReceiptsControllerService,
    CaseEscortsControllerService,
    CaseMessagesControllerService,
    CaseProgressNotesControllerService,
    CaseStatusChangesControllerService,
    CaseTransactionsControllerService,
    ClientCasesControllerService,
    CompaniesControllerService,
    CompanyUsersControllerService,
    EscortAvailabilitiesControllerService,
    EscortDocumentsControllerService,
    EscortsControllerService,
    PingControllerService,
    UsersControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
