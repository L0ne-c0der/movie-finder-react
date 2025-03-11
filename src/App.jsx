// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { Button } from "@/components/ui/button"
import MovieCard  from "./components/custom/MovieCard"
import NavButton from "./components/custom/NavButton"
import NavBar from "./components/custom/NavBar"
import Footer from "./components/custom/Footer"
import SortingButtons from "./components/custom/SortingButtons"
import CardGrid from "./components/custom/CardGrid"
import TopRatedMovies from "./pages/TopRatedMovies"

function App() {
  return (
    <>
    {/* <CardGrid movies = {[{name:"hello", year:"hi"},{name:"hello", year:"hi"} ]}></CardGrid> */}
    <TopRatedMovies></TopRatedMovies>
    </>
  )
}

export default App
