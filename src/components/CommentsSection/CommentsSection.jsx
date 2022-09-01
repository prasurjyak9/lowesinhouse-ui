import React, { useState, useEffect } from "react";
import TextField from '@backyard/react/TextField';
import { Button, Grid, IconButton, Tile } from '@backyard/react';
import "./CommentsSection.css";
import axios from "axios";

function CommentsSection(props) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        console.log(props)

        // let url = "http://localhost:8080/"

        // axios
        //     .get(url)
        //     .then((response) => {
        //         console.log(response.data)
        //         setComments(response.data)
        //     })
        //     .catch((err) => {
        //         console.log("err =", err)
        //     })
        setComments(props.comments)
    }, []);

    function handleCommentInput(e) {
        setNewComment(e.target.value)
        setInputValue(e.target.value)
    }

    function handleAddComment(e) {
        setComments([...comments, { remarkId: 111, remark: newComment }])
        setInputValue('')

        let url = "http://localhost:8080/remarks"
        axios.post(url, {
            "remarkId": 113,
            "remark": newComment,
            "remarkNewsletterId": props.newsletterid
        })
    }

    return (
        <div className="mainCommentSection">
            
            <Grid.Container className="mainGrid">
                <Grid.Row>
                    <div className="previous-commentsbox">
                        {comments.map((cmt, idx) => <p key={cmt.remarkId}>{cmt.remark} <hr></hr></p>)}
                    </div>
                </Grid.Row>

                <div className="add-comment">
                    <Grid.Row>
                        <Grid.Column>
                            <TextField
                                label="Comments"
                                size="small"
                                state="default"
                                type="text" onChange={handleCommentInput} value={inputValue}>
                            </TextField>
                        </Grid.Column>
                        <Grid.Column>
                            <Button className="addCommentButton" onClick={handleAddComment}>Add Comment</Button>
                        </Grid.Column>
                    </Grid.Row>
                </div>
            </Grid.Container>

        </div>
    )
}

export default CommentsSection;
