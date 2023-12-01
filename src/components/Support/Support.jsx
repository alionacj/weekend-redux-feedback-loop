import { HashRouter as Router, Link } from "react-router-dom"

function Support () {

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <label>
                Support?
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <Router>
                <Link to="/comments">
                    <button>NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default Support