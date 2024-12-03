import { useState } from 'react'


function App() {
  const [color, setColor] = useState("beige")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
          <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl text-white'>
              <button 
              onClick={() => setColor("Red")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor: "Red"}}>
                Red
              </button>

              <button
              onClick={() => setColor("orange")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor: "orange"}}>
                Orange
              </button>

              <button
              onClick={() => setColor("Yellow")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl text-black' style={{backgroundColor: "Yellow"}}>
                Yellow
              </button>

              <button 
              onClick={() => setColor("Green")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor: "Green"}}>
                Green
              </button>

              <button
              onClick={() => setColor("Indigo")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor: "Indigo"}}>
                Indigo
              </button>

              <button
              onClick={() => setColor("violet")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor: "violet"}}>
                violet
              </button>

              <button 
              onClick={() => setColor("olive")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor: "olive"}}>
                Olive
              </button>

              <button
              onClick={() => setColor("Teal")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor: "Teal"}}>
                Teal
              </button>

              <button
              onClick={() => setColor("Black")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl text-white' style={{backgroundColor: "Black"}}>
                Black
              </button>

              <button 
              onClick={() => setColor("Magenta")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor: "Magenta"}}>
                Magenta
              </button>

              <button
              onClick={() => setColor("Brown")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor: "Brown"}}>
                Brown
              </button>

              <button
              onClick={() => setColor("Lavender")}
              className='outline-none px-4 py-1 rounded-full shadow-2xl text-black' style={{backgroundColor: "Lavender"}}>
                Lavender
              </button>
            </div>
          </div>

      </div>
    </>
  )
}

export default App
