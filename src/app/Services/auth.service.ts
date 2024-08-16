import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn!:boolean;
  listOfUsers!:[]

  constructor(private fs:Firestore) { }

  getAuth(){
    let auth=collection(this.fs,'Registered User')
    return collectionData(auth)
  }

  checkUserLoggedIn(){
     //this.listOfUsers=this.getAuth()
  }
  
}
