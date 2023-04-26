import "./backphoto.scss"
import backphoto1 from "../../assets/backphoto1.jpg"
import backphoto2 from "../../assets/backphoto2.jpg"
import backphoto3 from "../../assets/backphoto3.jpg"
import backphoto4 from "../../assets/backphoto4.jpg"
import { useEffect, useState } from "react";


const Backphoto = () => {

    const [translateXfirst, setTranslateXfirst] = useState(0);
    const [rotatefirst, setRotatefirst] = useState(0);
    const [translateXsecond, setTranslateXsecond] = useState(0);
    const [rotatesecond, setRotatesecond] = useState(0);
    const docHeight = document.documentElement.clientHeight;
    const docWidth = document.documentElement.clientWidth / 1.3;




    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > docHeight && window.scrollY < docHeight * 2) {
                setTranslateXfirst((window.scrollY - docHeight) * ((docWidth*0.281)/docHeight))
                setRotatefirst((window.scrollY - docHeight) * (5/docHeight))
            } else if (window.scrollY > docHeight * 2 && window.scrollY < docHeight * 3) {
                setTranslateXfirst((docWidth*0.281))
                setRotatefirst(5)
                setTranslateXsecond((window.scrollY - docHeight * 2) * ((docWidth*0.281)/docHeight))
                setRotatesecond((window.scrollY - docHeight * 2) * (5/docHeight))
            } else if (window.scrollY > docHeight * 3) {
                setTranslateXsecond((docWidth*0.281))
                setRotatesecond(5)
            }

            console.log(docWidth)
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <div className="backphoto">
            <div className="photofirst">
                <div className="left">
                    <img src={backphoto1} style={{ transform: `rotate(-${rotatefirst}deg) translateX(-${translateXfirst}px)` }} />
                </div>
                <div className="mindle">
                    <div className="first">
                        <span>SEPTEMBER  2019  ➡️  MONGOLIA</span>
                    </div>
                    <div className="second">
                        <h1>Follow The</h1>
                        <h1>Tracks</h1>
                    </div>
                    <div className="third">
                        <span>Read My Story</span>
                    </div>
                </div>
                <div className="right">
                    <img src={backphoto2} style={{ transform: `rotate(${rotatefirst}deg) translateX(${translateXfirst}px)` }} />
                </div>
            </div>
            <div className="photosecond">
                <div className="left">
                    <img src={backphoto3} style={{ transform: `rotate(-${rotatesecond}deg) translateX(-${translateXsecond}px)` }} />
                </div>
                <div className="mindle">
                    <div className="first">
                        <span>SEPTEMBER  2019  ➡️  MONGOLIA</span>
                    </div>
                    <div className="second">
                        <h1>Follow The</h1>
                        <h1>Tracks</h1>
                    </div>
                    <div className="third">
                        <span>Read My Story</span>
                    </div>
                </div>
                <div className="right">
                    <img src={backphoto4} style={{ transform: `rotate(${rotatesecond}deg) translateX(${translateXsecond}px)` }} />
                </div>
            </div>
        </div>
    )
}

export default Backphoto