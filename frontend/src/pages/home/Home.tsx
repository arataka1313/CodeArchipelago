import Header from "../../components/Header"
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/view");
  }
    return (
        <>
            <header className="">
                <div className="w-full mx-auto flex items-center justify-evenly">
                  <h2>ホーム</h2>
                  <nav>
                    <ul className="list-none">
                      <li><a href="/view" className="no-underline text-white hover:text-gray-200 text-sm font-medium">相関図</a></li>
                    </ul>
                  </nav>
                </div>
              </header>
            <button onClick={handleView}>View画面へ</button>
        </>
    )
}