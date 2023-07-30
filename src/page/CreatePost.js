import React, { useState } from "react";
import { useAuth } from "../context/authContext";
const CreatePost = () => {
  const { handleCreate } = useAuth();
  const [postDetails, setPostDetails] = useState({
    title: "",
    subtitle: "",
    image: "",
    video: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails({ ...postDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission (e.g., send data to server, etc.)
    console.log(postDetails);
    handleCreate(postDetails);
  };

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={postDetails.title}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          name="subtitle"
          placeholder="Subtitle"
          value={postDetails.subtitle}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={postDetails.image}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="video"
          placeholder="Video URL"
          value={postDetails.video}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
