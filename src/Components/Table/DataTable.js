import React , {  useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import Classes from './DataTable.module.scss';

const DataTable = ({rows,cols , paging , sortable , small}) => {

    const ShowDetailPage = (id)=> {
        console.log('itemPresses' + id )
    }

    const [datatable ] = useState({
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
        <MDBDataTable
            className={Classes.tableData} 
            responsiveMd
            small={small}
            btn={true}
            hover={true}
            sortable={sortable}
            searching={false}
            data={datatable}
            paging={paging}
            paginationLabel={["<", ">"]}
            displayEntries={false}
            pagesAmount={3}
            entries={5}
            infoLabel={["Showing", "to", "of", ""]}
            
        />
        </div>
    )
}

export default DataTable;