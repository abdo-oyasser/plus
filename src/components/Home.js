import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <div className="home-text">
                    <h1>+90</h1>
                    <p>أسئلة كرة قدم للعب مع الأصدقاء</p>
                </div>
                <div className="home-btns">
                    <Link to={"/games"} className="btn">الألعاب</Link>
                </div>
            </div>
        </div>
    )
}
export default Home