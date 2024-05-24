import { atom } from 'recoil';
import { User, Order } from '../db/types';

export const userState = atom<User | null>({
  key: 'userState',
  default:null
  //   email:"nepalparibesh0@gmail.com",
  // id:"SiOa9y0hbId7stM05OViNNZ4Bi42",
  // name:"Paribesh Nepal",
  // orders:[],
  // role:"user",
  // phoneNo:"08115794179"
  // }
});

export const orderState = atom<Order[]>({
  key: 'orderState',
  default: []
});
