import React from 'react'

const DisplayUsers = (props) => {
  console.log(props);
  let {firstName, lastName, city, age} = props;

  return (
    <div className='list'>
      <h3>{firstName} {lastName}</h3>
      <p>{city}</p>
      <p>{age}</p>
    </div>
  )
}

export default DisplayUsers