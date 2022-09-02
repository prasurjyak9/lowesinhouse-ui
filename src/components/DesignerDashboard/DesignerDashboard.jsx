import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import './DesignerDashboard.css'
import { Tile, Grid, Typography } from '@backyard/react'
//import Footer from '../Footer/Footer'

function DesignerDashboard(props) {
    const location = useLocation()
    console.log("dd location =", location.state)
    console.log("dd token =", localStorage.getItem("token"))

    const [empId, setEmpId] = useState('')

    useEffect(() => {
        setEmpId(location.state.userName)
    })

    return (
        <>
            <div className='mainreview' >

                <Link to={"authoritydetails"} state={{ role: "designer", userName: location.state.userName, nlStatus: "0" }}>
                    <div className="col">

                        <Tile
                            data-testid="Reviewdiv"
                            variant="link" shape="rounded"
                            color="surface">

                            <Grid.Container className="container">
                                <Grid.Row className="content">
                                    <Grid.Column>
                                        <Typography
                                            variant="h4"

                                            marginBottom="s4"
                                            align="center">
                                            <span className="in-content">  Create Newsletters</span>

                                        </Typography>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Typography
                                            variant="body_small"
                                            marginBottom="s4"
                                            align="center">
                                            Create New Newsletters here using Drag and Drop..
                                </Typography>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Container>
                        </Tile>
                    </div>
                </Link>
                <br />

                <Link to={"status"} state={{ role: "designer", userName: location.state.userName, someProp: "hello" }}>
                    <div className='col'>
                        <Tile
                            variant="link"
                            className="link-tile"
                            color="surface"
                            state="hover">

                            <Grid.Container className="container">
                                <Grid.Row className="content">
                                    <Grid.Column>
                                        <Typography
                                            variant="h4"
                                            marginBottom="s4"
                                            align="center">
                                            <span className="in-content">Check Newsletter's Status</span>
                                        </Typography>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Typography
                                            variant="body_small"
                                            marginBottom="s4"
                                            align="center">
                                            Check The Status of your Newsletters here....
                                </Typography>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Container>
                        </Tile>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default DesignerDashboard;
