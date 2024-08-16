import { Injectable } from "@angular/core";
import { Firestore,collection,addDoc } from "@angular/fire/firestore";

@Injectable({
    providedIn:'root'
})

export class UserService{

    constructor(private fs:Firestore){}

    addNewUser(payload:any){
        let data={username:payload.username,email:payload.email,password:payload.password,
          confirmpassword:payload.confirmpassword,role:payload.role
        }
        let listOfUsers=collection(this.fs,'Registered User')
        return addDoc(listOfUsers,data)
        }
}