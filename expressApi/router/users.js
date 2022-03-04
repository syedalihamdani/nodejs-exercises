import express from 'express';
const router=express.Router();
import { v4 as uuidv4 } from 'uuid';



let users=[
    {
        "firstName":"Hafiz sayyed Ali",
        "lastName":"Hamdani",
        "age":30
    }
]
router.get('/',(req,res)=>{
    console.log("strted");
    res.send(users);
})

router.post('/',(req,res)=>{
    console.log("post request is made");
    let newUser=req.body
    let userId=({id:uuidv4(),...newUser});
    res.send(`New user is added successfuly to the data base with id ${userId.id}`);
    users.push(userId);
})

router.get('/:id',(req,res)=>{
    let {id}=req.params;
    let userFind=users.find((user)=>user.id===id);
    res.send(userFind);
})

router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    users=users.filter((user)=>user.id!==id);
    res.send(`User with the id ${id} is deleted`);
})

router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    let user=users.find((user)=>user.id===id);
    const {firstName,lastName,age}=req.body;
    if(firstName){
        user.firstName=firstName; 
    }

    if(lastName){
        user.lastName=lastName; 
    }

    if(age){
        user.age=age;            
    }

    res.send(`User with the id ${id} has been updated`);
             
})


export default router;