import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import engagementHelper from './engagementHelper';
import './style.css';
import { channels, messageCountList } from './dummyData';

const EngagementMessagesOverTime = () => {
  const options = engagementHelper.engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default function App() {
  return (
    <div>
      <EngagementMessagesOverTime />
    </div>
  );
}
