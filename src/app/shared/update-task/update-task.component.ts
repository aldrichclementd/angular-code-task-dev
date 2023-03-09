import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ServiceDataService} from "../../service-data.service";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit{
  form!: FormGroup;

  filterTitre = '';
  filterdesc = '';

  variablePartagee!: string;

  constructor(public fb: FormBuilder, public  myService: ServiceDataService) {
    this.myService.getVariablePartagee().subscribe(next=>{
      this.variablePartagee = next ;
      this.myService.getSpecificData(this.variablePartagee.trim()).subscribe(next=>{
        // @ts-ignore
        this.filterTitre = next.data().title ;
        // @ts-ignore
        this.filterdesc = next.data().description ;
      });
    }) ;
  }
  ngOnInit(): void {

  }


  updatesaveData(event:any) {

      this.myService.removeData(this.variablePartagee);
      this.myService.addData({title: this.filterTitre , description: this.filterdesc}) ;
      this.filterTitre = "" ;
      this.filterdesc = "" ;



  }


}
