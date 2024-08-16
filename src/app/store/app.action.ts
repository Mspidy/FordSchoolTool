import { createAction,props } from "@ngrx/store"

export const getUserSignInButtonStatus=createAction(
 "[Get Sign In button status] get button clicked status",
 props<{getButtonClickedStatus:boolean}>()
)

export const setUserSignInButtonStatus=createAction(
    "[Set Sign In button status] set button clicked status",
    props<{setButtonClickedStatus:boolean}>()
)

export const getUserData=createAction(
    '[Get User Data] Get user logged in state',
    props<{params:boolean}>()
)

export const setUserData=createAction(
    '[Set User Data] Set user logged in state',
    props<{userLoggedIn:boolean}>()
)