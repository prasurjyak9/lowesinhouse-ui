import { useState, useEffect } from "react";

function CommentsSection(props) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        console.log("HELLO =", props.comments)

        localStorage.setItem('userName', 'prasurjya')
        // setComments([
        //     {user: "user1", comment: "first comment"}, 
        //     {user: "user2", comment: "second comment"}, 
        //     {user: "user3", comment: "third comment"}
        // ])
        setComments(props.comments)
        // console.log(props.comments)
    }, [])

    function handleCommentInput(e) {
        setNewComment(e.target.value)
        setInputValue(e.target.value)
    }

    function handleAddComment(e) {
        setComments([...comments, {remarkId: localStorage.getItem('userName'), remark: newComment}])
        setInputValue('')
    }

    return (
        <div>
            <div className="previous-comments">
                {comments.map((cmt, idx) => <p>{cmt.remarkId}: {cmt.remark}</p>)}
            </div>
            <div className="add-comment">
                <input type="text" onChange={handleCommentInput} value={inputValue}></input>
                <button onClick={handleAddComment}>Add Comment</button>
            </div>
        </div>
    )
}

export default CommentsSection;
