

import { send, REQUEST_TIMEOUT } from './request.mjs';
import {read} from './response.mjs';



function makeRequest(url,data){
   send(url,data);
    return {
      timeout: REQUEST_TIMEOUT,
      response: read()
   }
   
}


const responseData=makeRequest('https://google.com','hello');
console.log(responseData);



