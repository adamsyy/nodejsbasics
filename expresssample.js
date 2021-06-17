const express=require('express')
const app=express()

app.get('/',function(req,res){
    res.send('oii')
})

app.listen(3000,()=>console.log('started'))