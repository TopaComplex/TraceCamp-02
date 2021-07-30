import MakeCard from './MakeCard.js';
import {useState, useStates} from 'react';

function MakePanel(parts){
    return <div>
        <h3 className='panelText'>{parts.text}</h3>
        <div className='panel'>
            <img src={parts.imageA} alt="" className='panelPic' />
            <img src={parts.imageB} alt="" className='panelPic' />
            <img src={parts.imageC} alt="" className='panelPic' />
        </div>
    </div>
}

{const [modalIsOpen, setModalState] = useState(false);}

export default MakePanel;