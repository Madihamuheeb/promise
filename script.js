//synchronous code
console.log('start');
for( let index=0; index<100; index++){
    console.log('index',index)
}

console.log('end');

//asynchronous code
console.log('start');
setTimeout(()=>{
    console.log('task finish');
},2000)



console.log('end');
//promise
const checknumber=new Promise((resolve,reject)=>
{
if(1<2){
    resolve('resolved');
}else{
    reject('rejected if 1 is not grtr than 2');
}
});
//handling the promise
checknumber.then((message)=>{
    console.log('then',message);

}).catch((error)=>{
    console.log('error',error)
});
//how to resolve give 1<2 then is resolved

function checkNumber(num){
    return new Promise((resolve,reject) => {
        if(num>10){
            resolve('the number is greater than 10'  );
        } else{
            reject('the number is too small');
        }
        
    });
}
checkNumber(100).then((e)=>{
    console.log(e);
}).catch((error)=>{
    console.log(error);


});
//api
const apiurl='https://jsonplaceholder.typicode.com/users';
fetch(apiurl)
.then((res)=>res.json())
.then((data)=>console.log(data,'data'))
.catch((error)=>console.log(error,'error'));








