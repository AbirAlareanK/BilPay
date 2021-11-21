import React , {  useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import Classes from './InvoicesTable.module.css';

const InvoicesTable = ({rows,cols}) => {
  
  const ShowDetailPage = (id)=> {
    console.log('itemPresses' + id )
  }

  const [datatable  ] = useState({
    columns : cols,
    rows : rows.map(row => ({
          ...row,
          clickEvent:(row)=>{
            ShowDetailPage(row["client"])
          }
        }))
  });

  return (
    <>
      <h5>Latest Invoives</h5>
      <MDBDataTable className={Classes.tableCard}
        responsiveMd
        hover={true}
        sortable={false}
        searching={false}
        data={datatable}
        paginationLabel={["<", ">"]}
        displayEntries={false}
        pagesAmount={3}
        entries={5}
        infoLabel={["Showing", "to", "of", ""]}
      />
    </>
    
  );
}


export default InvoicesTable ;