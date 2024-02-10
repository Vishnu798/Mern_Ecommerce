import {useState} from 'react';
import axios from 'axios';
function App() {
  const [text,setText] = useState("Initial Heading");
  const buttonClick = async()=>{
    try {
      const data = await axios.get('http://localhost:5000/get_data')
      
      console.log("data is  : ",data)
    } catch (error) {
      console.log("error is : ",error)
    }
   }
  return (
    <div >
      <button onClick={buttonClick}>getText</button>
      <h2>text</h2>
    </div>
  );
}

export default App;
