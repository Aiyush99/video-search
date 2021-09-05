import React from 'react'
import Navbar from "../Components/Navbar"

export default function DownloadPage() {
    return (
        <>
        <Navbar/>
        <div>
            <h1 style={{textAlign:"center"}}>Welcome To Video Downloader</h1>

            <input type="text" placeholder="Enter Video URL"/>
        </div>
        </>
    )
}
