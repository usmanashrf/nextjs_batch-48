
export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    // headers:{
    //     Authorization:`Bearer 511f633bf09d9b215b26c1b6d5dcbb38169041b84fa458ae24f6ead71e07676b`
    // },
    // body: JSON.stringify( {
    //     "bookId": 3,
    //     "customerName": "John"
    //   })
        });

const data = await response.json()

console.log("Here is the reponse from api",data);
  return (
    <div>
        <div>Here is your Order Id </div>
        <div>{data.id}</div>
    </div>
  )
}
