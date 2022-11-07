import { AnyAction, configureStore, Reducer, Slice, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Module } from "./coreModule";
import { RootState } from "../store/store";


export class ReduxModule {
    public store: ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction, undefined>]>
    private subscribers: any = {}
    constructor(rootReducer: any) {
        this.store = configureStore({ ...rootReducer, ...this.subscribers })
    }
}