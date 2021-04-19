import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const Register = lazy(() => import('./pages/Register'))
const Rfi = lazy(() => import('./pages/Rfi'))

const Loading = () => <div>Loading...</div>

function App() {
  
  return (
    <div className="container">
      <h1>CRUD app for testing REST API</h1>
      <br/>
      <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path='/register' component={Register}/>
          <Route path='/rfi' component={Rfi}/>
        </Switch>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App;
