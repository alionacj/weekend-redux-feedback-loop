import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"

function Review () {

    const feedback = useSelector(store => store.feedback)
    const nextPage = useHistory()

    const handleClick = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
        .then((response) => {
            nextPage.push("/submission")
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
            <button 
                data-testid="next"
                onClick={handleClick}>
                SUBMIT
            </button>
        </div>
    )
}

export default Review