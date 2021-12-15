import React , {  useState} from 'react';
import { Col , Row } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import Classes from './DataTable.module.scss';
import { useNavigate } from 'react-router-dom';

const DataTable = (props) => {

    const navigate = useNavigate();
    // console.log(navigate());

    const { clickable , rows , cols , paging , sortable  , label , infoLabel} = props
 
    
    const ShowDetailPage = (id)=> {
        if(!clickable){
            return;
        }
        console.log('itemPresses' + id )
        navigate('/invoice-details' , {replace : true})
    }

    const [datatable ] = useState({
        columns : cols,
        rows : rows.map(row => ({
              ...row,
              clickEvent:(row)=>{
                ShowDetailPage(row["id"]);
              }
            }))
      });

    return (
        <Row>
            <Col lg={12} >
            <div className={`${Classes.tableCard} card-wrapper`}>
            {props.children}
            <MDBDataTable
                className={Classes.tableData} 
                responsiveMd
                btn={true}
                borderless={true}
                hover={true}
                sortable={sortable}
                searching={false}
                data={datatable}
                paging={paging}
                paginationLabel={label}
                displayEntries={false}
                pagesAmount={3}
                entries={5}
                infoLabel={infoLabel}
            />
            </div>
        </Col>
        </Row>
        
    )
}

export default DataTable;