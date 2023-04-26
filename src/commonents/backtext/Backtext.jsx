import "./backtext.scss"
import backtext1 from "../../assets/backtext1.jpg"
import backtext2 from "../../assets/backtext2.jpg"
import backtext3 from "../../assets/backtest3.jpg"

const Backtext = () => {
    return (
        <div className="backtext">
            <div className="first">
                <h1>A <img className="img-first" src={backtext1} /> tiny mountain</h1>
                <h1>village<img className="img-second" src={backtext2} />wherre it all</h1>
                <h1> began ...<img className="img-third" src={backtext3} /></h1>
            </div>
            <div className="second">
                <h2>Giulia Gartner () is an outdoor, travel, and commercial photographer, filmmaker, and storyteller from the Dolomites in northern Italy. Her work focuses on capturing wild and rugged landscapes with a vivid color palette and dreamy elements. Her love for photography has spilled over into filmmaking which is one of the main creative outlets she pursues today.</h2>
            </div>
            <span>Read My Story</span>
        </div>
    )
}

export default Backtext