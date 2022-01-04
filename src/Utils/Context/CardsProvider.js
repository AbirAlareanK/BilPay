import { createContext, useContext , useMemo, useState } from "react";
import CardsData from '../../Assets/JSON/Cards/cards-data.json';
import CardsCols from '../../Assets/JSON/Cards/cards-col-table.json';
import greenBg from '../../Assets/CardsBg/bg-green.svg';
import yellowBg from '../../Assets/CardsBg/bg-yellow.svg';
import redBg from '../../Assets/CardsBg/bg-red.svg';
import blueBg from '../../Assets/CardsBg/bg-blue.svg';
import CardNumber from "../../Components/UIs/CardNumber";

export const CardsContext =  createContext();
export const UseCards = () => useContext(CardsContext) ;

const CardsProvider = (props) => {
    const [ Cards , setCards ] = useState(CardsData);

    const CardsTableRows = useMemo(()=>{
        const img = (src) => { 
            switch(src) {
                case 'greenBg' : return <img alt="cardbg" src={greenBg} /> ;
                case 'blueBg' : return <img alt="cardbg" src={blueBg} />;
                case 'redBg' : return <img alt="cardbg" src={redBg} /> ;
                case 'yellowBg' : return <img alt="cardbg" src={yellowBg} />; 
                default : return;
            }
        }
        const cardNumber = (str) => { return <CardNumber str={str} />}
        return Cards.map(card => (
            {
                id : card['card-id'],
                card : img(card['card-color']) ,
                cardType : card['card-type'],
                bank: card['card-bank'],
                cardNumber : cardNumber(card['card-number']),
                nameinCard : card['namein-card'],
                detailsPage : "..."
             } 
         ))
    },[Cards]) 
     
    const CardsTableCols = CardsCols;

    const card_number = Cards.length + 1
    const zeroFilled =  ('00' + card_number)
    const CalculateCardId =  `CARD_${zeroFilled}`

    
    const AddNewCard = (card) => {
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