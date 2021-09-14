import React,{useState} from "react";
import {API} from "../api-service";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

function SingleComponent(props){

    const [currentValue, setCurrentValue] = useState(0);
    const [updateValue, setUpdatedValue] = useState(null)
    const [hoverValue, setHoverValue] = useState(undefined);
    
    const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
    };
    
    const handleMouseLeave = () => {
    setHoverValue(undefined)
    }

    const clcikStar = (question , rate,i) =>{
        setCurrentValue(rate)
        API.answerQuestion(question.id, rate)
        
    }

    return(
        [...Array(props.question.count)].map((e, i)=> {
            return <FontAwesomeIcon key={i} icon={faStar}  color={(hoverValue || currentValue) > i ? 'orange' : 'black'}
            onMouseOver={() => handleMouseOver(i + 1)}
              onMouseLeave={handleMouseLeave}
            onClick={()=>clcikStar(props.question,i+1, i) }

            /> 
            
        })
    )
}
export default SingleComponent;