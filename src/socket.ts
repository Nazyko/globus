import { io } from "socket.io-client";

const token = localStorage.getItem('token')

export const socket = io(`wss://globus-nukus.uz/ws/orders?token=${token}`);
