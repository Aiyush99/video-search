import React from 'react'
import "./css/Navbar.css";
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <label className="logo">Apna Video</label>
            <Link className="nav_item" to="/">Youtube Search Page</Link>
            <Link className="nav_item" to="/download">Video Downloader Page</Link>

        </nav>
    )
}
