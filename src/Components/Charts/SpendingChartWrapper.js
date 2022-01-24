import { useMemo } from 'react';
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
        <div className={Classes.gridItem}>
            <div className={`${Classes.Spending} ${color}`}>
                <div className={Classes.spendingDeatils}>
                    <h6>{name}</h6>
                    <span>{spending}/{total}</span>
                </div>
                <RadialBarChart
                            options={newOptions}
                            series={percentage} />
            </div>
        </div>
    );
};

export default SpendingChartWrapper;