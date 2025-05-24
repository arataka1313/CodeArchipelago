import React from "react"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom";

export const View = () => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("./");
  }
    return (
        <>
            <Header />
            <button onClick={handleView}>Home画面へ</button>
        </>
    )
}