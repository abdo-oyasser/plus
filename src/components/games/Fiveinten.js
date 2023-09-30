import asks from "../../jsons/fiveinten.json"
import "./mazad.css"
function Fiveinten() {
    let eye = "./eye.png"
    return (
        <>
            <div className="vs-div">
                <h1 className="vs-h1">الأسئلة</h1>
            </div>
            <div className="row mazad">
                {asks.map((ask, index) => {
                    if (localStorage.getItem(`fiveinten${ask.id}`)) {
                        return (
                            <>
                                <div className={`ask-con ask-con${index}`}>
                                    <h2 className="false-ask">{ask.ask}</h2>
                                </div>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <div className={`ask-con ask-con${index}`}>
                                    <img src={require(`${eye}`)} onClick={(e) => {
                                        document.querySelector(`.ask-con${index} h2`).style.color = "#fff"
                                        e.currentTarget.style.opacity = "0"
                                        localStorage.setItem(`fiveinten${ask.id}`, true)
                                    }} alt="..." />
                                    <h2 className="true-ask">{ask.ask}</h2>
                                </div>
                            </>
                        )
                    }
                })}
            </div>
        </>
    )
}
export default Fiveinten;