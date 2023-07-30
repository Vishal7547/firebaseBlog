import React, { useState } from "react";
import { useAuth } from "../context/authContext";

const Comment = () => {
  const { value, handleComment, comment } = useAuth();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    handleComment(newComment);
    setComments([newComment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
