import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%&*?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)

    }

    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])

  return (
    <>
     <h1 className='text-4xl font-bold text-center text-white mt-8'>Password Generator</h1>
     <div className="w-full max-w-md mx-auto shadow-xl rounded-lg px-4 py-3 my-8 bg-indigo-200">
      <div className="flex shadow-2xl rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-3 px-3"
          placeholder="Password"
          readOnly
        />
      </div>
     </div>
    </>
  )
}

export default App
