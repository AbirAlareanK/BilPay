import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Cards from '../../Assets/JSON/cards-data.json';
import AdminCard from "../../Components/UIs/AdminCard";
import Classes from './CardsWrapper.module.scss';

const CardsWrapper = () => {

    return (
        <Carousel 
                className={Classes.carouselCards}
                emulateTouch={true}
                centerMode={true}
                showThumbs={false}
                centerSlidePercentage={27}
                showArrows={false}
                showStatus={false}
                showIndicators={false}>
                {Cards.map(card => {
                    return (<AdminCard key={card['card-id']}  cardNum={card["card-number"]}
                                                balance={card["card-balance"]}
                                                validation={card["card-validation"]}
                                                color={card['card-color']}/>)     
                })}
           
        </Carousel>
    )
}


export default CardsWrapper;