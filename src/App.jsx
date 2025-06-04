
import './App.css'

function App() {
  

  return (
    <>
      <nav class ="bg-pink-200 w-full">
        <div class = "flex flex-wrap items-center justify-between p-4">
          <a class = "items-center text-4xl self-center ">Portfolio</a>
          
          <div  id = "navbar-default">
            <ul class = "flex text-3xl p-0 mt-4 bg-pink-200   flex-row space-x-8 space-x-reverse mt-0 border-0 ">
              <li>
                <a href="#" class ="bg-transparent md:text-blue-700 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class ="bg-transparent md:text-blue-700 p-4">About</a>
              </li>
              <li>
                <a href="#" class ="bg-transparent md:text-blue-700 p-4">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
