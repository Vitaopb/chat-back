import { io } from "./http";
import UserService from "./modules/User/UserService";
const userService = new UserService();

io.on("connection", (socket) => {
  console.log('Socket connected: ', socket.id);

  socket.on('set_username', async (user) => {
    socket.data.user = user;
    const user_created = await userService.create(user.name, user.email, user.password);
    socket.emit('user_created', user_created);	
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected: ', socket.id);
  });
});

