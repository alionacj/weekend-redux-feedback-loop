import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

function Submission () {

    const dispatch = useDispatch()
    const nextPage = useHistory()

    const handleClick = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK'
        })
        nextPage.push("/")
    }

    return (
        <div>
            <p>Thank you!</p>
            <button onClick={handleClick}>HOME</button>
        </div>
    )
}

export default Submission