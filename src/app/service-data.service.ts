import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  items!: Observable<any[]> ;
   private variablePartagee = new BehaviorSubject<string>('');

  // specificData: Observable<any[]> ;


  constructor(public store: AngularFirestore ) {
    this.items = this.store.collection('task').snapshotChanges().pipe(
      map((actions: any[]) => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          data.$key = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getAllData(){
    return this.items ;
 }


  addData(object: any){
    this.store.collection("task").add(object).then(response=>{
      console.log("Reponse: " +response) ;
    })
      .catch(err=>{
        console.log(err)
      });
  }

  removeData(id: any){
    this.store.doc("task/"+id).delete();
  }


  getSpecificData(id: any){
    return this.store.doc("task/"+id).get();
  }


  setVariablePartagee(variable: string) {
    this.variablePartagee.next(variable);
  }

  getVariablePartagee() {
    return this.variablePartagee.asObservable();
  }



}
