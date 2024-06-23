import React from 'react'

const page = ({params}) => {

  return (
    <div>
        <h1>This is {params.productID} page </h1>
    </div>
  )
}

export default page