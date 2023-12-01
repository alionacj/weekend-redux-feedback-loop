import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Comments () {

    const [comments, setComments] = useState(0)
    const dispatch = useDispatch()
    const nextPage = useHistory()

    const handleChange = (e) => {
        let commentInput = e.target.value
        setComments(commentInput)
    }

    const handleClick = () => {
        dispatch({
            type: 'COMMENT',
            payload: comments
        })
        nextPage.push("/review")
    }


    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <label onChange={handleChange}>
                Comments
                <input
                    data-testid="input"
                    placeholder="Type comments here"
                >
                </input>
            </label>
            <button 
                data-testid="next"
                onClick={handleClick}>
                NEXT
            </button>
        </div>
    )
}

export default Comments