import { messageCountList, channels } from './dummyData';

type Message = typeof messageCountList[number];
type Channel = typeof channels[number];

export type { Message, Channel };
