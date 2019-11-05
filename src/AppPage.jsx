import React from 'react'
import Welcome from './Welcome'
import WelcomeClassComp from './WelcomeClassComp'

const AppPage = () => {
  return (
    <>
      <Welcome name="Jun" age={21} />
      <WelcomeClassComp name="Derick" age={30} />
    </>
  )
}

export default AppPage
