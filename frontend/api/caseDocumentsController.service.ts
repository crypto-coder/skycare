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



import { Observable }                                        from 'rxjs/Observable';



import { CaseDocument } from '../model/caseDocument';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';





@Injectable()


export class CaseDocumentsControllerService {


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
    
    public caseDocumentsCountGet(where?: any, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public caseDocumentsCountGet(where?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public caseDocumentsCountGet(where?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public caseDocumentsCountGet(where?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    





        
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




        return this.httpClient.get(`${this.basePath}/case-documents/count`,
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
    
    public caseDocumentsGet(filter?: any, observe?: 'body', reportProgress?: boolean): Observable<Array<CaseDocument>>;
    public caseDocumentsGet(filter?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CaseDocument>>>;
    public caseDocumentsGet(filter?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CaseDocument>>>;
    public caseDocumentsGet(filter?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    





        
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




        return this.httpClient.get(`${this.basePath}/case-documents`,
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
    
    public caseDocumentsIdDelete(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public caseDocumentsIdDelete(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public caseDocumentsIdDelete(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public caseDocumentsIdDelete(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    


        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling caseDocumentsIdDelete.');
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




        return this.httpClient.delete(`${this.basePath}/case-documents/${encodeURIComponent(String(id))}`,
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
    
    public caseDocumentsIdGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<CaseDocument>;
    public caseDocumentsIdGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CaseDocument>>;
    public caseDocumentsIdGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CaseDocument>>;
    public caseDocumentsIdGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    


        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling caseDocumentsIdGet.');
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




        return this.httpClient.get(`${this.basePath}/case-documents/${encodeURIComponent(String(id))}`,
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
    
    public caseDocumentsIdPatch(id: string, body?: CaseDocument, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public caseDocumentsIdPatch(id: string, body?: CaseDocument, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public caseDocumentsIdPatch(id: string, body?: CaseDocument, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public caseDocumentsIdPatch(id: string, body?: CaseDocument, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    


        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling caseDocumentsIdPatch.');
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




        return this.httpClient.patch(`${this.basePath}/case-documents/${encodeURIComponent(String(id))}`,
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
    
    public caseDocumentsPatch(body?: CaseDocument, where?: any, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public caseDocumentsPatch(body?: CaseDocument, where?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public caseDocumentsPatch(body?: CaseDocument, where?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public caseDocumentsPatch(body?: CaseDocument, where?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    







        
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




        return this.httpClient.patch(`${this.basePath}/case-documents`,
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
    
    public caseDocumentsPost(body?: CaseDocument, observe?: 'body', reportProgress?: boolean): Observable<CaseDocument>;
    public caseDocumentsPost(body?: CaseDocument, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CaseDocument>>;
    public caseDocumentsPost(body?: CaseDocument, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CaseDocument>>;
    public caseDocumentsPost(body?: CaseDocument, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
    





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




        return this.httpClient.post(`${this.basePath}/case-documents`,
            {


                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );


    }



