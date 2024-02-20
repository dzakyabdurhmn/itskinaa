import React from 'react'

const border = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="bodyborder">
        <p>{children}</p>
      </div>
    </div>
  )
}

export default border
