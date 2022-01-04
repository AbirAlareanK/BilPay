import Chart from 'react-apexcharts';
import Classes from './RadialBarChart.module.scss';

const RadialBarChart = (props) => {
    const {  title , options , series } = props;

   return (
       <>
            {title ? <p className={Classes.limit}>{title}</p> : null}
            <Chart  className={Classes.radialBarChart}
                    options={options}
                    series={series}
                    type="radialBar"
                    width="66%"
                    height="100%"/>

       </>
        
    );
};

export default RadialBarChart;