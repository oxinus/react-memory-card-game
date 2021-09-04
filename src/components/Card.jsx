import jsBadge from '../assets/images/js-badge.svg'


const Card = ({card, onClick}) => {

        return (

            // if isFlipped is true give flip style to this
            <div className={`img-container ${card.isFlipped  ? 'flipped' : '' }`}
                onClick={onClick} style={{order : card.order}}>
                <img className='front-face' src={card.image} alt={card.name}/>
                <img className='back-face' src={jsBadge} alt='js-badge' />
            </div>
        )
}

export default Card
