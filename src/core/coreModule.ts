import { AnyAction, Slice } from "@reduxjs/toolkit";
import React, { Reducer } from "react";
import { RootState } from "../store/store";

export interface ModuleParams {
    component?: React.FC,
    slice?: Slice
    modules?: any,
}

export class Module {
    public component?: React.FC
    public reducer?: Reducer<any, AnyAction> | null = null
    public modules?: undefined | Module[]
    public rootReducer: any = null
    private reducerName: string | undefined

    constructor({ modules, slice, component }: ModuleParams) {
        this.modules = modules
        this.reducer = slice?.reducer
        this.component = component
        this.reducerName = slice?.name
        this.combineReducers()
    }

    private combineReducers() {
        if (this.reducer) {
            this.rootReducer = { [this.reducerName!]: this.reducer }
        } else {
            this.rootReducer = {}
        }
        if (!this.modules) {
            if (this.reducer) {
                return { [this.reducerName!]: this.reducer }
            }
            return {}
        }
        this.modules.forEach((module) => {
            const reducers = module.combineReducers()
            this.rootReducer = { ...this.rootReducer, ...reducers }
        })
        return this.rootReducer
    }
}