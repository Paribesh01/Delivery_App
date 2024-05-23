export interface Order {
    id: string;
    userId: string;
    pickupLocation: string;
    dropoffLocation: string;
    receiverPhoneNo: string;
    status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    phoneNo: string;
    orders: string[];
  }
  