import { useState, useCallback, useEffect, useRef } from "react"



function App() {

  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordref = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberallowed) str += "123456789"
    if (charallowed) str += "!@#$%^&*-_+=[]{}`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numberallowed, charallowed, setpassword])

  useEffect(() => {
    passwordgenerator();

  }, [length, numberallowed, charallowed, passwordgenerator])

  const copytoclipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password]
  )



  return (
    <>
      <div className="w-full  max-w-md mx-auto shadow-md text-orange-500 px-4 py-1 my-8 bg-gray-700 rounded-lg ">

        <h1 className="text-cyan-300 text-2xl text-center font-bold ">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden my-3">

          <input
            type="text"
            value={password}
            className="bg-white outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordref} />

          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copytoclipboard}>
            copy
          </button>

        </div>
        <div className="flex text-sm my-4 mb-1.5 flex-wrap  gap-x-2">
          <div className="flex  gap-x-1">

            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setlength(e.target.value) }} />


            <label >
              Length: {length}
            </label>

          </div>
          <div className="flex  gap-x-1">

            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />

            <label htmlFor="numberInput">
              Numbers
            </label>

          </div>
          <div className="flex gap-x-1">

            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                setcharallowed((prev) => !prev)
              }} />

            <label htmlFor="characterInput">
              Characters
            </label>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
