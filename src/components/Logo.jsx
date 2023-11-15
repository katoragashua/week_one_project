import React from 'react'

const Logo = ({img, type}) => {
  return (
    <div><img src={img} alt={`${type} logo`} /></div>
  )
}

export default Logo