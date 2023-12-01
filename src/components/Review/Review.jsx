import { HashRouter as Router, Link } from "react-router-dom"

function Review () {

    return (
        <div>
            Review Page
            <Router>
                <Link to='/submission'>
                    <button>SUBMIT</button>
                </Link>
            </Router>
        </div>
    )
}

export default Review