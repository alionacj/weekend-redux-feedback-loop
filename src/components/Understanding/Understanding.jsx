import { HashRouter as Router, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Understanding () {

    const [understandingScore, setUnderstandingScore] = useState(0)

    const handleChange = (e) => {
        let selectedScore = e.target.value
        setUnderstandingScore(selectedScore)
    }

    const dispatch = useDispatch()

    const submitUnderstandingScore = () => {
        dispatch({
            type: 'UNDERSTANDING_SCORE',
            payload: understandingScore
        })
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
            <Router>
                <Link to="/support">
                    <button 
                        data-testid="next"
                        onClick={submitUnderstandingScore}>
                        NEXT
                    </button>
                </Link>
            </Router>
        </div>
    )
}

export default Understanding