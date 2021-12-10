import React , {  useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import Classes from './DataTable.module.scss';

const DataTable = (props) => {

    const { rows , cols , paging , sortable  , label , infoLabel} = props

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
    )
}

export default DataTable;