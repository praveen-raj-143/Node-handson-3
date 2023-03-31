const express=require("express");
const app=express();

const middleware=(req,res,next)=>{
    console.log("middleware one")
}

const middlewaretwo=(req,res,next)=>{
    console.log("middleware two")
}
app.use(middleware);
app.get("/api",(req,res)=>{
    res.send("api page");
    res.end();
})

app.get("/home",(req,res)=>{
    res.send("home page");
    res.end();
})


app.get("/login",middlewaretwo,(req,res)=>{
    res.send("login page");
    res.end();
})
app.listen(8000)