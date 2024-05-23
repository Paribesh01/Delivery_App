import { atom } from 'recoil';
import { User, Order } from '../db/types';

export const userState = atom<User | null>({
  key: 'userState',
  default: null
});

export const orderState = atom<Order[]>({
  key: 'orderState',
  default: []
});
