import React from "react";
import ReactApexChart from "react-apexcharts"; 






function MainGraph(){

    
  

    

    const donutData = {
        series: [11, 55, 67, 83 ],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249
                      }
                    }
                  }
                }
              },
              labels: ['1분기', '2분기', '3분기', '4분기'],
            },
      }

      

    




    return (
        <div>
            <ReactApexChart 
            options={donutData.options}
            series={donutData.series}
            type="radialBar" 
            width="500"
        />

        </div>
    )
}

export default MainGraph;