import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Understanding () {

    const [understandingScore, setUnderstandingScore] = useState('')
    const dispatch = useDispatch()
    const nextPage = useHistory()

    const handleChange = (e) => {
        let selectedScore = e.target.value
        setUnderstandingScore(selectedScore)
    }

    const handleClick = () => {
        dispatch({
            type: 'UNDERSTANDING_SCORE',
            payload: Number(understandingScore)
        })
        nextPage.push("/support")
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <label>
                Understanding?
                <input
                    data-testid="input"
                    type="number"
                    placeholder="Rate 1-5"
                    value={understandingScore}
                    onChange={handleChange}>
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

export default Understanding