

function MakeCard(parts){
    return <div>
        <div className='card'>
            <h3 className='cardText'>{parts.cardText}</h3>
            <img src={parts.cardPic} alt="" className='cardPic'/>
            <h4 className='cardInfo'>{parts.cardInfo}</h4>
            <div className='cardBackground'></div>
        </div>
    </div>
}

export default MakeCard;