import React, {useState} from "react";

import { Button, Card, CardActions, CardContent, Typography,} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {API} from "../api-service";


function Second(props){

    const clickData = question =>{
        console.log("click")
        API.deleteMovie(question.id)
    }
    const clcikStar = (question , rate) =>{
        API.answerQuestion(question.id, rate)
    }
    const [highlighted, sethightlighted] = useState(-1);
    // const mov = props.question;
    const highLightRate = high => evt =>{
        sethightlighted(high)
    }

    // const rateClicked =rate =>{
    //     console.log("click");
    //     fetch(`http://localhost:8001/api/question/${props.question.id}/rate_question/`,{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({answer:rate + 1 })
    //     })
    //         .then(resp => getDetailed(resp))
    //         .catch(error => console.log(error))
    // }
    // const getDetailed =(id)=> {
    //     fetch(`http://localhost:8000/api/question/${id}/`,{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(resp => resp.json())
    //         .then(resp => props.UpdateDetails(resp))
    //         .catch(error => console.log(error))
    // }


    return(
    <div>
        {props.questions && props.questions.map(question => {
            return (
                <div key={question}>
                 
                    <Card>
                        <CardContent>
                            <Typography>{question.title}</Typography>
                            <div className="rating-box">
                            {
                                [...Array(question.count)].map((e, i)=> {
                                    return <FontAwesomeIcon key={i} icon={faStar}
                                    className={highlighted > i-1 ? 'purple': ''}
                                
                                    onClick={()=>clcikStar(question,i)}/>
                                })
                            }
                        </div>
                        </CardContent>
                        <CardActions>
                         <Button size="small" variant="contained" color="secondary" onClick={()=>clickData(question)}>{question.id}</Button>
                     </CardActions>
                    </Card>
                </div>
                )
        })}
    </div>);
}
export default Second;