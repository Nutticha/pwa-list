import Navbar from "../navbar/navbar.component";

const ToBuy = () => (
    <>
        <Navbar/>
        <p className="layout">Still Need: </p>
        <ul className="Needed">
            <li>Eggs</li>
            <li>Bread</li>
            <li>Avocados</li>
        </ul>
    </>
)

export default ToBuy;