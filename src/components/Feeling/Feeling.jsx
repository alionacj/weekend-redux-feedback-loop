import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Feeling () {

    const [feelingScore, setFeelingScore] = useState(0)

    const handleChange = (e) => {
        let selectedScore = e.target.value
        setFeelingScore(selectedScore)
    }

    const dispatch = useDispatch()
    const nextPage = useHistory()
    
    const handleClick = () => {
        dispatch({
            type: 'FEELING_SCORE',
            payload: feelingScore
        })
        nextPage.push("/understanding")
    }


    return (
        <div>
            <h1>How are you feeling today?</h1>
            <label>
                Feeling?
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

export default Feeling