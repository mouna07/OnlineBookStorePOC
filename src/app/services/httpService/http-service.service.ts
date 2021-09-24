import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class HttpService {

    baseUrl = environment.baseUrl;

    token: any = localStorage.getItem('token')

    httpHeaders = new HttpHeaders({ 
      'token': this.token
    })
  

    constructor(private httpClient: HttpClient) { }

    postData(url:any,data:any){
      return this.httpClient.post(this.baseUrl+url,data);
    }

    postDataWithToken(url:any,data:any,token:any){
      return this.httpClient.post(this.baseUrl+url,data,token);
    }
  
    getData(url:any){
      return this.httpClient.get(this.baseUrl+url);
    }
  
    delete(url: any,token : any){
      return this.httpClient.delete(this.baseUrl+url,token);
    }
  
    put(url : any,data : any , token : any){
      return this.httpClient.put(this.baseUrl+url,data,token)

  }
}