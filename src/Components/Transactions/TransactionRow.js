import { useCallback } from 'react';
import Classes from './TransactionRow.module.scss';
import arrowDn from '../../Assets/Icons/arrow-dn-w.svg';
import arrowUp from '../../Assets/Icons/arrow-up-w.svg';

const TransactionRow = (props) => {
    const {name , amount, date, transaction, status} = props;

    const Class = useCallback(()=>{
        if(status === 'Completed'){
            return "greenbackg";
        }
        if(status === 'Pending'){
            return "yellowbackg";
        }
        if(status === 'Canceled'){
            return "redbackg";
        }
    },[status])
    

    return (
        <tr className={Classes.TransactionRow}>
            <td>
                {transaction === 'in' ? 
                    <img className="greenbackg" alt="income" src={arrowUp} />  :
                    <img className="redbackg" alt="outcome" src={arrowDn} />  
                }
            </td>
            <td><p>{name}</p></td>
            <td><p>{date}</p></td>
            <td>
                {
                    transaction === 'in' ?
                    <p> -{amount}</p> :
                    <p> +{amount}</p>
                }
            </td>
            <td> <p className={Class()}>{status}</p></td>
        </tr>
    );
};

export default TransactionRow;