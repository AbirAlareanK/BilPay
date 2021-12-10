import { createContext, useContext , useState } from "react";
import CardsData from '../../Assets/JSON/cards-data.json';
import CardsCols from '../../Assets/JSON/cards-col-table.json';

export const CardsContext =  createContext();
export const UseCards = () => useContext(CardsContext) ;

const CardsProvider = (props) => {
    const [Cards ] = useState(CardsData);

    const CardsTableRows = Cards.map(card => (
        {
            id : card['card-id'],
            card : card['client'],
            cardType : card['card-type'],
            bank: card['card-bank'],
            cardNumber : card['card-number'],
            nameinCard : card['namein-card']
         } 
     ))
     
    console.log(CardsTableRows)
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