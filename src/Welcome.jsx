import React from 'react'

// must be called props
const Welcome = ({name, age, children}) => {
  return (
    <div>
      Hi, {name}. You are age {age}
      {children}
    </div>
  )
}

export default Welcome
