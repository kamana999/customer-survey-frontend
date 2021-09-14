let jsonObj = [];
export class API {
    static answerQuestion(question, answer){
        if(jsonObj.length > 4){
            return console.log("Submit your answer")
        }
        else{
            jsonObj.push({"question": question, "answer":answer})
        }
        console.log(jsonObj[0].question)
        return jsonObj
    }

    static SubmitAnswer(){
        return fetch(`http://127.0.0.1:8000/api/answer/rate_question/rate_question/`,{
            method:'POST',  
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({data:jsonObj })
        })
        .then(resp => resp.json())
        .catch(error => console.log(error));
        
    }
}
