import { FC } from 'react';
import ChatTopBar from './ChatTopBar';
import Message from './Message';
import MessageSendBox from './MessageSendBox';

const ChatContainer: FC = () => {
  return (
    <div className="bg-grey-100 w-4/5 md:flex-[2] h-full rounded-r-md shadow-md backdrop-blur-md flex flex-col">
      <ChatTopBar />

      <div className="overflow-auto px-2.5 md:px-5 pt-4 flex flex-col">
        {Array.from({ length: 100 }).map((_, index) => (
          <Message key={index} index={index} />
        ))}
      </div>

      <MessageSendBox />
    </div>
  );
};

export default ChatContainer;
