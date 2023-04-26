import "./backvideo.scss"
import Touchable from "../../assets/Touchable.mp4"

const BackVideo = () => {
    return (
        <div className="backvideo">
            <video muted="muted" className="video" controls autoplay="autoPlay" loop src={require("../../assets/Touchable.mp4")}></video>
            <h2>GIULIA GARTNER<br />
                PHOTOGRAPHER &<br />
                FILMMAKER
            </h2>
        </div>
    )
}

export default BackVideo