import { HashRouter as Router, Link } from "react-router-dom"

function Submission () {

    return (
        <div>
            Submission Page
            <Router>
                <Link to="/">
                    <button>HOME</button>
                </Link>
            </Router>
        </div>
    )
}

export default Submission