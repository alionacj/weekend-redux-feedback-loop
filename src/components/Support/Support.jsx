import { HashRouter as Router, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Support () {

    const [supportScore, setSupportScore] = useState(0)

    const handleChange = (e) => {
        let selectedScore = e.target.value
        setSupportScore(selectedScore)
    }

    const dispatch = useDispatch()

    const submitSupportScore = () => {
        dispatch({
            type: 'SUPPORT_SCORE',
            payload: supportScore
        })
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <label>
                Support?
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
                <Link to="/comments">
                    <button 
                        data-testid="next"
                        onClick={submitSupportScore}
                    >
                        NEXT
                    </button>
                </Link>
            </Router>
        </div>
    )
}

export default Support