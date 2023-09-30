import { Link } from "react-router-dom";
import data from "../jsons/games.json"

import "./Games.css"

function Games() {


    return (<>

        <div className="vs-div">
            <h1 className="vs-h1">الكل</h1>
        </div>
        <div className="row mb-5">
            {
                data.map((element) => {
                    return (<>
                        <div className="card col-3  game-card" key={element.id}>
                            <img src={element.img} className="card-img-top" alt={element.enTitle} />
                            <div className="card-body">
                                <h5 className="card-title">{element.title}</h5>
                                <Link className="icon-info-game" to={`/games/explain/${element.enTitle}`}><i class="fa-solid fa-circle-info"></i></Link>
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
                    </>)
                })
            }
        </div >
    </>)
}
export default Games;