import { useEffect, useState } from 'react';
import Classes from './Pagination.module.scss';

const Pagination = ({clients , ChangeDisplayNumbers}) => {

    const [ displayPerPage , setDisplayPage ] = useState([]);
    const [ selectedItem , setSelected ] = useState(0);

    useEffect(()=>{
            const num = Math.ceil(clients.length / 6) ;
            const array = new Array(num).fill('') 
            setDisplayPage(array);
    },[clients.length])

    const ChangePageHandler = ( e , i) => {
        setSelected(i);
        ChangeDisplayNumbers(i+1)
    }
    return (
        <ul className={Classes.pagination}>
            <li className={selectedItem === 0 ? `${Classes.disabled} ${Classes.arrows} unselectable` : `${Classes.arrows} unselectable`}
                onClick={(e)=> ChangePageHandler(e,(selectedItem-1))}>
                <span aria-hidden="true">&#60;</span>
            </li>
            {displayPerPage.map((page , i) => (
                <li key={i}
                    onClick={(e)=> ChangePageHandler(e,i)}
                    className={selectedItem === i ? `${Classes.selected} unselectable` : 'unselectable'}
                >{i+1}</li>
            ))}
            <li className={selectedItem === (displayPerPage.length-1) ? `${Classes.disabled} ${Classes.arrows} unselectable` : `${Classes.arrows} unselectable`}
                onClick={(e)=> ChangePageHandler(e,(selectedItem+1))}>
                <span aria-hidden="true">&#62;</span>
            </li>
        </ul>

    );
};

export default Pagination;