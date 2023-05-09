import logo from './assets/pc.png';
import './App.css';
import animation from './animate'
function App() {
 animation()


  return (
       <>
       <div id='div' className=" main bg-[url('./assets/pc.png')]  h-screen bg-cover bg-center">
       <span id='text' className='text absolute top-1/4 left-1/3 transform -translate-x-1/4 -translate-y-1/2 text-[4rem] text-[#22c55e]'>React</span>
       </div>
       </>
     
  )
}

export default App;
