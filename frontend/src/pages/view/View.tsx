import React from "react"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom";
import CharacterRegistrationForm from "../../components/CharacterRegistrationForm

export const View = () => {
    return (
        <>
          <Header />
          <div>
              <h1>VIEW</h1>
              <CharacterRegistrationForm />
          </div>
        </>
    )
}