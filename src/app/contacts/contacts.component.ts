import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map" ;
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageContacts:any ;
  motCle:String="" ;
  currentPage:number=0 ;
  size:number=5 ;

  pages:Array<number> ;

  constructor(private http:Http , private contactService:ContactsService) { }

  ngOnInit() {


  }

  doSearch(){
    this.contactService.getContacts(this.motCle,this.currentPage,this.size).subscribe(data=>{
      this.pageContacts=data ; // recevoir les data
      this.pages= new Array(data.totalPages) ;                        //pagination
    }, err=>{
      console.log(err);
    })
  }


  chercher(){
    this.doSearch() ;
  }

  goToPage(i:number){
    this.currentPage=i ;
    this.doSearch() ;
  }

}
