export interface IComment {
  id: number;
  name: string;
  date: string;
  comment: string;
  image: string;
  status: string;
  product: string;
}

export interface IMessage {
  id: number;
  name: string;
  lastname: string;
  image: string;
  message: string;
  subject: string;
  date: string;
  status: string;
  attachments: boolean;
}

export interface INotification {
  id: number;
  date: string;
  status: string;
  message: string;
}

export interface IOrder {
  id: number;
  date: string;
  user: string;
  products: number;
  totalPrice: number;
  status: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  category: string;
  orders: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  image: string;
  country: string;
  status: boolean;
}
