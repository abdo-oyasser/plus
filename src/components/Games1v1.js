import { Link } from "react-router-dom";
import data from "../jsons/games.json"
function Games1v1() {
    return (
        <>
            <div className="vs-div">
                <h1 className="vs-h1">1v1</h1></div>
            <div className="row">
                {
                    data.map((element) => {
                        if (element.vs.includes("1v1")) {
                            return (
                                <div className="card col-3 sm-col-6 md-col-4 game-card" key={element.id}>
                                    <img src={element.img} className="card-img-top" alt={element.enTitle} />
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title}</h5>
                                        <Link className="icon-info-game" to={`/games/${element.link}/explain`}><i class="fa-solid fa-circle-info"></i></Link>
                                        <div className="link-game"><Link to={`/games/${element.link}`} className="btn">البدء</Link>
                                        </div>
                                    </div>
                                    <div className="vss">
                                        {element.vs.map((vs) => {
                                            if (vs === "1v1") {
                                                return <Link to={"/games/onevone"} className="vs onevone">{vs}</Link>
                                            }
                                            if (vs === "2v2") {
                                                return < Link to={"/games/twovtwo"} className="vs twovtwo" > {vs}</Link>
                                            }
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div >
        </>
    )
}
export default Games1v1;
