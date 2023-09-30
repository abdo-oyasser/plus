import { useState } from "react";

function Explain(props) {
    let [exp, setExp] = useState(props.explain)
    return (<div className="explain-game">
        <div className="vs-div">
            <h1 className="vs-h1">{props.title}</h1></div>
        <div className="explain"><ul>
            {exp.map((ele) => {
                return <li key={exp.indexOf(ele)}>{ele}</li>
            })}
        </ul></div>
    </div>)
} export default Explain;