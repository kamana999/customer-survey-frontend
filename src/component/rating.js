import React from 'react'


function Rating(){
     const [data, setdata] = useState([])

     const fetchapi = ()=> {
        fetch("http://127.0.0.1:8000/api/question/")
        .then(resp => resp.json())
        .then(error => console.log(error))
    }
    return(
        <div>
            <ul>
                {
                    data.map(item =>
                            <li>
                                {item.title}
                            </li>
                        )
                }
            </ul>
        </div>
    )
}
export default Rating