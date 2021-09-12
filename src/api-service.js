
export class API {
    static updateMovie(mov, body){
        return fetch(`http://127.0.0.1:8001/api/question/${mov}/`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp=>resp.json())
    }

    static createMovie(body){
        return fetch(`http://127.0.0.1:8001/api/question/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp=>resp.json())
    }

    static deleteMovie(question_id){
        return fetch(`http://127.0.0.1:8001/api/question/${question_id}/`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            

        })
    }

    static answerQuestion(question_id, rate){
        console.log(question_id)
        return fetch(`http://127.0.0.1:8001/api/question/${question_id}/rate_question/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({answer:rate + 1 })
        })
        .then(resp => resp.json())
        .catch(error => console.log(error))
    }
}
