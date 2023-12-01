import { HashRouter as Router, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"

function Review () {

    const feedback = useSelector(store => store.feedback)

    const saveSubmission = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
        .then((response) => {
            console.log('it worked')
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <div>
            <h1>Review Your Feedback:</h1>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <Router>
                <Link to='/submission'>
                    <button 
                        data-testid="next"
                        onClick={saveSubmission}>
                        SUBMIT
                    </button>
                </Link>
            </Router>
        </div>
    )
}

export default Review