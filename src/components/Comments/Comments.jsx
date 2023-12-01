import { HashRouter as Router, Link } from "react-router-dom"

function Comments () {

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <label>
                Comments
                <input
                    placeholder="Type comments here"
                >
                </input>
            </label>
            <Router>
                <Link to="/review">
                    <button>NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default Comments