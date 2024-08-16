import { ActivatedRouteSnapshot,RouterStateSnapshot, CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { getUserLoggedInData } from "../store/app.selector";
import { Injectable } from "@angular/core";
import { AppState } from "../store/app.store-model";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{

    constructor(private _store:Store<AppState>,private toastr:ToastrService){}

    canActivate(childRoute:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        let status:boolean=false;
        this._store.select(getUserLoggedInData).subscribe(data=>{
            if(data) status=true
            else {
                this.toastr.warning('Please Log In')
                status=false
            }
        })
    
        return status
    
    }

}