
const REQUEST_TIMEOUT = 500;

function encrypt(data){
    return'encrypted data';
}
function send(url,data){
 const encrypted=encrypt(data);
console.log(`sending ${encrypted} to ${url}`);
}
export{
    REQUEST_TIMEOUT,
    send,
};
console.log('hello from request.mjs')
