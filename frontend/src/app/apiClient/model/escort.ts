/**
 * LoopBack Application
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



import { BigDecimal } from 'bigDecimal';




export interface Escort { 

    
    escortID: string;

    
    userID: BigDecimal;

    
    contactPhone: string;

    
    licenseType?: string;

    
    licenseExpiration?: Date;

    
    alsExpiration?: Date;

    
    passportExpiration?: Date;

    
    passportCountry?: string;

    
    visaCountry1?: string;

    
    visaCountry2?: string;

    
    visaCountry3?: string;

    
    language1?: string;

    
    language2?: string;

    
    language3?: string;

    
    language4?: string;

    
    homeAirportCity?: string;

    
    emergencyContactName?: string;

    
    emergencyContactPhone?: string;

    
    emergencyContactRelation?: string;

    
    paymentAccountName?: string;

    
    paymentBankName?: string;

    
    paymentBankAddress1?: string;

    
    paymentBankAddress2?: string;

    
    paymentBankCity?: string;

    
    paymentBankRegion?: string;

    
    paymentBankCountry?: string;

    
    paymentBankPostalCode?: string;

    
    paymentUSRoutingNumber?: string;

    
    paymentIntlRoutingNumber?: string;

    
    paymentAccountNumber?: string;

}

