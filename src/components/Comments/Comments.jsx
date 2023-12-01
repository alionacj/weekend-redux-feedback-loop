import { HashRouter as Router, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Comments () {

    const [comments, setComments] = useState(0)

    const handleChange = (e) => {
        let commentInput = e.target.value
        setComments(commentInput)
    }

    const dispatch = useDispatch()

    const submitComments = () => {
        dispatch({
            type: 'COMMENT',
            payload: comments
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
                    <button onClick={submitComments}>NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default Comments