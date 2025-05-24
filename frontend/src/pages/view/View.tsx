import Header from "../../components/Header"
import CharacterRegistrationForm from "../../components/CharacterRegistrationForm"
import Diagram from "../../components/diagram"

export const View = () => {
    return (
        <>
          <Header />
          <div>
              <h1>VIEW</h1>
              <CharacterRegistrationForm />
              <Diagram />
          </div>
        </>
    )
}