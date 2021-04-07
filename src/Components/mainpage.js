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
        }else if(finaldate<=6 && finaldate<=10){
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
        // console.log("remaining "+remaining);
        remains=remaining;
        

    }
    changebg=(idss,start,rem)=>{
        
        setTimeout(()=>{
            let ids=document.getElementById(idss);
       
            ids.style.position="relative";
            ids.style.backgroundColor="blue";
            ids.style.width="10%";
            ids.style.height="10px";
            ids.style.marginTop="0.5%";
            
            if(start>1 && start<5){
                
                // if(start!=1 && start!=5){
                 finds=start;
                // }
                //|| start>6 && start<10 || start>11 && start<15 || start>16 && start<20 || start>21 && start<25
                //|| start==10 || start==15 || start==20 || start==25 || start==30
            }
            else if(start>=6 && start<=10){
                //  alert("from 6 to 10 "+start);
                 finds=start;
            }
            else if(start==="05" || start==="10"){
                //  alert("from  5 "+start);
                 finds=start-1;
                
            }else if(start==6 || start==11 || start==16 || start==21 || start==26){
                 finds=0;
            }
                
            finds=finds*20;
            // console.log("check me "+finds+" "+start);
            ids.style.marginLeft=finds+"%";

            let finder1=rem/4.9;
            finder1=finder1*100;
            ids.style.width=finder1+"%";
        },1000)
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
                        <td ><div id={"throwsid1"+index}> {this.checkstartdate(temp.StartTime)===1 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid1"+index,starts,remains)}</>} </div></td>
                        <td ><div id={"throwsid2"+index}> {this.checkstartdate(temp.StartTime)===2 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid2"+index,starts,remains)}</>}</div></td>
                        <td ><div id={"throwsid3"+index}> {this.checkstartdate(temp.StartTime)===3 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid3"+index,starts,remains)}</>}</div></td>
                        <td > <div id={"throwsid4"+index}> {this.checkstartdate(temp.StartTime)===4 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid4"+index,starts,remains)}</>}</div></td>
                        <td >< div id={"throwsid5"+index}> {this.checkstartdate(temp.StartTime)===5 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid5"+index,starts,remains)}</>}</div></td>
                        <td ><div id={"throwsid6"+index}> {this.checkstartdate(temp.StartTime)===6 && <>{this.checkenddate(temp.EndTime)} {this.changebg("throwsid6"+index,starts,remains)}</>}</div></td>
                    
                    </tr>
                )}

            
            </table>
        </div>
          );
    }
}
export default mainpage;