import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

function ApproverPage(props) {
    const location = useLocation()
    const navigate = useNavigate()

    const [pendingNewsletters, setPendingNewsletter] = useState([])


    useEffect(() => {
        const approverId = location.state.userName
        // const url = "http://localhost:8080/reviewer/pending/" + approverId

        // axios
        //     .get(url)
        //     .then((response) => {
        //         console.log("Approver response =", response.data)
        //         setPendingNewsletter(response.data)
        //     })

        setPendingNewsletter([
            {
                "newsletterId": 909199,
                "status": 0,
                "content": "{\"version\":\"5.2.4\",\"objects\":[{\"type\":\"i-text\",\"version\":\"5.2.4\",\"originX\":\"left\",\"originY\":\"top\",\"left\":100,\"top\":100,\"width\":86.73,\"height\":22.6,\"fill\":\"rgb(0,0,0)\",\"stroke\":null,\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeUniform\":false,\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"skewX\":0,\"skewY\":0,\"fontFamily\":\"sans-serif\",\"fontWeight\":\"normal\",\"fontSize\":20,\"text\":\"testing 12\",\"underline\":false,\"overline\":false,\"linethrough\":false,\"textAlign\":\"left\",\"fontStyle\":\"normal\",\"lineHeight\":1.16,\"textBackgroundColor\":\"\",\"charSpacing\":0,\"styles\":[],\"direction\":\"ltr\",\"path\":null,\"pathStartOffset\":0,\"pathSide\":\"left\",\"pathAlign\":\"baseline\"}],\"background\":\"white\"}",
                "tag": "leap",
                "reviewerId": 4525441,
                "approverId": 123,
                "logs": [],
                "remarks": []
            }
        ])
    }, [])

    function handleReviewClick(newsletter) {
        navigate("/approver/review", { state: { newsletter: newsletter, userName: location.state.userName } });
    }

    return (
        <div>
            {pendingNewsletters.map((nl) => (
                <div>
                    <button onClick={() => handleReviewClick(nl)}>Review Newsletter {nl.newsletterId}</button>
                </div>
            ))}
        </div>
    )
}

export default ApproverPage;
