import { lazy, Suspense } from 'react'
const Register = lazy(() => import('./pages/Register'))
const Rfi = lazy(() => import('./pages/Rfi'))

const Loading = () => <div>Loading...</div>

function App() {
  
  return (
    <div className="container">
      <h1>CRUD app for testing REST API</h1>
      <br/>
      <Suspense fallback={<Loading/>}>
        <Register/>
        <Rfi/>
      </Suspense>
    </div>
  )
}

export default App;
