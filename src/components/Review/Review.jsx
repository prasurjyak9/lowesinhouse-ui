import React, { useState, useEffect, useRef } from 'react';
import { fabric } from "fabric";
import axios from "axios";
// import 'svg2pdf.js'
import CommentsSection from '../CommentsSection/CommentsSection';
import { Grid, Tile, TextArea, TextField } from '@backyard/react';
import "./Review.css";
import NewsLetter from '../Newsletter/Newsletter';
import { useLocation, useNavigate } from 'react-router-dom';


function Review(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const newsletter = location.state.newsletter
    const nlId = location.state.newsletter.newsletterId
    const nlContent = location.state.newsletter.content

    const [review, setReview] = useState('')

    useEffect(() => {
        console.log("Inside review")
        console.log("Review loc =", location.state)
    }, []);

    function handleInputChange(e) {
        setReview(e.target.value)
    }

    function submitReview(e) {
        console.log("Submitting review")

        const postData = {
            "logId": 12,
            "reviewerId": newsletter.reviewerId,
            "reviews": review,
            "logNewsletterId": newsletter.newsletterId
        }

        let token = localStorage.getItem("token")

        const config = {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json' 
          }
        };
    
        axios.post("http://localhost:8080/logs", postData, config)
    }

    function reviewerApprove(e) {
        console.log("Reviewer approved")
        let token = localStorage.getItem("token")

        const config = {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json' 
          }
        };
    
        console.log("Reviewer approved... Doing put request")
        axios.put("http://localhost:8080/designer/newsletter", {
            "newsletterId": newsletter.newsletterId,
            "newsletterUserName": "4525440",
            "status": 2,
            "content": newsletter.content,
            "tag": "Leap",
            "reviewerId": newsletter.reviewerId,
            "approverId": newsletter.approverId
        }, config)
        .then((res) => {
            console.log("Response after put =", res.data)
        })

        navigate("/approver", {state: {userName: location.state.userName}})
    }

    return (
        <>
            <NewsLetter key={nlId} newsletterid={nlId} content={newsletter.content} id={"canvas" + nlId} comments="null" key={"canvas" + nlId} />
            <br></br>
            <TextField type="text" onChange={handleInputChange} width="100" height="100"></TextField>
            <br></br>
            <button style={{backgroundColor: "blue"}} onClick={submitReview}>Submit Review</button>
            <button style={{backgroundColor: "green"}} onClick={reviewerApprove}>Approve</button>
        </>
    )
}

export default Review;
