import { Injectable } from '@angular/core';
import { Convertcurrency } from './convertcurrency.model';
import{HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConvertcurrencyService {

  constructor(private http:HttpClient) { }
readonly baseUrl='http://localhost:39537/api/Currency';
  formData:Convertcurrency=new Convertcurrency();

  CreateCurrency(){
    return this.http.post(this.baseUrl,this.formData)
  }
}
