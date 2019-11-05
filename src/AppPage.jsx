import React from 'react'
import Welcome from './Welcome'
import WelcomeClassComp from './WelcomeClassComp'

const AppPage = () => {
  return (
    <>
      <Welcome name="Jun" age={21}>
        This is the children props!
        <ul>
          <li>child2</li>
          <li>child3</li>
          <li>child4</li>
        </ul>
      </Welcome>
      <WelcomeClassComp name="Derick" age={30} />
    </>
  )
}

export default AppPage
