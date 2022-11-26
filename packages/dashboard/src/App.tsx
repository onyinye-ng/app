import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Welcome } from "./pages"

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<Welcome />}
          />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
