import { Link } from "react-router-dom";
import './ReviewerLandingPage.css'
import { Tile, Grid, Typography } from '@backyard/react'
import Footer from '../Footer/Footer'
import React from 'react'
export default function ReviewerLandingPage() {
    return (
        <>
        <div className='mainreview' >
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
                                    marginBottom="s4">
                                    Check The Status of your Newsletters here..
                                </Typography>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Container>
                </Tile>
            </div>

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
                                    marginBottom="s4">
                                    <span className="in-content">Check Newsletter's Status</span>
                            </Typography>
                            </Grid.Column>
                            <Grid.Column>
                                <Typography
                                    variant="body_small"
                                    marginBottom="s4">
                                    Check The Status of your Newsletters here....
                                </Typography>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Container>
                </Tile>
            </div>
            
        </div>
        <Footer/>
        </>
    )
};