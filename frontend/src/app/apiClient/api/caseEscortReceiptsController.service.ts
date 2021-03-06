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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';



import { Observable }                                        from 'rxjs';



import { CaseEscortReceipt } from '../model/caseEscortReceipt';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';





@Injectable()


export class CaseEscortReceiptsControllerService {


    protected basePath = 'http://127.0.0.1:3000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }




    /**
     * 
     * 
     * @param where 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    
    public caseEscortReceiptsCountGet(where?: any, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public caseEscortReceiptsCountGet(where?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public caseEscortReceiptsCountGet(where?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public caseEscortReceiptsCountGet(where?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    





        
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        
        

        
        
        if (where !== undefined && where !== null) {
        
        
            queryParameters = queryParameters.set('where', <any>where);
        
        }
        



        let headers = this.defaultHeaders;



        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            
            'application/json'
            
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {


            headers = headers.set('Accept', httpHeaderAcceptSelected);

        }

        // to determine the Content-Type header
        const consumes: string[] = [
            
        ];




        return this.httpClient.get(`${this.basePath}/case-escort-receipts/count`,
            {

                params: queryParameters,


                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );


    }


    /**
     * 
     * 
     * @param filter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    
    public caseEscortReceiptsGet(filter?: any, observe?: 'body', reportProgress?: boolean): Observable<Array<CaseEscortReceipt>>;
    public caseEscortReceiptsGet(filter?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CaseEscortReceipt>>>;
    public caseEscortReceiptsGet(filter?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CaseEscortReceipt>>>;
    public caseEscortReceiptsGet(filter?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    





        
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        
        

        
        
        if (filter !== undefined && filter !== null) {
        
        
            queryParameters = queryParameters.set('filter', <any>filter);
        
        }
        



        let headers = this.defaultHeaders;



        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            
            'application/json'
            
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {


            headers = headers.set('Accept', httpHeaderAcceptSelected);

        }

        // to determine the Content-Type header
        const consumes: string[] = [
            
        ];




        return this.httpClient.get(`${this.basePath}/case-escort-receipts`,
            {

                params: queryParameters,


                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );


    }


    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    
    public caseEscortReceiptsIdDelete(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public caseEscortReceiptsIdDelete(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public caseEscortReceiptsIdDelete(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public caseEscortReceiptsIdDelete(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    


        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling caseEscortReceiptsIdDelete.');
        }




        let headers = this.defaultHeaders;



        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {


            headers = headers.set('Accept', httpHeaderAcceptSelected);

        }

        // to determine the Content-Type header
        const consumes: string[] = [
            
        ];




        return this.httpClient.delete(`${this.basePath}/case-escort-receipts/${encodeURIComponent(String(id))}`,
            {


                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );


    }


    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    
    public caseEscortReceiptsIdGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<CaseEscortReceipt>;
    public caseEscortReceiptsIdGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CaseEscortReceipt>>;
    public caseEscortReceiptsIdGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CaseEscortReceipt>>;
    public caseEscortReceiptsIdGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    


        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling caseEscortReceiptsIdGet.');
        }




        let headers = this.defaultHeaders;



        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            
            'application/json'
            
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {


            headers = headers.set('Accept', httpHeaderAcceptSelected);

        }

        // to determine the Content-Type header
        const consumes: string[] = [
            
        ];




        return this.httpClient.get(`${this.basePath}/case-escort-receipts/${encodeURIComponent(String(id))}`,
            {


                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );


    }


    /**
     * 
     * 
     * @param id 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    
    public caseEscortReceiptsIdPatch(id: string, body?: CaseEscortReceipt, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public caseEscortReceiptsIdPatch(id: string, body?: CaseEscortReceipt, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public caseEscortReceiptsIdPatch(id: string, body?: CaseEscortReceipt, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public caseEscortReceiptsIdPatch(id: string, body?: CaseEscortReceipt, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    


        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling caseEscortReceiptsIdPatch.');
        }






        let headers = this.defaultHeaders;



        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {


            headers = headers.set('Accept', httpHeaderAcceptSelected);

        }

        // to determine the Content-Type header
        const consumes: string[] = [
            
            'application/json'
            
        ];

        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {


            headers = headers.set('Content-Type', httpContentTypeSelected);

        }




        return this.httpClient.patch(`${this.basePath}/case-escort-receipts/${encodeURIComponent(String(id))}`,
            {


                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );


    }


    /**
     * 
     * 
     * @param body 
     * @param where 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    
    public caseEscortReceiptsPatch(body?: CaseEscortReceipt, where?: any, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public caseEscortReceiptsPatch(body?: CaseEscortReceipt, where?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public caseEscortReceiptsPatch(body?: CaseEscortReceipt, where?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public caseEscortReceiptsPatch(body?: CaseEscortReceipt, where?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    







        
        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        
        

        
        
        if (where !== undefined && where !== null) {
        
        
            queryParameters = queryParameters.set('where', <any>where);
        
        }
        



        let headers = this.defaultHeaders;



        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            
            'application/json'
            
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {


            headers = headers.set('Accept', httpHeaderAcceptSelected);

        }

        // to determine the Content-Type header
        const consumes: string[] = [
            
            'application/json'
            
        ];

        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {


            headers = headers.set('Content-Type', httpContentTypeSelected);

        }




        return this.httpClient.patch(`${this.basePath}/case-escort-receipts`,
            {

                params: queryParameters,


                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );


    }


    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    
    public caseEscortReceiptsPost(body?: CaseEscortReceipt, observe?: 'body', reportProgress?: boolean): Observable<CaseEscortReceipt>;
    public caseEscortReceiptsPost(body?: CaseEscortReceipt, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CaseEscortReceipt>>;
    public caseEscortReceiptsPost(body?: CaseEscortReceipt, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CaseEscortReceipt>>;
    public caseEscortReceiptsPost(body?: CaseEscortReceipt, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    





        let headers = this.defaultHeaders;



        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            
            'application/json'
            
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {


            headers = headers.set('Accept', httpHeaderAcceptSelected);

        }

        // to determine the Content-Type header
        const consumes: string[] = [
            
            'application/json'
            
        ];

        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {


            headers = headers.set('Content-Type', httpContentTypeSelected);

        }




        return this.httpClient.post(`${this.basePath}/case-escort-receipts`,
        body, 
            {


                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );


    }

}

