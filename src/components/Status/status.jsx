import React, { useEffect, useState } from "react";

import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from '@backyard/react'
import { Button } from '@backyard/react'
import { Link } from '@backyard/react'
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";


export default function Status() {
    const [newsletterDetails, setNewsletterDetails] = useState([])

    const navigate = useNavigate()
    const location = useLocation()

    // useEffect(() => {
    //     let url = "http://localhost:8080/pendingnewsletters"

    //     let token = localStorage.getItem("token")

    //     const config = {
    //       headers: { 
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json' 
    //       }
    //     };

    //     axios.get(url, config)
    //     }, [])

    useEffect(() => {
        let url = "http://localhost:8080/designer/pending/" + location.state.userName
        console.log("url =", url)

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

        let url = "http://localhost:8080/newsletter/1"

        // const config = {
        //   headers: { 
        //     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0NTI1NDQwIiwiZXhwIjoxNjYyMDE2MzU3LCJpYXQiOjE2NjE5ODAzNTd9.GKq6A-FqLFfsdgeHEik_bF2EncJhlRdFs6NMt7gmZL0`
        //   }
        // };
    
        axios
            .get(url)
            .then((response) => {
                console.log("res ==", response.data)
                let content = response.data.content
                navigate("/designer/authoritydetails/design", { state: { jsonContent: content, newsletterId: newsletterId, status: status} });
            })
    }

    return (
        <div className="statuspage">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Tag_Name </TableHeader>
                        <TableHeader width={15}> NewsLetter_Id</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Edit Button</TableHeader>
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
