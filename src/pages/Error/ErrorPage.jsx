import { useRouteError, Link, useNavigate } from "react-router-dom"
import "./errorpage.scss"
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const ErrorPage = () => {

    //传递了error？
    const error = useRouteError()
    //历史
    const navigate = useNavigate();

    return (
        <div className="errorpage">
            <h1>Uh oh! We' got a problem.</h1>
            <p>{error.message || error.statusText}</p>
            <div className="flex-md">
                {/*onClick={() => navigate(-1)} 退回上一级 */}
                <button
                    className="btn btn--dark"
                    onClick={() => navigate(-1)}
                >
                    <ArrowUturnLeftIcon width={20} />
                    <span>Go Back</span>
                </button>
                <Link
                    to="/"
                    className="btn btn--dark"
                >
                    <HomeIcon width={20} />
                    <span>Go home</span>
                </Link>
            </div></div>
    )
}

export default ErrorPage