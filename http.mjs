import {internals} from './internal/index.mjs';
import { request } from "http";
import { send } from "./request.mjs";   
request.send=function(){
    console.log('custom send function');
}

request.send();