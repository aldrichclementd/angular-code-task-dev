import {Component, OnInit} from '@angular/core';
import {ServiceDataService} from "../../service-data.service";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  form!: FormGroup ;
  btndesablbe = true ;

  constructor(public myService: ServiceDataService, public fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['' , Validators.required] ,
      description: ['' , Validators.required]
    });
  }


  saveData(event:any){
    if (this.form.value.title.length < 2 || this.form.value.description < 2){
      event.preventDefault();
    }else{
      this.btndesablbe = false ;
      this.myService.addData(this.form.value);
      this.form.value.title = " " ;
      this.form.value.description = " " ;
    }


  }


}
