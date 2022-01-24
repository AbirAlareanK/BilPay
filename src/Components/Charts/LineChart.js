
import Chart from 'react-apexcharts';
import Classes from './LineChart.module.scss';

const LineChart = (props) => {
    const { icon , title , balance , options , series , toolbar } = props;
    return (
        <div className={Classes.LineChart}>
            <div className={Classes.chartHeading}>
                <h6>{title}</h6>
                <p>{balance}</p>
            </div>
            <div className={Classes.imgContainer}>
                <img src={icon} alt="arrow" />
            </div>
            <Chart
                    className={Classes.Chart}
                    options={options}
                    series={series}
                    toolbar={toolbar}
                    type="area"/>
        </div>
       
    );
};

export default LineChart;