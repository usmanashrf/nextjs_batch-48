"use client";
import { useState, useEffect } from "react";

function Page() {
  const [count1, setCount1] = useState(5);
  const [count2, setCount2] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect( () => {
     getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = await data.json();
    console.log(response);
    setTodos(response);
  };

  function increment2() {
    setCount2(count2 + 1);
    // count = count + 1;
    // console.log(count);
  }
  return (
    <div>
      Main {count1}
      {/* <button onClick={}>Increment</button> */}
      <br />
      count {count2}
      <button onClick={increment2}>Increment 2</button>
    </div>
  );
}

export default Page;
