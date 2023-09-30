import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    let logo = "./logo.png"
    let reset = "./reset.png"
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><img src={require(`${logo}`)} alt={"logo"} /> <span>+90</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links" id="navbarSupportedContent">
                    <ul className=" main-nav-ul navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>الرئيسية</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                الألعاب
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to={"/games"}>الكل</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" to={"/games/onevone"}>1v1</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" to={"/games/twovtwo"}>2v2</Link></li>
                            </ul>
                        </li>
                        <li><div className="reset nav-item" onClick={() => {
                            document.querySelector(".alert-reset").style.display = "flex"
                        }

                        }><span>reset</span> <img src={require(`${reset}`)} alt="..."/> </div></li>
                    </ul>
                    <div className="alert-reset"><h1>Are you sure you want to reset all games?</h1>
                        <div className="alert-btns">
                            <button className="btn btn-primary" onClick={() => {
                                // document.querySelector(".alert-reset").style.display = "none"
                                localStorage.clear()
                                window.location.reload()
                            }} >YES</button>
                            <button className="btn btn-danger" onClick={() => {
                                document.querySelector(".alert-reset").style.display = "none"
                            }}>NO</button>
                        </div>
                    </div>

                </div>
            </div>

        </nav >
    )
}
export default Navbar;