import { useState, useEffect } from "react";
import NewsLetter from "../Newsletter/Newsletter";

function ReaderFeed() {
    const urlList = ["http://localhost:8080/v1/events/lionjson/", "http://localhost:8080/v1/events/shinchanjson/",]

    const [newsletterList, setNewsletterList] = useState([])

    return (
        <div>
            {urlList.map((url, idx) => <NewsLetter key={idx} url={url} id={"canvas" + idx}/>)}
        </div>
    )
}

export default ReaderFeed;