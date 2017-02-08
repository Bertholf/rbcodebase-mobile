import chat from './chat';

const listChat = (total = 10) => {
  let chats = [];
  for (let i = 0; i < total; i += 1) {
    chats.push(chat());
  }
  return chats;
};
export default listChat;
