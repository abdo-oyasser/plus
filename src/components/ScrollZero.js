import "./ScrollZero.css"
function ScrollZero() {
    let top = "./top.png"
    window.onscroll = function () {
        if (window.scrollY > 500) {
            document.querySelector(".scroll-zero").style.display = "flex"
        } else {
            document.querySelector(".scroll-zero").style.display = "none"
        }
    }
    return (
        <div className="scroll-zero" onClick={() => {
            window.scrollTo(0, 0)
        }}>
            <img src={require(`${top}`)} alt="top"/>
        </div>)
}
export default ScrollZero;
