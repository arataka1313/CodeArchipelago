import Header from "../../components/Header"
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/view");
  }
    return (
        <>
            <Header />
            <button onClick={handleView}>View画面へ</button>
        </>
    )
}