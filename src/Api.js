// // https://jsonplaceholder.typicode.com/users

// import React, { useState, useEffect } from "react"
// import axios from 'axios'

// const Api = () => {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     // loadUser()
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(res => setData(res.data))
//       .catch(err => console.log(err))
//   }, [])

//   const loadUser = async () => {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     setData(res.data)
//   }

//   return (
//     <>
//       <div>
//         {data.map((user) => {
//           console.log({ user })
//           const { email, name, username, phone } = user
//           return (
//             <div>
//               <h1>{email}</h1>
//               <h1>{name}</h1>
//               <h1>{username}</h1>
//               <h1>{phone}</h1>
//               <img src="https://via.placeholder.com/150/771796" />
//               <br />
//               <br />
//               <br />
//               <br />
//               <hr />
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Api
