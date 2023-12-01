import { HashRouter as Router, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Comments () {

    const [comment, setComment] = useState(0)

    const handleChange = (e) => {
        let commentInput = e.target.value
        setComment(commentInput)
    }

    const dispatch = useDispatch()

    const submitComment = () => {
        dispatch({
            type: 'COMMENT',
            payload: comment
        })
    }


    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <label onChange={handleChange}>
                Comments
                <input
                    placeholder="Type comments here"
                >
                </input>
            </label>
            <Router>
                <Link to="/review">
                    <button onClick={submitComment}>NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default Comments