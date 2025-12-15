const express=require("express");
const cors=require("cors");
const app=express();
const PORT=4000;

app.use(cors());
app.use(express.json());

let courses=require("./data/db.json");

app.get("/api/courses",(req,res)=>
{
    res.json(courses);
});


app.get("/api/courses/:id",(req,res)=>
{
    const id=Number(req.params.id);
    const course=courses.find((c)=>c.id===id);

    if(!course) {
 res.status(404).json({message:"courses not found!"});
    }
       
   

    return res.json(course);
});

app.post("/api/courses",(req,res)=>{

const {cname,cdur}=req.body;
cid:courses.length?courses[courses.length-1].cid+1:1
const newCourse={cid,cname,cdur}
courses.push(newCourse);
res.status(201).json(newCourse);
});


app.put("/api/courses/:id",(req,res)=>
{
    const id=Number(req.params.id);
   const {cname,cdur}=req.body;
   let course=courses.find((c)=>c.id===id);
   if(!course)
   {
    return res.status(404).json({message:"Course not found"});
   }

   course.cname=cname;
   course.cdur=cdur;
   return res.json(course);
});


app.delete("/api/courses/:id",(req,res)=>{
    const id=Number(req.params.id);
    courses=courses.filter((c)=>c.id!==id);
    res.json({message:"Couse deleted!"});
});


app.listen(PORT,()=>{
    console.log("Running successfully!!")
});