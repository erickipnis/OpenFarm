import sio from 'socket.io';
import log from 'winston';

const socketManager = (server) => {
  const io = sio(server);

  io.on('connection', (socket) => {
    log.info(`User with socket: ${socket.id} has connected`);

    io.on('disconnect', () => {
      log.info(`User with socket:  ${socket.id} has disconnected`);
    });
  });
};

export default socketManager;
