// import React, { useState, useEffect } from 'react';
// import { Title } from '../styling/NameStyled.jsx';

// import axios from 'axios';

// const Name = () => {
//   const [title, setTitle] = useState('');

//   useEffect(async () => {
//     try {
//       const metaRes = await axios.get(`/api/product${window.location.pathname}`);

//       metaRes.data.message
//         ? await setTitle('')
//         : await setTitle(metaRes.data.name);
//     } catch (err) {
//       console.error(err)
//     }
//   }, [])

//   return (
//     <Title>{title}</Title>
//   )
// }

// export default Name;