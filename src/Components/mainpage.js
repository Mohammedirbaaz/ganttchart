import React,{Component} from 'react';
import data from  './data.json';

let starts=0;
let ends=0;
let remains=0;
let total=0;
let finds=0;


class mainpage extends Component{
    constructor(props){
        super(props);
        this.state={
            tasks:data,
        }
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
            ids.style.height="10px";
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
            else if(start==="05" || start==="10" || start==="15" || start==="20" || start==="25" || start==="30"){
                finds=start-1;
            }
            else if(start==1 || start==6 || start==11 || start==16 || start==21 || start==26){
                finds=0;
            }
            frists=start-frists;
            finds=frists;
                
            finds=finds*20;
            ids.style.marginLeft=finds+"%";

            let finder1=rem/4.9;
            finder1=finder1*100;
            ids.style.width=finder1+"%";
        },1000)
    }
    changedetails=(idcss)=>{
        let findview=document.getElementById("cardviewid");
        findview.style.visibility="visible";

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

                {this.state.tasks.map((temp,index)=>
                    <tr key={index}>
                        <td>{temp.Name}</td>
                        <td ><div  id={"throwsid1"+index} > {this.checkstartdate(temp.StartTime)===1 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid1"+index,starts,remains,index)} <span className="status" id={"statusid"+index}>{temp.Status}<button onClick={()=>{this.changedetails("throwsid1"+index)}}>Change</button></span> </>} </div></td>
                        <td ><div id={"throwsid2"+index}> {this.checkstartdate(temp.StartTime)===2 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid2"+index,starts,remains,index)} <span className="status" id={"statusid"+index}>{temp.Status}<button onClick={()=>{this.changedetails("throwsid2"+index)}}>Change</button></span></>}</div></td>
                        <td ><div id={"throwsid3"+index}> {this.checkstartdate(temp.StartTime)===3 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid3"+index,starts,remains,index)} <span className="status" id={"statusid"+index}>{temp.Status}<button onClick={()=>{this.changedetails("throwsid3"+index)}}>Change</button></span></>}</div></td>
                        <td > <div id={"throwsid4"+index}> {this.checkstartdate(temp.StartTime)===4 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid4"+index,starts,remains,index)} <span className="status" id={"statusid"+index}>{temp.Status}<button onClick={()=>{this.changedetails("throwsid4"+index)}}>Change</button></span></>}</div></td>
                        <td >< div id={"throwsid5"+index}> {this.checkstartdate(temp.StartTime)===5 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid5"+index,starts,remains,index)} <span className="status" id={"statusid"+index}>{temp.Status}<button onClick={()=>{this.changedetails("throwsid5"+index)}}>Change</button></span></>}</div></td>
                        <td ><div id={"throwsid6"+index}> {this.checkstartdate(temp.StartTime)===6 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid6"+index,starts,remains,index)} <span className="status" id={"statusid"+index}>{temp.Status}<button onClick={()=>{this.changedetails("throwsid6"+index)}}>Change</button></span></>}</div></td>
                    
                    </tr>
                )}

            
            </table>

            <div className="cardview" id="cardviewid">
                    <p className="headers">Change Details</p>
                    <table>
                        <tr>
                            <th>Start</th>
                            <td id="startid"><input type="date"/></td>
                        </tr>
                        <tr>
                            <th>End</th>
                            
                        </tr>
                        <tr>
                        <th>Status</th>
                        </tr>
                    </table>
            </div>
        </div>
          );
    }
}
export default mainpage;