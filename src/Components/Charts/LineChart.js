
import Chart from 'react-apexcharts';
import Classes from './LineChart.module.scss';

const LineChart = (props) => {
    const { icon , title , balance , options , series , toolbar } = props;
    return (
        <>
            <div className={Classes.chartHeading}>
                <div>
                    <h6>{title}</h6>
                    <p>{balance}</p>
                </div>
               <img src={icon} alt="arrow"></img>
            </div>
            <Chart  className={Classes.Chart}
                    options={options}
                    series={series}
                    toolbar={toolbar}
                    type="area" />
        </>
       
    );
};

export default LineChart;