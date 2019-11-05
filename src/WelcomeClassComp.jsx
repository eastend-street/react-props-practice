import React from 'react'

class WelcomeClassComp extends React.Component {
  render() {
    // destructure in render
    const {name, age} = this.props
    return (
      <div>
        Ola, {name}. You are age {age}
      </div>
    )
  }
}

export default WelcomeClassComp
