import React from 'react'
import { Bar, Chart } from 'react-chartjs-2';

const BarChart = () => {
    return(
        <div>
            <Bar
                data={{
                    label: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of votes'
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