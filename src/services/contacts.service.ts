import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Contact} from '../model/model.contact';

@Injectable()
export  class ContactsService{


  constructor(private http:Http){

  }

  getContacts(motCle:String,page:number,size:number){
    return this.http.get("http://localhost:8080/chercher?mc="+motCle+"&page="+page+"&size="+size)
      .map(resp=>resp.json()) ;
  }


  saveContact(contact:Contact){
    return this.http.post("http://localhost:8080/contacts",contact)
      .map(resp=>resp.json()) ;
  }

}