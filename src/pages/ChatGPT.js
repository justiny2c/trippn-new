import React , {useState} from 'react';
import axios from "axios";
import './ChatGPT.css'


const ChatGPT = () => {
    const[prompt, setPrompt] = useState(""); //prompt is your input, setPrompt is when you're sending to the API
    const[response, setResponse] = useState("");

    const HTTP="http://localhost:8020/chat"

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${HTTP}`, {prompt})
          .then(res=>setResponse(res.data))
          .catch((error) => {
            console.log(error)
        })
    }
    
    const handlePrompt = (e) => setPrompt(e.target.value)

    return (
        <div className="chatpage container-sm p-1">
            <h1 className='title text-center text-darkGreen'>ChatGPT</h1>
            <form className='form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor="">Ask Questions</label>
                <input 
                  className="shadow-sm" 
                  type="text" 
                  placeholder="Enter text" 
                  value={prompt}
                  onChange={handlePrompt}
                />
              </div>
            </form>
            <div className='bg-darkGreen mt-2 p-1 border-5'>
              <p className='text-light'>
                {response ? response : "Ask me anything..."}
              </p>
            </div>
        </div>
    )
}

export default ChatGPT


