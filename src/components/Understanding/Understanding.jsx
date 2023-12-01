import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Understanding () {

    const [understandingScore, setUnderstandingScore] = useState(0)

    const handleChange = (e) => {
        let selectedScore = e.target.value
        setUnderstandingScore(selectedScore)
    }

    const dispatch = useDispatch()
    const nextPage = useHistory()

    const handleClick = () => {
        dispatch({
            type: 'UNDERSTANDING_SCORE',
            payload: understandingScore
        })
        nextPage.push("/support")
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <label>
                Understanding?
                <select 
                    data-testid="input"
                    onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button 
                data-testid="next"
                onClick={handleClick}>
                NEXT
            </button>
        </div>
    )
}

export default Understanding