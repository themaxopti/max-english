import { someSlice2 } from './../../store/some.slice';
import { Module } from "../../core/coreModule";
import { someSlice } from "./state/test.reucer";
import { Home } from "./components/Some.component";



const mainModule1 = new Module({ component: Home, slice: someSlice2 })
const mainModule3 = new Module({ component: Home, slice: someSlice, modules: [mainModule1] })
const mainModule2 = new Module({ component: Home, modules: [mainModule3] })
export const { rootReducer, component: testComponent } = mainModule2
