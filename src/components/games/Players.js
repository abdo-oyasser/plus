// import { useEffect, useState } from "react"
import players from "../../jsons/players.json"
import "./Players.css"
function Players() {

    return (
        <>
            <div className="row">
                <div className="vs-div">
                    <h1 className="vs-h1">اللاعبين</h1>
                </div>
                {players.map((player) => {

                    if (localStorage.getItem(`p${player.id}`)) {
                        return (

                            <div className={`player-card`} key={player.id}>
                                <div className="main-card lay">
                                    <img src={player.img} alt={<span class="loader"></span>} />
                                    <h2>{player.name}</h2>
                                </div>
                            </div>

                        )
                    } else {
                        return (
                            <div className={`player-card col-3 `} key={player.id}>
                                <img className={`back `} onClick={(e) => {
                                    localStorage.setItem(`p${player.id}`, true)
                                    e.currentTarget.style.display = "none"
                                }} alt={<span class="loader"></span>} src="https://i.pinimg.com/564x/72/13/e1/7213e1a55a3c0c73d5864e14ba1aa7dc.jpg" />
                                <div className="main-card">
                                    <img src={player.img} alt={player.name} />
                                    <h2>{player.name}</h2>
                                </div>
                            </div>
                        )
                    }
                }
                )}
            </div></>)
}
export default Players