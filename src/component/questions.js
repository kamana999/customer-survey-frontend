import React, {useState} from "react";
import { Button, Card, CardActions, CardContent, Typography,} from "@material-ui/core";
import {API} from "../api-service";
import { Link } from "react-router-dom";
import SingleComponent from "./star";
function Second(props){
    const submitAnswer = () =>{
        API.SubmitAnswer()
    }
    let [count, counted] = useState(0);
    
    function change_count(val){
        if ((count>0 && val<0) || (count<10 && val>0)){
            return count + val;
        }
        else{
            return count;
        }
    }
    return(
        <div>
            { 
                props && props.questions && props.questions.map((question, index) => {
                    const length = props.questions.length
                    
                    if(index === count){
                        const counts  = question.count;
                        let AuthButton;
                        let Auth;
                        if (counts === 0) {
                            AuthButton = <textarea type="text" name="answer" />;
                        } 
                        else {
                            AuthButton = 
                            <div className="rating-box" key={question.id}>
                                {<SingleComponent  question={question}/>}
                            </div>
                        }  
                        if(count == length-1){
                            Auth = 
                            <CardActions>
                                <Button size="large" variant="contained" color="secondary" onClick={()=>submitAnswer()}><Link to="/submit" style={{textDecoration:'none', color:'white' }}>Submit</Link></Button>
                            </CardActions>

                        }
                        else{
                            Auth =  <Button size="large" variant="contained" color="secondary" onClick={()=>counted(change_count(+1))}>Next</Button>        
                        }
                        return(
                            <div key={question.id}>
                                <Card>
                                    <CardContent>
                                        <Typography>{question.id +'.' +question.title}</Typography>
                                        {AuthButton}
                                    </CardContent>
                                </Card>
                                <CardActions>
                                    <Button variant="contained" color="primary" size="large" value={0} onClick={()=>counted(change_count(-1))}>prev</Button>
                                    {Auth}
                                </CardActions>
                            </div>
                        )
                    }  
                })      
            }   
    </div>
    );
}
export default Second;