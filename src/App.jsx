
import './App.css'
import { Header } from './Header'
import { Body } from './body/Body'


function App() {
 return <div id='app' className='bg-secondary min-h-screen'>
  <div className='container px-20 mx-auto relative' >
    <div className='h-5'></div>
    <Header />
    <Body />
  </div>
  </div>
}

export default App
