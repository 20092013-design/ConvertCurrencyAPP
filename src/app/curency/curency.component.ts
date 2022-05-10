import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Convertcurrency } from '../shared/convertcurrency.model';
import { ConvertcurrencyService } from '../shared/convertcurrency.service';

@Component({
  selector: 'app-curency',
  templateUrl: './curency.component.html',
  styleUrls: ['./curency.component.css']
})
export class CurencyComponent implements OnInit {

Amount:any;
convertedAmount:any;
CurrencyName:any;
CurrencyName1:any;
  constructor(public service:ConvertcurrencyService, private toast:ToastrService) { }

  ngOnInit(): void {
    
  }
  AmountBalance(){
    if(this.CurrencyName=='USD' && this.CurrencyName1=='USD'){
      this.convertedAmount=this.Amount*1
      console.log( this.convertedAmount)
    }
    if(this.CurrencyName=='USD' && this.CurrencyName1=='EURO'){
     this.convertedAmount=this.Amount*0.95
     console.log( this.convertedAmount)
   }
   if(this.CurrencyName=='EURO' && this.CurrencyName1=='EURO'){
     this.convertedAmount=this.Amount*1
     console.log( this.convertedAmount)
   }
   if(this.CurrencyName=='EURO' && this.CurrencyName1=='USD'){
     this.convertedAmount=this.Amount*1.06
     console.log( this.convertedAmount)
   }
  }/*
  convertCurrency(CurrencyName: string){
    console.log('CurrencyName='+CurrencyName);
   if(CurrencyName=='USD' && this.CurrencyName1=='USD'){
     this.convertedAmount=this.Amount*1
     console.log( this.convertedAmount)
   }(change)="convertCurrency(service.formData.CurrencyName)"
   if(CurrencyName=='USD' && this.CurrencyName1=='EURO'){
    this.convertedAmount=this.Amount*0.95
    console.log( this.convertedAmount)
  }
  if(CurrencyName=='EURO' && this.CurrencyName1=='EURO'){
    this.convertedAmount=this.Amount*1
    console.log( this.convertedAmount)
  }
  if(CurrencyName=='EURO' && this.CurrencyName1=='USD'){
    this.convertedAmount=this.Amount*1.06
    console.log( this.convertedAmount)
  }
  }*/
  OnSubmit(form:NgForm){
this.service.CreateCurrency().subscribe(Response=>{
  
this.resetForm(form);
this.toast.success("Process succeeded","Currency converter App")
})
}
resetForm(form:NgForm){
  form.form.reset();
  this.service.formData=new Convertcurrency();
}
}
