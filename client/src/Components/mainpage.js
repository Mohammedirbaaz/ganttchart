import React,{Component} from 'react';
import axios from 'axios';
// import data from  './data.json';


let starts=0;
let ends=0;
let remains=0;
let oldstart;
let oldend;
let oldstatus;
let newstart;
let newend;
let newstatus;
let arr=[];

let finds=0;
let currentid;

var JsonData={};
let lens=[{}];


// let data=[
//     {
//     "Name": "Planning",
//     "StartTime": "04/04/2021",
//     "EndTime": "15/04/2021",
//     "Status": "Finished"
//     },
//     {
//     "Name": "Preparation",
//     "StartTime": "13/04/2021",
//     "EndTime": "20/04/2021",
//     "Status": "InProgress"
//     },
//     {
//     "Name": "Procurement",
//     "StartTime": "01/04/2021",
//     "EndTime": "19/04/2021",
//     "Status": "YetToStart"
//     }
// ]

class mainpage extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get("https://ganttchartapp.herokuapp.com/senddata").then((res)=>{this.setState({data:res.data});lens=this.state.data;console.log(this.state.data);});
    }
    checkstartdate(strtdate){
        let dates = strtdate;
        dates.toString();
        let datesnew1=dates.charAt(0);
        let datesnew2=dates.charAt(1);
        let finaldate=datesnew1+datesnew2;
        parseInt(finaldate);

        // console.log(finaldate);
        if(finaldate>=1 && finaldate<=5){
            starts=finaldate;
            return 1;
        }else if(finaldate>=6 && finaldate<=10){
            starts=finaldate;
            return 2;
        }else if(finaldate>=11 && finaldate<=15){
            starts=finaldate;
            return 3;
        }else if(finaldate>=16 && finaldate<=20){
            starts=finaldate;
            return 4;
        }else if(finaldate>=21 && finaldate<=25){
            starts=finaldate;
            return 5;
        }else if(finaldate>=26 && finaldate<=31){
            starts=finaldate;
            return 6;
        }

    }
    checkenddate(enddate){
        let dates = enddate;
        dates.toString();
        let datesnew1=dates.charAt(0);
        let datesnew2=dates.charAt(1);
        let finaldate2=datesnew1+datesnew2;
        parseInt(finaldate2);
        ends=finaldate2;
        let remaining=ends-starts+1;
        remains=remaining;
        

    }

    changebg=(idss,start,rem,ind)=>{
        
        setTimeout(()=>{
            let ids=document.getElementById(idss);
            ids.addEventListener("mouseover",()=>{
                let statuss=document.getElementById("statusid"+ind);
                statuss.style.visibility="visible";
            })
            ids.addEventListener("mouseout",()=>{
                let statuss=document.getElementById("statusid"+ind);
                statuss.style.visibility="hidden";
            })
       
            ids.style.position="relative";
            ids.style.backgroundColor="blue";
            ids.style.width="10%";
            ids.style.height="22px";
            ids.style.marginTop="0.5%";

            let frists=0;
            if((start>1 && start<5)){
                frists=1;
                
            }
            else if(start>6 && start<10){
                 frists=6; 
                 
            }
            else if(start>11 && start<15){
                frists=11; 
                
           }
            else if(start>16 && start<20){
                frists=16;  
                
            }
            else if(start>21 && start<25){
                frists=21;  
                
            }
            frists=start-frists;
            finds=frists;
             if(start==="05" || start==="10" || start==="15" || start==="20" || start==="25" || start==="30"){
                finds=4;

            }
            if(start==="01" || start==6 || start==11 || start==16 || start==21 || start==26){
                finds=0;
            }
            
            console.log("idss of "+idss+" "+finds)
            finds=finds*20;
            ids.style.marginLeft=finds+"%";

            let finder1=rem/5;
            finder1=finder1*100;
            ids.style.width=finder1+"%";
        },1000)
    }
    changedetails=(idcss,starto,endo,statuso,index)=>{
        currentid=index;
        let findview=document.getElementById("cardviewid");
        findview.style.visibility="visible";

        
        let startold=document.getElementById("startidold");
        startold.innerHTML=starto;
        oldstart=starto;

        




        let endold=document.getElementById("endidold");
        endold.innerHTML=endo;
        oldend=endo;




        let statusold=document.getElementById("statusoldid");
        statusold.innerHTML=statuso;
        oldstatus=statuso;


        

    }
    saveinfo=(idd)=>{
        this.state={
            newtask:[]
        }
        
        let startinput=document.getElementById("startid");
        newstart=startinput.value;
        // console.log("newstart "+newstart);
        let endinput=document.getElementById("endid");
        newend=endinput.value;
        // console.log("newend "+newend);
        let status=document.getElementById("statusids");
        newstatus=status.value;

        // console.log(lens.length);
        // let lens=this.state.data[0];
        // alert(lens);
        // console.log(this.state.data[0]);
        

        for(let i=0;i<lens.length;i++){

            if(idd===i){
       
                if(oldstart===lens[i].StartTime){
                    let datess=new Date(newstart);
                    let daten=datess.getUTCDate();
                    let month=datess.getMonth();
                    month++;
                    let years=datess.getUTCFullYear();
                    
                    let datesnew=new Date();
                    datesnew.toString();
                    let datennnn="";
                    datennnn=daten.toString();
                    if(datennnn.length===1){
                        datennnn="0"+datennnn;
                    }
                    datesnew=datennnn+"/0"+month+"/"+years;
                    // console.log(datesnew);




                    //end date
                    let datessold=new Date(newend);
                    let daten2=datessold.getUTCDate();
                    let month2=datessold.getMonth();
                    month2++;
                    let years2=datessold.getUTCFullYear();
                    let datesnew2=new Date();
                    datesnew2.toString();
                    datennnn="";
                    datennnn=daten2.toString();
   
                    if(datennnn.length===1){
                        datennnn="0"+datennnn;
                    }
                    datesnew2=datennnn+"/0"+month2+"/"+years2;
                    // console.log(datesnew2);
                    
                    const objsss={
                        datesnew:datesnew,
                        datesnew2:datesnew2,
                        newstatus:newstatus,
                        datestsold:lens[i].StartTime,
                        dateedsold:lens[i].EndTime,
                        statusold:lens[i].Status,
                    }

                    axios.post('https://ganttchartapp.herokuapp.com/changedata',objsss).then(res=>{
                        alert(res.data);
                    })
                    
                }
                
            }else{
                
            }
        }
        
    }
    

    render(){ 
        
        return(
        <div >
            
            <table className="tablerows" >
                <tr >
                 <th className="throws" >Task</th>
                 <th className="throws">1-5</th>
                 <th className="throws" >6-10</th>
                 <th className="throws">11-15</th>
                 <th className="throws">16-20</th>
                 <th className="throws">21-25</th>
                 <th className="throws"  >26-31 </th>
                </tr>

                {this.state.data.map((temp,index)=>
                    <tr key={index}>
                        <td>{temp.Name}</td>
                        <td ><div  id={"throwsid1"+index} > {this.checkstartdate(temp.StartTime)===1 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid1"+index,starts,remains,index)} <p  className="status" id={"statusid"+index}><b style={{marginRight:"10%",marginLeft:"10%"}}>{temp.Status}</b><button onClick={()=>{this.changedetails("throwsid1"+index,temp.StartTime,temp.EndTime,temp.Status,index)}}>Change</button></p> </>} </div></td>
                        <td ><div id={"throwsid2"+index}> {this.checkstartdate(temp.StartTime)===2 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid2"+index,starts,remains,index)} <p className="status" id={"statusid"+index}><b style={{marginRight:"10%",marginLeft:"10%"}}>{temp.Status}</b><button onClick={()=>{this.changedetails("throwsid2"+index,temp.StartTime,temp.EndTime,temp.Status,index)}}>Change</button></p></>}</div></td>
                        <td ><div id={"throwsid3"+index}> {this.checkstartdate(temp.StartTime)===3 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid3"+index,starts,remains,index)} <p className="status" id={"statusid"+index}><b style={{marginRight:"10%",marginLeft:"10%"}}>{temp.Status}</b><button onClick={()=>{this.changedetails("throwsid3"+index,temp.StartTime,temp.EndTime,temp.Status,index)}}>Change</button></p></>}</div></td>
                        <td > <div id={"throwsid4"+index}> {this.checkstartdate(temp.StartTime)===4 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid4"+index,starts,remains,index)} <p className="status" id={"statusid"+index}><b style={{marginRight:"10%",marginLeft:"10%"}}>{temp.Status}</b><button onClick={()=>{this.changedetails("throwsid4"+index,temp.StartTime,temp.EndTime,temp.Status,index)}}>Change</button></p></>}</div></td>
                        <td >< div id={"throwsid5"+index}> {this.checkstartdate(temp.StartTime)===5 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid5"+index,starts,remains,index)} <p className="status" id={"statusid"+index}><b style={{marginRight:"10%",marginLeft:"10%"}}>{temp.Status}</b><button onClick={()=>{this.changedetails("throwsid5"+index,temp.StartTime,temp.EndTime,temp.Status,index)}}>Change</button></p></>}</div></td>
                        <td ><div id={"throwsid6"+index}> {this.checkstartdate(temp.StartTime)===6 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid6"+index,starts,remains,index)} <p className="status" id={"statusid"+index}><b style={{marginRight:"10%",marginLeft:"10%"}}>{temp.Status}</b><button onClick={()=>{this.changedetails("throwsid6"+index,temp.StartTime,temp.EndTime,temp.Status,index)}}>Change</button></p></>}</div></td>
                    
                    </tr>
                )}
                {/* {alert(this.state.data[0].Name)} */}

            
            </table>

            <div className="cardview" id="cardviewid" >
                    <div className="headers">
                    <p >Change Details</p>

                    </div>
                    <table>
                        <tr>
                            <th>Start:</th>
                            <td ><input type="date" id="startid"/></td>
                            <th>Old:</th>
                            <td ><p id="startidold"></p></td>

                        </tr>
                        <tr>
                            <th>End</th>
                            <td ><input type="date" id="endid"/></td>
                            <th>Old:</th>
                            <td ><p id="endidold"></p></td>

                            
                        </tr>
                        <tr>
                        <th>Status</th>
                        <td ><input type="text" id="statusids"/></td>
                        <th>Old:</th>
                        <td ><p id="statusoldid"></p></td>

                        <tr>
                            <th></th>
                            <td ></td>
                            <th></th>

                            <td><button onClick={()=>{this.saveinfo(currentid)}}>Save</button></td>
                        </tr>

                        </tr>
                    </table>
            </div>
        </div>
          );
    }
}
export default mainpage;