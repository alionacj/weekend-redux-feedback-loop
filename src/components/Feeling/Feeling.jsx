import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Feeling () {

    const [feelingScore, setFeelingScore] = useState('')
    const dispatch = useDispatch()
    const nextPage = useHistory()

    const handleChange = (e) => {
        let selectedScore = e.target.value
        setFeelingScore(selectedScore)
    }

    const handleClick = () => {
        dispatch({
            type: 'FEELING_SCORE',
            payload: Number(feelingScore)
        })
        nextPage.push("/understanding")
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <label>
                Feeling?
                <input
                    data-testid="input"
                    type="number"
                    placeholder="Rate 1-5"
                    value={feelingScore}
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

export default Feeling
