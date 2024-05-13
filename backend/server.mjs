import express from 'express'
const app= express()
app.get('/',(req,res)=>{
   res.send('hello workd')
})
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server started')
})
console.log("sjnsq")