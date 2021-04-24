import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
const Register = lazy(() => import('./pages/Register'))
const Rfi = lazy(() => import('./pages/Rfi'))
const Contractor = lazy(() => import('./pages/Contractor'))

const Loading = () => <div>Loading...</div>

function App() {
  
  return (
    <div className="container">
      <h1>CRUD app for testing REST API</h1>
      <br/>
      
      <BrowserRouter>
      <div className="d-flex">
        <div className="w-100"><Link to='/register'>Register</Link></div>
        <div className="w-100"><Link to='/rfi'>RFI</Link></div>
        <div className="w-100"><Link to='/contractor'>Contractor</Link></div>
      </div>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path='/register' component={Register}/>
          <Route path='/rfi' component={Rfi}/>
          <Route path='/contractor' component={Contractor}/>
        </Switch>
      </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App;
