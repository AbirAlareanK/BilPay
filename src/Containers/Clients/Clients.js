import ClientsGrid from '../../Components/Clients/ClientsGrid';
import ClientsList from '../../Components/Clients/ClientsList';
import Classes from './Clients.module.scss';
import ClientsData from '../../Assets/JSON/clients-data.json';
import { useState } from 'react';
import Pagination from '../../Components/UIs/Pagination';


const Clients = ({display}) => {
    const [ clients , setClients ] = useState(ClientsData.slice(0,6));

    const ChangeDisplayNumbersHandler = (i) => {

        if(i === 1){
            setClients(ClientsData.slice(0,6));
        }else{
            const num = (i*6)
            if(num >= ClientsData.length){
                const ind1 = ((i-1)*6);
                setClients(ClientsData.slice(ind1));
            }else{
                const ind1 = ((i-1)*6);
                setClients(ClientsData.slice(ind1 , num))
            }
        }
    }
    return (
        <>
            {display === 'grid' ? <ClientsGrid clients={clients}/> : <ClientsList clients={clients}/>}
            <div className={Classes.paginationFooter}>
                <div>
                    <p>Showing 06 of {ClientsData.length}</p>
                </div>
                <Pagination ChangeDisplayNumbers={ChangeDisplayNumbersHandler} clients={ClientsData}/>
            </div>
        </>
    );
};

export default Clients;