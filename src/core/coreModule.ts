import { AnyAction, CombinedState, combineReducers, Slice } from '@reduxjs/toolkit'
import React, { Reducer } from 'react'
import { RootState } from '../store/store'

export interface ModuleParams {
  component?: React.FC
  slice?: Slice
  modules?: any
  reducer?: Reducer<any, AnyAction>
}

export class Module {
  public component?: React.FC
  public reducer?: Reducer<any, AnyAction> | null = null
  public modules?: undefined | Module[]
  public rootReducer: Reducer<CombinedState<any>, AnyAction> | null = null
  private reducerName?: string

  constructor({ modules, slice, component, reducer }: ModuleParams) {
    this.modules = modules
    this.reducer = reducer
    this.component = component
    this.reducerName = slice?.name
    this.combineReducers()
  }

  private combineReducers() {
    if (this.reducer) {
      // @ts-ignore
      this.rootReducer = { [this.reducerName]: this.reducer }
    } else {
      // @ts-ignore
      this.rootReducer = {}
    }
    if (!this.modules) {
      if (this.reducer) {
        return { [this.reducerName!]: this.reducer }
      }
      return {}
    }
    this.modules.forEach(module => {
      const reducers = module.combineReducers()
      // @ts-ignore
      this.rootReducer = { ...this.rootReducer, ...reducers }
    })
    console.log(this.rootReducer)

    return this.rootReducer
  }

  // private combineReducersTwo() {
  //   // @ts-ignore
  //   this.rootReducer = combineReducers({
  //     // @ts-ignore
  //     [this.reducerName]: this.reducer,
  //   })
  // }
}
