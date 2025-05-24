import CharacterRegistrationForm from "../../components/CharacterRegistrationForm"
import Diagram from "../../components/diagram"

export const View = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans antialiased">
              <header className="">
                <div className="w-full mx-auto flex items-center justify-evenly">
                  <h2>相関図</h2>
                  <nav>
                    <ul className="list-none">
                      <li><a href="/" className="no-underline text-white hover:text-gray-200 text-sm font-medium">ホーム</a></li>
                    </ul>
                  </nav>
                </div>
              </header>
          <div className="flex flex-1 max-w-screen-xl mx-auto w-full">
            <aside className="w-64 bg-white  p-6 flex-shrink-0">
              <div className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
                <CharacterRegistrationForm />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">相関図履歴</h3>
                {/* 相関図 */}
              </div>
            </aside>
            <main className="flex-1 p-6 bg-gray-100">
              <div className="w-full h-96 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-400 text-lg font-medium">
                <p>相関図をここに表示</p>
              </div>
            </main>
          </div>
        </div>
    )
}