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
      <MakePanel panelText='About Me' 
        cardPicA= {queenie} 
        cardTextA='Drawing'
        cardInfoA='I try to draw every once in a while, though I still need to go a long way. This is my roomates dog, Queenie'
        cardPicB= {books}
        cardTextB='Reading'
        cardInfoB='Reading allows us to explore a whole different world! One of my favorite book series is The Stormlight Archives by Brandon Sanderson'
        cardPicC= {anime}
        cardTextC='Anime'
        cardInfoC='Putting this down fills me with disgust, but I had to find something for a third interest.'
        />
      <MakePanel panelText='Technical Support'
        cardPicA= {sam}
        cardInfoA='Current Base of Operations is Seattle!'
        cardTextA='Sam McDade'
        cardPicB= {winter}
        cardInfoB='Current Base of Operations is Myrtle Beach'
        cardTextB='Winter Widdifield'
        cardPicC= {patches}
        cardInfoC= 'Patches is sort of dead, so hopefully his Base of Operations is Doggy Heaven'
        cardTextC= 'Patches McDade'
        />
  </div>
}

export default App; //this is just a function that returns jsx code
// Remember that since this is still js, don't do class but className