import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ links }) {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-md bg-dark border border-3 border-primary p-0">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        {links.map(({key, label, to}) => (
                            <li className="nav-item" key={key}>
                                <Link 
                                    to={to}
                                    className={`nav-link ${location.pathname === to ? "active bg-secondary text-white" : "text-white"}`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}