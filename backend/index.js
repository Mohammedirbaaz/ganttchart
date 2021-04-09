const fss=require('fs');
const express=require('express');
const cors=require('cors');
const router=require('express').Router();
const bodyParser = require('body-parser');



const app=express();
const port=process.env.PORT || 5000;

app.use(cors({origin:"http://localhost:3000"}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const newobjs={
    Name:"broo",
    StartTime: "04/04/2021",
    EndTime: "15/04/2021",
    Status: "Finished"
}
// fss.writeFile('./data2.json',JSON.stringify(newobjs),err=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("success");
//     }
// })




// router.route('/changedata').get((req,res)=>{
app.post('/changedata',(req,res)=>{


    const datesnew=req.body.datesnew;
    const datesnew2=req.body.datesnew2;
    const newstatus=req.body.newstatus;
    const datestsold=req.body.datestsold;
    const dateedsold=req.body.dateedsold;
    const statusold=req.body.statusold;

    let obj=[{}];
    fss.readFile('../src/Components/data.json','utf-8',(err,datae)=>{
        if(err){
            console.log(err);
        }
        try{
            obj=JSON.parse(datae);
            console.log(datestsold+" "+obj[0].StartTime);
            for(let i=0;i<obj.length;i++){
                if(datestsold===obj[i].StartTime && dateedsold===obj[i].EndTime && statusold==obj[i].Status){

                    obj[i].StartTime=datesnew;
                    obj[i].EndTime=datesnew2;
                    obj[i].Status=newstatus;

                    


                    fss.writeFile('../src/Components/data.json',JSON.stringify(obj),err=>{
                        if(err){
                            console.log(err);
                        }else{
                            res.send("lol bhai");
                        }
                    })
                }
            }




            
            

    
        }catch(err){
            console.log(err);
        }
    })



});









app.listen(port,()=>{console.log(`server is running on port:${port}`);});
