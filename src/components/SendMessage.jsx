import React, { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { displayName, uid } = auth.currentUser;
    const colRef = collection(db, "messages");

    await addDoc(colRef, {
      text: newMessage,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setNewMessage("");
  };

  useEffect(() => {
    scroll.current.scrollIntoView();
  });

  return (
    <form className={style.form} onSubmit={sendMessage}>
      <input
        className={style.input}
        value={newMessage}
        type="text"
        placeholder="Message"
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button disabled={!newMessage} className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
