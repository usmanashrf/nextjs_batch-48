// import userContext from "@/context/userContext";
// import React, { useContext } from "react";

// export default function SubCHild() {
//   const state: any = useContext(userContext);
//   console.log(state);
//   return (
//     <div className=" bg-gray-950 text-white">
//       Subchild {state.username}
//       <button
//         className="border p-2 block"
//         onClick={() => state.setUsername("John")}
//       >
//         Set username
//       </button>
//       <button
//         className="border p-2 block"
//         onClick={() => state.setCounter(state.counter + 1)}
//       >
//         Increment Counter
//       </button>
//     </div>
//   );
// }

import { add } from "@/store/counterReducer/counterReducer";
import React from "react";
import { useDispatch } from "react-redux";

export default function SubCHild() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(add(2))}>Increment Counter</button>
    </div>
  );
}
