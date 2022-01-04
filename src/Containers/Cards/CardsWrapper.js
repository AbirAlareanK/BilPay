import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { UseCards } from '../../Utils/Context/CardsProvider';
import AdminCard from "../../Components/UIs/AdminCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const CardsWrapper = () => {

  const { Cards } =  UseCards();

    return (
        <Carousel responsive={responsive}
                  arrows={false}
                  infinite={true}
                  partialVisible={false}>
                {Cards.map(card => {
                    return (<AdminCard  key={card['card-id']}  cardNum={card["card-number"]}
                                        balance={card["card-balance"]}
                                        validation={card["card-validation"]}
                                        color={card['card-color']}/>)     
                })}
           
        </Carousel>
    )
}


export default CardsWrapper;