import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
export type EntityResponseType = HttpResponse<any>;
@Injectable({
  providedIn: 'root'
})
export class AppService {
  protected resourceUrl = 'http://localhost:8080/javainuse-rabbitmq/producer?empName=emp18&empId=emp015';
  constructor(protected http: HttpClient) { }


  query(): Observable<EntityResponseType>{
    return this.http.get<any>(this.resourceUrl);

  }


}
