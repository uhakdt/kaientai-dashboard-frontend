import { io } from 'socket.io-client';
import { BackendUrl } from '../Auxillary/GlobalVariables';

// Socket Setup
let socket;
export const initiateSocketConnection = () => {
  socket = io(BackendUrl, {
		auth: {
			token: 'cde'
		},
	});
	console.log(`Connecting socket...`);
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}

export const getOrders = (cb) => {
	socket.emit('orders', 'Hello there from React.');
  if (!socket) return(true);

  socket.on('ordersUpdate', msg => {
    console.log('Orders Update received');
    return cb(null, msg);
  });
}

export const getUsers = (cb) => {
	socket.emit('users', 'Hello there from React.');
  if (!socket) return(true);

  socket.on('usersUpdate', msg => {
    console.log('Users Update received');
    return cb(null, msg);
  });
}

export const getProducts = (cb) => {
	socket.emit('products', 'Hello there from React.');
  if (!socket) return(true);

  socket.on('productsUpdate', msg => {
    console.log('Products Update received');
    return cb(null, msg);
  });
}