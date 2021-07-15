import React from 'react'
import { Bar, Chart } from 'react-chartjs-2';

const BarChart = () => {
    return(
        <div>
            <Bar
                data={{
                    label: ['2017', '2018', '2019', '2020', '2021'],
                    datasets: [{
                        label: '# of repositories',
                        data: [12, 19, 3, 5, 2, 6],
                        backgroundColor: 'lightBlue',
                    }],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}

export default BarChart