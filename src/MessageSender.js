import { Avatar } from "@material-ui/core";
import {
  VideocamOutlined,
  PhotoLibraryOutlined,
  InsertEmoticonOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Some clever db stuff
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${user.displayName} ?`}
            className="messageSender__input"
          />
          <input
            placeholder="Image URL (Optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamOutlined style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryOutlined style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonOutlined style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
