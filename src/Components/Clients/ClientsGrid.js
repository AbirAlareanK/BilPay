import ClientCard from "../UIs/ClientCard";
import { Col } from 'react-bootstrap'

const ClientsGrid = ({clients }) => {
    return (
        <>
           {clients.map((client , i) => (
               <Col key={i} md={4} >
                   <ClientCard  client={client}/>
                </Col>
           ))}
        </>
    );
};

export default ClientsGrid;