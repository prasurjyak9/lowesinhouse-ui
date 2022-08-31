import React, { useState, useEffect } from "react";
import NewsLetter from "../Newsletter/Newsletter";
import "./ReaderFeed.css"
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from 'react-router-dom';

function ReaderFeed() {
    const [newsFeed, setNewsFeed] = useState([])

    useEffect(() => {
        let url = "http://localhost:8080/"

        axios
            .get(url)
            .then(response => {
                console.log("res = ", response.data)
                setNewsFeed(response.data)
            })
    }, [])


    return (
        <div className="readersfeeddiv">
            <Link to={"login"} state={{ role: "designer" }}>
                Designer
            </Link>
            <Link to={"login"} state={{ role: "approver" }}>
                Approver
            </Link>
            {newsFeed.map((nl, idx) => <NewsLetter key={idx} content={nl.content} id={"canvas" + idx} comments={nl.remarks} key={"canvas" + idx} />)}
        </div>
    )
}

export default ReaderFeed;