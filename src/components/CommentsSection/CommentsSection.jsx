import { useState, useEffect } from "react";

function CommentsSection() {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setComments(["first comment", "second comment", "third comment"])
    }, [])

    function handleCommentInput(e) {
        setNewComment(e.target.value)
        setInputValue(e.target.value)
    }

    function handleAddComment(e) {
        setComments([...comments, newComment])
        setInputValue('')
    }

    return (
        <div>
            <div className="previous-comments">
                {comments.map((cmt, idx) => <p>{cmt}</p>)}
            </div>
            <div className="add-comment">
                <input type="text" onChange={handleCommentInput} value={inputValue}></input>
                <button onClick={handleAddComment}>Add Comment</button>
            </div>
        </div>
    )
}

export default CommentsSection;
