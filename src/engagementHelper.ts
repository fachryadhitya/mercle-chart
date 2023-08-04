import { Channel, Message } from './types';

import * as Highcharts from 'highcharts';

const getDate = (a: string | number) => {
  return new Date(a).toLocaleDateString('en-UK', {
    day: '2-digit',
    month: 'short',
  });
};

const engagementMessageOverTimeChartOptions = (
  msgCountList: Message[],
  channels: Channel[]
): Highcharts.Options => {
  const messageToChannel = msgCountList.filter((item) => {
    return channels.some((channel) => {
      return channel.id === item.channelId;
    });
  });

  const dataSeries = messageToChannel.map((item) => {
    return [new Date(item.timeBucket).getTime(), parseInt(item.count)];
  });

  return {
    title: {
      text: 'Mercle Chart',
    },
    series: [
      {
        name: 'general',
        type: 'areaspline',
        data: dataSeries,
        lineColor: 'green',
        fillColor: 'transparent',
      },
    ],
    yAxis: {},
    xAxis: {
      tickInterval: 24 * 3600 * 1000,
      type: 'datetime',
      labels: {
        formatter: function () {
          return `<span> ${getDate(this.value)} </span>`;
        },
        align: 'left',
      },
    },
    tooltip: {
      formatter: function () {
        console.log(this.series.name);
        return `
          <div>
            <p>${this.series?.name} </p> <br>
            <p>${this.y} messages on ${getDate(this.x)} </p>
          </div>
        `;
      },
    },
  };
};

const engagementHelper = {
  engagementMessageOverTimeChartOptions,
};

export default engagementHelper;
