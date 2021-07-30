import './index.css';
import SayHello from './components/SayHello';
import MakePanel from './components/MakePanel';
import sam from 'C:/Users/Pierce Carrouth/my-app/src/images/sam.jpg'
import winter from 'C:/Users/Pierce Carrouth/my-app/src/images/winter.jpg'
import patches from 'C:/Users/Pierce Carrouth/my-app/src/images/Patches.jpg'
import queenie from 'C:/Users/Pierce Carrouth/my-app/src/images/Queenie.jpg'
import anime from 'C:/Users/Pierce Carrouth/my-app/src/images/anime.jpg'
import books from 'C:/Users/Pierce Carrouth/my-app/src/images/books.jpg'


function App() {
  return <div>
    <h1 className='topBar'>Pierce Carrouth</h1>
    <div className='navBar'>
      <div className='navElement'>Who am I?</div>
      <div className='navElement'>About Me</div>
      <div className='navElement'>Technical Support</div>
    </div>
      <SayHello />
      <MakePanel text='About Me' 
        imageA= {queenie} 
        imageB= {books}
        imageC= {anime}
        />
      <MakePanel text='Technical Support'
        imageA= {sam}
        imageB= {winter}
        imageC= {patches}
        />
  </div>
}

export default App; //this is just a function that returns jsx code
// Remember that since this is still js, don't do class but className