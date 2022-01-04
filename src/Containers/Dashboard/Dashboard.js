import { Col , Row } from 'react-bootstrap';
import { UseCards } from '../../Utils/Context/CardsProvider';
import AdminCard from '../../Components/UIs/AdminCard';
import Classes from './Dashboard.module.scss';
import arrowUp from '../../Assets/Icons/arrow-up.svg';
import arrowDn from '../../Assets/Icons/arrow-dn.svg';
import DataTable from '../../Components/Table/DataTable';
import IncomeData from '../../Assets/JSON/Charts/income-data.json';
import colData from '../../Assets/JSON/Invoices/short-invoices-col-table.json';
import { UseInvoices } from "../../Utils/Context/InvoicesProvider";
import OutcomeData from '../../Assets/JSON/Charts/outcome-data.json';
import LimitData from '../../Assets/JSON/Charts/limit-data.json';
import LineChart from '../../Components/Charts/LineChart';
import RadialBarChart from '../../Components/Charts/RadialBarChart';
import spendingData from '../../Assets/JSON/Charts/spendings.json';
import SpendingChartWrapper from '../../Components/Charts/SpendingChartWrapper';
import TransData from '../../Assets/JSON/transaction-data.json';
import BarChart from '../../Components/Charts/BarChart';
import tranChartData from '../../Assets/JSON/Charts/transaction-chart.json';
import TransactionRow from '../../Components/Transactions/TransactionRow';


const Dashboard = () => {
    const { Cards } =  UseCards();
    const { GetShortTableRows} = UseInvoices();

    const Spendingbgs = ["greenbackg" , "yellowbackg" , "bluebackg" , "redbackg"];
    
    return (
        <>
            <Col lg={4} md={6} sm={6}>
                <AdminCard  className={Classes.adminCardDash}
                            balance={Cards[0]["card-balance"]}
                            cardNum={Cards[0]["card-number"]}
                            validation={Cards[0]["card-validation"]}
                            color={Cards[0]['card-color']}/>
            </Col>
            <Col lg={3} md={6} sm={6}>
                <div className={`${Classes.ChartSection} card-wrapper`}>
                    <LineChart  options={IncomeData.options}
                                series={IncomeData.series}
                                toolbar={IncomeData.toolbar}
                                icon={arrowUp}
                                title={'Income'}
                                balance={'$48,21'}
                                type={"area"}/>
                </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
                <div className={`${Classes.ChartSection} card-wrapper`}>
                    <LineChart  options={OutcomeData.options}
                                series={OutcomeData.series}
                                toolbar={OutcomeData.toolbar}
                                icon={arrowDn}
                                title={'Outcome'}
                                balance={'$4821,11'}/>
                </div>
            </Col>
            <Col lg={2} md={6} sm={6}>
                <div className={`${Classes.LimitChart} card-wrapper`}>
                    <RadialBarChart  options={LimitData.options}
                                    series={LimitData.options.series}
                                    title={'Limit'}/>
                </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
                <div className={`${Classes.transactionChart} card-wrapper`}>
                    <div className={Classes.Header}>
                        <h6 className={Classes.heading}>Transaction OverView</h6>
                        <p className={Classes.details}>...</p>
                    </div>
                    <BarChart options={tranChartData.options}
                                series={tranChartData.options.series}/>
                </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
                <div className={`${Classes.spendingChart} card-wrapper`}>
                    <div className={Classes.Header}>
                        <h6 className={Classes.heading}>Spending</h6>
                        <p className={Classes.details}>...</p>
                    </div>
                    <Row style={{paddingLeft:"7.5px",paddingRight:"7.5px"}}>
                        {spendingData.map((spen,i) =>(
                            <SpendingChartWrapper   key={i}
                                                    color={Spendingbgs[i]}
                                                    name={spen.name} 
                                                    spending={spen.spending}
                                                    total={spen.total}
                                                    percentage={spen.percentage}
                                                    chartOptions={LimitData.options}/>
                        ))}
                    </Row>
                </div>
            </Col>
            <Col lg={6} md={12}>
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
            </Col>
            <Col lg={6} md={12}>
                <div className={` ${Classes.transaction} card-wrapper`}>
                    <div className={Classes.Header}>
                        <h6 className={Classes.heading}>Previous Transaction</h6>
                        <p className={Classes.details}>...</p>
                    </div>
                    <table>
                        <tbody>
                            {TransData.map((tran,i)=>(
                            <TransactionRow  key={i}
                                                name={tran.name}
                                                amount={tran.amount}
                                                date={tran.date}
                                                transaction={tran.transaction}
                                                status={tran.status} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </Col>
        </>
    );
};

export default Dashboard;