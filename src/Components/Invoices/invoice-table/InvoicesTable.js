import React , {  useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import Classes from './InvoicesTable.module.scss';

const InvoicesTable = ({rows,cols}) => {
  
  const ShowDetailPage = (id)=> {
    console.log('itemPresses' + id )
  }

  const [datatable  ] = useState({
    columns : cols,
    rows : rows.map(row => ({
          ...row,
          clickEvent:(row)=>{
            ShowDetailPage(row["id"])
          }
        }))
  });

  return (
    <div className={`${Classes.tableCard} card-wrapper`} >
      <section className={Classes.tableActionButtons}>
        <h5>Latest Invoives</h5>                  
        <ul>
          <li>Monthly</li>
          <li>Weekly</li>
          <li>Today</li>
        </ul>
      </section>
      <MDBDataTable
        className={Classes.tableData} 
        responsiveMd
        small
        btn={true}
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
    </div>
    
  );
}


export default InvoicesTable ;