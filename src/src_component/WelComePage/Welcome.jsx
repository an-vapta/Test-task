import React from 'react';
import { render } from 'react-dom';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import options from './chartData'

const Welcome = () => {


  return (
    <>
      <div id="container" style={{"width":"100%", "height":"400px"}}>.
    
      <HighchartsReact
       highcharts={Highcharts} 
      //  constructorType={'stockChart'}
      options={options} />

      </div>
    </>
  );
};

export default Welcome;

// hamraj
