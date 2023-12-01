import { HashRouter as Router, Link } from "react-router-dom"
import { useDispatch } from "react-redux"

function Submission () {

    const dispatch = useDispatch()

    const clearFeedback = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK'
        })
    }

    return (
        <div>
            <p>Thank you!</p>
            <Router>
                <Link to="/">
                    <button onClick={clearFeedback}>HOME</button>
                </Link>
            </Router>
        </div>
    )
}

export default Submission