import { createContext, useContext , useState } from "react";
import CardsData from '../../Assets/JSON/cards-data.json';
import CardsCols from '../../Assets/JSON/cards-col-table.json';
import CardBgGreen from '../../Assets/CardsBg/bg-green.svg';

export const CardsContext =  createContext();
export const UseCards = () => useContext(CardsContext) ;

const CardsProvider = (props) => {
    const [Cards ] = useState(CardsData);

    const img = <img alt="cardbg" src={CardBgGreen} />
    const CardsTableRows = Cards.map(card => (
        {
            id : card['card-id'],
            card : img ,
            cardType : card['card-type'],
            bank: card['card-bank'],
            cardNumber : card['card-number'],
            nameinCard : card['namein-card'],
            detailsPage : "..."
         } 
     ))
     
    console.log(CardBgGreen)
    const CardsTableCols = CardsCols ;

    return(
        <CardsContext.Provider value = {{
                Cards,
                CardsTableRows,
                CardsTableCols
            }}>
           {props.children}
        </CardsContext.Provider>
    );
}



export default CardsProvider;