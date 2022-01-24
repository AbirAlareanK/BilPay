import { UseCards } from '../../Utils/Context/CardsProvider';
import AdminCard from '../../Components/UIs/AdminCard';
import Classes from './Dashboard.module.scss';
import arrowUp from '../../Assets/Icons/arrow-up.svg';
import arrowDn from '../../Assets/Icons/arrow-dn.svg';
import DataTable from '../../Components/Table/DataTable';
import IncomeData from '../../Assets/JSON/income-data.json';
import colData from '../../Assets/JSON/short-invoices-col-table.json';
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import OutcomeData from '../../Assets/JSON/outcome-data.json';
import LimitData from '../../Assets/JSON/limit-data.json';
import LineChart from '../../Components/Charts/LineChart';
import RadialBarChart from '../../Components/Charts/RadialBarChart';
import spendingData from '../../Assets/JSON/spendings.json';
import SpendingChartWrapper from '../../Components/Charts/SpendingChartWrapper';
import TransData from '../../Assets/JSON/transaction-data.json';
import BarChart from '../../Components/Charts/BarChart';
import tranChartData from '../../Assets/JSON/transaction-chart.json';
import TransactionRow from '../../Components/Transactions/TransactionRow';


const Dashboard = () => {
    const { Cards } =  UseCards();
    const { GetShortTableRows} = UseInvoices();

    const Spendingbgs = ["greenbackg" , "yellowbackg" , "bluebackg" , "redbackg"];
    
    return (
        <>
           
            <div className={Classes.flexContainer}>
                <div className={Classes.flexItem}>
                    <AdminCard  className={Classes.adminCardDash}
                                balance={Cards[0]["card-balance"]}
                                cardNum={Cards[0]["card-number"]}
                                validation={Cards[0]["card-validation"]}
                                color={Cards[0]['card-color']}/>
                </div>
                <div className={`${ Classes.flexItem} card-wrapper`}>
                    <LineChart  options={IncomeData.options}
                                series={IncomeData.series}
                                toolbar={IncomeData.toolbar}
                                icon={arrowUp}
                                title={'Income'}
                                balance={'$48,21'}
                                type={"area"}/>
                </div>
                <div className={`${Classes.flexItem} card-wrapper`}>
                    <LineChart  options={OutcomeData.options}
                                series={OutcomeData.series}
                                toolbar={OutcomeData.toolbar}
                                icon={arrowDn}
                                title={'Outcome'}
                                balance={'$4821,11'}/>
                </div>
                <div className={` ${Classes.flexItem} card-wrapper`}>
                    <RadialBarChart  options={LimitData.options}
                                    series={LimitData.options.series}
                                    title={'Limit'}/>
                </div>
            </div>
             {/* <div className={Classes.gridContainer}>
                <div className={Classes.gridItem} style={{
                                                            backgroundColor:'red'
                                                        }}>
                                                        djhgfhgdjh    
                </div>
                <div className={Classes.gridItem} style={{
                                                            backgroundColor:'blue'
                                                        }}>
                      djhgfhgdjh                                      
                </div>
                <div className={Classes.gridItem} style={{
                                                            backgroundColor:'green'
                                                        }}>
                                                        djhgfhgdjh    
                </div>
                <div className={Classes.gridItem} style={{
                                                            backgroundColor:'yellow'
                                                        }}>
                                                        djhgfhgdjh    
                </div>
            </div> */}
            <div className={`${Classes.parentGrid} ${Classes.gridContainer}`}>
                <div className={Classes.gridItem}>
                    <div className={`${Classes.transactionChart} card-wrapper`}>
                        <div className={Classes.Header}>
                            <h6 className={Classes.heading}>Transaction OverView</h6>
                            <p className={Classes.details}>...</p>
                        </div>
                        <BarChart options={tranChartData.options}
                                    series={tranChartData.options.series}/>
                    </div>
                </div>
                <div className={Classes.gridItem}>
                    <div className={`${Classes.spendingChart} card-wrapper`}>
                        <div className={Classes.Header}>
                            <h6 className={Classes.heading}>Spending</h6>
                            <p className={Classes.details}>...</p>
                        </div>
                        <div className={`${Classes.childGrid} ${Classes.gridContainer}`}>
                            {spendingData.map((spen,i) =>(
                                <SpendingChartWrapper   key={i}
                                                        color={Spendingbgs[i]}
                                                        name={spen.name} 
                                                        spending={spen.spending}
                                                        total={spen.total}
                                                        percentage={spen.percentage}
                                                        chartOptions={LimitData.options}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={Classes.gridItem}>
                    <div className={Classes.invoicesTable}>
                        <DataTable  className={Classes.invTable}
                                    rows={GetShortTableRows()}
                                    entries={2}
                                    cols={colData}
                                    clickable={true}
                                    paging={false}
                                    sortable={false}
                                    small={true} >
                            <div className={Classes.Header}>
                                <h6 className={Classes.heading}>Latest Invoices</h6>
                                <p className={Classes.details}>...</p>
                            </div>   
                        </DataTable>
                    </div>
                </div>
                <div className={Classes.gridItem}>
                    <div className={` ${Classes.transaction} card-wrapper`}>
                        <div className={Classes.Header}>
                            <h6 className={Classes.heading}>Previous Transaction</h6>
                            <p className={Classes.details}>...</p>
                        </div>
                        <table>
                            {TransData.map((tran,i)=>(
                            <TransactionRow  key={i}
                                                name={tran.name}
                                                amount={tran.amount}
                                                date={tran.date}
                                                transaction={tran.transaction}
                                                status={tran.status} />
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;