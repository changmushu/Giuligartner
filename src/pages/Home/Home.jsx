import "./home.scss"
import Navbar from "../../commonents/Navbar/Navbar"
import BackVideo from "../../commonents/backvideo/BackVideo"
import Backtext from "../../commonents/backtext/Backtext"
import Backphoto from "../../commonents/backphoto/Backphoto"
import Footbar from "../../commonents/footbar/Footbar"

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <BackVideo />
            <Backtext />
            <Backphoto />
            <Footbar />
        </div>
    )
}

export default Home