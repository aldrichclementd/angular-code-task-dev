import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServiceDataService} from "../service-data.service";
import {from, Observable, Subject, Subscriber, Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

interface TaskList {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  open = false ;
   list_task!: any[] ;
   searcheForm!:FormGroup ;
   resultSpecificId!:any ;

   filterTitre!:any
   filterdesc!:any

  updateTaskId!:any;


  constructor(public myService: ServiceDataService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searcheForm = this.fb.group({
    id: ['' , Validators.required]
    })

    this.myService.getAllData().subscribe((next:any) =>{
      this.list_task = next ;
    }) ;
  }

  deleteData(id: any) {
    console.log('id'+id);
    this.myService.removeData(id) ;
  }

  showDatabyId(){
    this.myService.getSpecificData(this.searcheForm.value.id.trim()).subscribe(next=>{
      // @ts-ignore
      this.filterTitre = next.data().title ;
      // @ts-ignore
      this.filterdesc = next.data().description ;
    });
  }


  updateData(id: any) {
    this.myService.setVariablePartagee(id)
  }
}
