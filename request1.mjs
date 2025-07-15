
import axios from 'axios';

axios.get('https://www.wikipedia.org')
   .then((response)=>{
    console.log(response.data);
   })
   .catch((err)=>{
    console.log(err);
   })
   .then(()=>{
    console.log('all done')
   });

