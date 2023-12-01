import { HashRouter as Router, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Feeling () {

    const [feelingScore, setFeelingScore] = useState(0)

    const handleChange = (e) => {
        let selectedScore = e.target.value
        setFeelingScore(selectedScore)
    }

    const dispatch = useDispatch()

    const submitFeelingScore = () => {
        dispatch({
            type: 'FEELING_SCORE',
            payload: feelingScore
        })
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <label>
                Feeling?
                    <select onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <Router>     
                <Link to="/understanding">
                    <button onClick={submitFeelingScore}>NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default Feeling