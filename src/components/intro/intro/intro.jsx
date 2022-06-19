import "./intro.css"
import me from "../../img/me-nobk.png"
// import me from "../../img/7109.jpg"


const Intro = () => {
    return (
        <div className="intro">
            <div className="intro1">
                <div className="intro1-wrap">
                    <h2 className="intro-txt">Hello, My name is</h2>
                    <h1 className="intro-name">Dan Groza</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrap">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">UI/UX Designer</div>
                            <div className="intro-title-item">Business analyst</div>
                            <div className="intro-title-item">Photographer</div>
                            <div className="intro-title-item">Project Manager</div>
                        </div>
                    </div>
                    <div className="intro-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, magni!
                    </div>
                </div>
            </div>
            <div className="intro2">
                <div className="intro-bg"></div>
                <img src={me} alt="" className="intro-img" />
            </div>
        </div>
    )
}

export default Intro