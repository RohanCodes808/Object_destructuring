 const express = require('express')
 const router = express.Router()

 router.get('/',(req,res)=>{
    res.send('hello from object destructuring !! ')
 })

module.exports = router;


// const bioData = {
//    name : 'Rohan Shakya',
//    age : 21,
//    qualification: 'Bachelors in Computer Science and information technology '
// }

// let {name,age,qualification}= bioData;

// console.log(`Hello My name is ${name} I am ${age} years old and I am studying ${qualification}`)

/**************************************************************************************************************** */ 

//FUNCTION PARAMETER

/*
      function employee({name,id,contact}){
         console.log('Name:',name);
         console.log('ID:',id);
         console.log('Contact:',contact);
      }

      const display = {
         name: 'Rohan Shakya',
         id: 23991,
         contact: 9861929910
      }

      employee(display);
 */

/**************************************************************************************************************** */ 

//API response 

const json = {
   "message":"New data created",
   "status":201,
   "data": {
      "name":"Rohan Shakya",
      "id":202111,
      "email":"rjn9841@gmail.com"
   }
};

const {message,status,data : {name,id,email}} = json;

console.log(`Message: ${message}, data: ${name},${id},${email}, and status is ${status}`);