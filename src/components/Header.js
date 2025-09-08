import { Link } from "react-scroll"
export default function Header({navItems}) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/" smooth="true">S<span className="text-green">KUMAR</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item, ind) => {
                            return (<li className="nav-item" key={ind}>
                                <Link className="nav-link" to={item.name} smooth="true" duration={500}
                                offset={-60} activeClass="active" spy="true">{item.name}</Link>
                            </li>)

                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}