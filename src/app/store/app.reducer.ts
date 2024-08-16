import { createReducer, on } from "@ngrx/store";
import { initialState } from "./app.state";
import { getUserData, getUserSignInButtonStatus, setUserData, setUserSignInButtonStatus } from "./app.action";

export const stateReducer=createReducer(
    initialState,
    on(getUserSignInButtonStatus,(state,action)=>{
        return{
        ...state,
        signInButtonClicked:action.getButtonClickedStatus
        }
    }),
    on(setUserSignInButtonStatus,(state,action)=>{
        return{
            ...state,
            signInButtonClicked:action.setButtonClickedStatus
        }
    }),
    on(getUserData,(state,action)=>{
        return{
        ...state,
        userLoggedIn:action.params
        }
    }),
    on(setUserData,(state,action)=>{
        return{
            ...state,
            userLoggedIn:action.userLoggedIn
        }
    })
)