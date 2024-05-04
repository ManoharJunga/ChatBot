import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    window.location.href = "https://medicalchatbot1.streamlit.app/";
  }, []);

  return null; // Return null as there is no content to render in this component
};

export default Chat;
