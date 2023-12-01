import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Support () {

    const [supportScore, setSupportScore] = useState(0)

    const handleChange = (e) => {
        let selectedScore = e.target.value
        setSupportScore(selectedScore)
    }

    const dispatch = useDispatch()
    const nextPage = useHistory()

    const handleClick = () => {
        dispatch({
            type: 'SUPPORT_SCORE',
            payload: Number(supportScore)
        })
        nextPage.push("/comments")
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <label>
                Support?
                <input
                    data-testid="input"
                    type="number"
                    placeholder="Rate 1-5"
                    value={supportScore}
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

export default Support