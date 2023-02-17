import React, { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  // const [backendData, setBackendData] = useState([])

  // useEffect(() => {
  //   fetch('/api').then(
  //     response => response.json().then(
  //       data => {
  //         setBackendData(data)
  //       }
  //     )
  //   )
  // }, [])

  return (
    <div>
      {/* {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => {
          <p key={i}>{user}</p>
        })
      )} */}
      <p>Users should appear here</p>
    </div>
  )
}

export default App
