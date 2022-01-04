import { useState } from 'react';
import Chart from 'react-apexcharts';
import Classes from './BarChart.module.scss';

const BarChart = ({options , series}) => {
    const [filteredTransaction , setFilteredTransaction ] = useState(series);

    const HandleSelectChange = (e) => {
        const val = e.target.value ;
        switch(val){
            case "week" :
                setFilteredTransaction(series)
            break;
            case "day" :
                setFilteredTransaction([   
                    {
                        name: "Income",
                        data : [400,1200,300,200]
                    },
                    {
                        name : "Outcome",
                        data: [200,1000,150,600] 
                    }
                ])
            break;
            case "month" :
                setFilteredTransaction([   
                    {
                        name: "Income",
                        data : [340,1300,400,100,900,800,1350,390,570]
                    },
                    {
                        name : "Outcome",
                        data: [200,870,300,800,700,300,1200,1100,800] 
                    }
                ])
            break;
            default: return null;
        }
    }
    
    return (
        <div className={Classes.barChartWrapper}>
            <select onChange={event => HandleSelectChange(event)}
                    defaultValue="week">
                <option value="month">This Month</option>
                <option value="week">This Week</option>
                <option value="day">This Day</option>
            </select>
            <Chart  className={Classes.barChart}
                    options={options}
                    series={filteredTransaction}
                    type="bar"
                    width="100%" />
        </div>
    );
};

export default BarChart;