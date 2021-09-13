import React, {useState} from "react";

import { Button, Card, CardActions, CardContent, Typography,} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {API} from "../api-service";

let data = [];

function Second(props){
    data.push(props.questions)
    console.log(data)

    const clcikStar = (question , rate) =>{
        API.answerQuestion(question.id, rate)
        
    }
    const submitAnswer = () =>{
        API.SubmitAnswer()
    }
    const [highlighted, sethightlighted] = useState(-1);
    const highLightRate = (high) => evt =>{
        sethightlighted(high)
    }

    return(
        <div> 
            {props && props.questions && props.questions.map(question => {
                const count  = question.count;
                let AuthButton;
                console.log(props.questions[0].title);
                if (count === 0) {
                AuthButton = <input type="text" name="answer" />;
                } else {
                AuthButton = <div className="rating-box" key={question.id} >
                    
                {
                    [...Array(question.count)].map((e, i)=> {
                        return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i-1 ? 'yellow': ''}
                        
                        onMouseEnter={highLightRate(i)} onMouseLeave={highLightRate(-1)}
                        onClick={()=>clcikStar(question,i+1) }
                        /> 
                       
                    })
                    
                }
            </div>
            }   
            return (
                <div key={question.id}>
                    <Card>
                        <CardContent>
                            <Typography>{question.title}</Typography>
                            {AuthButton}
                        </CardContent>
                    </Card>
                </div>
                )
            })}
                <CardActions>
                    <Button size="large" variant="contained" color="secondary" onClick={()=>submitAnswer() }>Submit</Button>
                </CardActions>
    </div>
    );
}
export default Second;