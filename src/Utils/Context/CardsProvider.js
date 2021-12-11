import { createContext, useContext , useMemo, useState } from "react";
import CardsData from '../../Assets/JSON/cards-data.json';
import CardsCols from '../../Assets/JSON/cards-col-table.json';
import CardBgGreen from '../../Assets/CardsBg/bg-green.svg';

export const CardsContext =  createContext();
export const UseCards = () => useContext(CardsContext) ;

const CardsProvider = (props) => {
    const [ Cards , setCards ] = useState(CardsData);
    console.log('Card state has changed !');

    const CardsTableRows = useMemo(()=>{
        const img = <img alt="cardbg" src={CardBgGreen} />
        return Cards.map(card => (
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
    },[Cards]) 
     
    const CardsTableCols = CardsCols ;

    const card_number = Cards.length + 1
    const zeroFilled =  ('00' + card_number)
    const CalculateCardId =  `CARD_${zeroFilled}`

    
    const AddNewCard = (card) => {
        // console.log(card)
        // console.log(card['cardNumber'])
        setCards([
            ...Cards,
            {
            ...card,
            "card-id" : CalculateCardId,
            "card-type" : 'Secondary',
            "card-color" : "redBg"
            }
        ])
    }

    return(
        <CardsContext.Provider value = {{
                Cards,
                CardsTableRows,
                CardsTableCols,
                AddNewCard
            }}>
           {props.children}
        </CardsContext.Provider>
    );
}



export default CardsProvider;