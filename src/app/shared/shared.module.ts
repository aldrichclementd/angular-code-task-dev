import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import { AddTaskComponent } from './add-task/add-task.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment.prod";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShowFilterComponent } from './show-filter/show-filter.component';
import { UpdateTaskComponent } from './update-task/update-task.component';




@NgModule({
    declarations: [

    AddTaskComponent,
     ShowFilterComponent,
     UpdateTaskComponent
  ],
    exports: [
        AddTaskComponent,
        ShowFilterComponent,
        UpdateTaskComponent

    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
    imports: [
        CommonModule,
        RouterModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        ReactiveFormsModule,
        FormsModule
    ]


})
export class SharedModule { }
