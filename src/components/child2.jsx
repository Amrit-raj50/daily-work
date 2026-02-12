// import Child3 from "./child1";

// function Child2(){
//     return(
//         <>
//           <Child3/>
//         </>
//     )
// }

// // Child1.defaultProps = {
// //   name:"Amrit"
// // };


// export default Child2;

import { useContext } from "react";
import UserContext from "../context/userContext";

function Child2(){
   const username = useContext(UserContext);

   return <h4>hello {username}</h4>
}

// Child1.defaultProps = {
//   name:"Amrit"
// };


export default Child2;