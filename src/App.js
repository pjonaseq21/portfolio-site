import logo from './assets/pc.png';
import './App.css';
import animation from './animate'
import github from './assets/github.png'
function App() {
 animation()


  return (
       <>
       <div id='div' className=" main bg-[url('./assets/pc.png')]  h-screen bg-cover bg-center">
       <span id='text' className='text absolute top-1/4 left-1/3 transform -translate-x-1/4 -translate-y-1/2 text-[4rem] text-[#22c55e]'>React</span>
      <img id='github' className='w-[120px] absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-white opacity-0' src={github}></img>
       </div>
       </>
     
  )
}

export default App;
