import React from 'react';
import Chart from 'react-apexcharts'

const AppointmentGraphic = ({data}) => {

    let screenWidth = window.screen.width;

    const stateChartQuantity = {
        options: {
            chart: {
                id: 'Patient Chart',
                
            },
            xaxis: {
                categories: ['Childs', 'Teenagers', 'Adults']
            },
            
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    distributed: true,
                    //rangeBarOverlap: false,
                    rangeBarGroupRows: true,
                    dataLabels: {
                        position: 'center'
                    }
                },
                
            },
        },
        series: [
            {
                name: 'Patient Chart',
                data: data
            }
        ],
    }

    return(
        <div className='mt-8 px-5 pb-10'>
            <div className='items-center flex justify-center flex-col'>
                <p className='font-mono my-4 text-center text-yellow-800 text-xl'>The chart below shows the total amount of appointmens based on: </p>
                <ul>
                    <li className='text-blue-600 uppercase font-bold text-lg'>Childs <span className='text-blue-400 lowercase font-bold font-mono'>{` < 10 years old`}</span></li>
                    <li className='text-teal-500 uppercase font-bold text-lg'>Teenagers <span className='font-bold lowercase font-mono'>{` > 10 years and < 18 years old`}</span></li>
                    <li className='text-yellow-600 uppercase font-bold text-lg'>Adults <span className='font-bold lowercase font-mono'>{` > 18 years old`}</span></li>
                </ul>

                <div className='px-5 mt-5'>
                    <Chart options={stateChartQuantity.options} series={stateChartQuantity.series} type="bar" width={screenWidth < 500 ? '250' : "400"} height={screenWidth < 500 ? '250' : "400"} />
                </div>
            </div>
        </div>
    )
}

export default AppointmentGraphic;