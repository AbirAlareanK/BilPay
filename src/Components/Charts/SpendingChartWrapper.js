import { useMemo } from 'react';
import {Col} from 'react-bootstrap';
import RadialBarChart from './RadialBarChart';
import Classes from './SpendingChartWrapper.module.scss';

const SpendingChartWrapper = ({color,name,spending,total,percentage,chartOptions}) => {

    const newOptions = useMemo(()=>{
        return {
            ...chartOptions,
            plotOptions:{
                radialBar: {
                    hollow: {
                        size: "40%"
                    },
                    dataLabels: {
                        value:{
                            offsetY: -10,
                            color: "#ffffff"
                        }
                    },
                    track:{
                        strokeWidth:"100%",
                        opacity:0.6
                    }
                }
            },
            fill : {
                colors : ["#ffffff"]
            }
        }
    },[chartOptions]) 

    return (
        <Col sm={6} style={{paddingLeft:"8px",paddingRight:"8px"}}>
            <div className={`${Classes.Spending} ${color}`}>
                <div className={Classes.spendingDeatils}>
                    <h6>{name}</h6>
                    <span>{spending}/{total}</span>
                </div>
                <RadialBarChart
                            options={newOptions}
                            series={percentage} />
            </div>
        </Col>
    );
};

export default SpendingChartWrapper;