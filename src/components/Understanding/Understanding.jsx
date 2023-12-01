import { HashRouter as Router, Link } from "react-router-dom"

function Understanding () {

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <label>
                Understanding?
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <Router>
                <Link to="/support">
                    <button>NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default Understanding