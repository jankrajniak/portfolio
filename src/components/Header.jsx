import Navbar from './UI/Navbar';

export default function Header() {

    return (
        <header className="bg-dark text-white p-3">
            <div className="container d-flex justify-content-between">
                <h1>Jan Krajniak</h1>
                <Navbar
                    links={[
                        { key: 1, label: "About Me", to: "/" },
                        { key: 2, label: "Portfolio", to: "/portfolio" },
                        { key: 3, label: "Contact Me", to: "/contact" },
                        { key: 4, label: "Resume", to: "/resume" },
                    ]}
                />
            </div>
        </header>
    );
};