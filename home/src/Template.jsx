import React from "react";
import { Link, Outlet } from "react-router-dom";

function Template() {
    return (
        <>
            <nav>
                <ul>
                    <Link to={"/Home"}>
                        <li>Home</li>
                    </Link>
                    <Link to={"/Catalogo"}>
                        <li>Catalogo</li>
                    </Link>
                    <Link to={"/Dettaglio"}>
                        <li>Dettaglio</li>
                    </Link>
                </ul>
            </nav>
            <hr />
            <Outlet />
            <hr />
            <footer>Copyright</footer>
        </>
    )
}

export default Template;