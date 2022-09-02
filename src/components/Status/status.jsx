import React, { useEffect, useState } from "react";

import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from '@backyard/react'
import { Button } from '@backyard/react'
import { Link } from '@backyard/react'
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";


export default function Status(props) {
    const [newsletterDetails, setNewsletterDetails] = useState([])

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        let url = "http://localhost:8080/designer/pending/" + location.state.userName
        console.log("status page location=", location.state)
        console.log("status page props=", props)

        let token = localStorage.getItem("token")
    
        const config = {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json' 
          }
        };
        
        axios
            .get(url, config)
            .then((response) => {
                setNewsletterDetails(response.data)
                console.log("pending nl =", response.data)
            })
    }, [])

    function handleEdit(newsletterId, status) {
        let token = localStorage.getItem("token")

        console.log("status page token =", token)

        let url = "http://localhost:8080/newsletter/" + newsletterId

        const config = {
          headers: { 
            Authorization: `Bearer ${token}`
          }
        };
    
        axios
            .get(url, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Access-Control-Allow-Origin" : "*",
                    "Content-type": "Application/json"
                }
            })
            .then((response) => {
                console.log("res ==", response.data)
                let content = response.data.content
                let reviewerId = response.data.reviewerId
                let approverId = response.data.approverId
                navigate("/designer/authoritydetails/design", { state: {userName: location.state.userName, jsonContent: content, newsletterId: newsletterId, status: status, reviewerId: reviewerId, approverId: approverId} });
            })
    }

    return (
        <div className="statuspage">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Tag Name </TableHeader>
                        <TableHeader width={15}> NewsLetter Id</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Edit</TableHeader>
                        <TableHeader>Reviews</TableHeader>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        newsletterDetails.map((nl) => (
                            <TableRow>
                                <TableCell> {nl.tag} </TableCell>
                                <TableCell> {nl.newsletterId} </TableCell>
                                <TableCell> {nl.status} </TableCell>
                                <TableCell><Button color="green" variant="tertiary" onClick={() => handleEdit(nl.newsletterId, nl.status)}>Edit</Button> </TableCell>
                                <TableCell>
                                    <Link
                                        onClick={() => alert('Clicked!')}
                                        bold
                                        underline="hover"
                                    > Check Review
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}
