import React from 'react'

// must be called props
const Welcome = ({name, age}) => {
  return (
    <div>
      Hi, {name}. You are age {age}
    </div>
  )
}

export default Welcome
