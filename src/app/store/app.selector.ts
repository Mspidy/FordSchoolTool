import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.store-model";

export const featuredSelector=createFeatureSelector<AppState>('appMessageSelector')

export const getSignInButtonStatus=createSelector(
    featuredSelector,
    appMessageSelector=>appMessageSelector.signInButtonClicked
)

export const getUserLoggedInData=createSelector(
    featuredSelector,
    appMessageState=>appMessageState.userLoggedIn
)
