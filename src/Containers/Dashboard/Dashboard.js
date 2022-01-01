import { Col } from 'react-bootstrap';
import { UseCards } from '../../Utils/Context/CardsProvider';
import AdminCard from '../../Components/UIs/AdminCard';
import Classes from './Dashboard.module.scss';
import { GrLineChart } from 'react-icons/gr';
import IncomeData from '../../Assets/JSON/income-data.json';
import OutcomeData from '../../Assets/JSON/outcome-data.json';
import React from 'react';
import LineChart from '../../Components/Charts/LineChart';

const Dashboard = () => {
    const { Cards } =  UseCards();
    
    return (
        <>
            <Col lg={4} md={3} sm={6}>
                <AdminCard  className={Classes.adminCardDash}
                            balance={Cards[0]["card-balance"]}
                            cardNum={Cards[0]["card-number"]}
                            validation={Cards[0]["card-validation"]}
                            color={Cards[0]['card-color']}/>
            </Col>
            <Col lg={3} md={3} sm={6}>
                <div className={`${Classes.ChartSection} card-wrapper`}>
                    <LineChart  options={IncomeData.options}
                                series={IncomeData.series}
                                toolbar={IncomeData.toolbar}
                                icon={<GrLineChart />}
                                title={'Income'}
                                balance={'$48,21'}/>
                </div>
            </Col>
            <Col lg={3} md={3} sm={6}>
                <div className={`${Classes.ChartSection} card-wrapper`}>
                    <LineChart  options={OutcomeData.options}
                                series={OutcomeData.series}
                                toolbar={OutcomeData.toolbar}
                                icon={<GrLineChart />}
                                title={'Outcome'}
                                balance={'$4821,11'}/>
                </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
                Col 2
            </Col>
            <Col lg={6}>
                Col 6
            </Col>
            <Col lg={6}>
                Col 6
            </Col>
        </>
    );
};

export default Dashboard;