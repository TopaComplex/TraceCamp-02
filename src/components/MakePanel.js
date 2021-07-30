import MakeCard from './MakeCard.js';

function MakePanel(parts){
    return <div>
        <h3 className='panelText'>{parts.panelText}</h3>
        <div className='panel'>
                <MakeCard cardText={parts.cardTextA}
                        cardPic={parts.cardPicA}
                        cardInfo={parts.cardInfoA}
                        />
                <MakeCard cardText={parts.cardTextB}
                        cardPic={parts.cardPicB}
                        cardInfo={parts.cardInfoB}
                        />
                <MakeCard cardText={parts.cardTextC}
                        cardPic={parts.cardPicC}
                        cardInfo={parts.cardInfoC}
                        />
        </div>
    </div>
}


export default MakePanel;