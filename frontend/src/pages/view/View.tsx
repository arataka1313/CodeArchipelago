import CharacterRegistrationForm from "../../components/CharacterRegistrationForm"
import Diagram from "../../components/Diagram"

export const View = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans antialiased">
              <header className="">
                <div className="w-full mx-auto flex items-center justify-evenly">
                  <h2>Mysteriagraph</h2>
                </div>
              </header>
          <div className="flex flex-1 max-w-6xl mx-auto w-full">
            <aside className="w-1/2 bg-white p-6 flex justify-center">
              <div className="mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
                <CharacterRegistrationForm />
              </div>
              {/* <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">相関図履歴</h3>
              </div> */}
            </aside>
            <main className="w-1/2 p-6 bg-gray-100 min-w-0">
              <div className="h-96 bg-white rounded-lg shadow-md flex items-center text-gray-400 text-lg font-medium">
                <Diagram />
              </div>
            </main>
          </div>
        </div>
    )
}