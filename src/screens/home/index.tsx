import { FC } from 'react';
import ChatSideBar from '../../components/chat/ChatSideBar';
import ChatContainer from '../../components/chat/ChatContainer';

const Home: FC = () => {
  return (
    <div className="h-screen w-full md:w-3/4 md:h-[calc(100vh-80px)] mx-auto flex items-center justify-center text-black">
      <div className="w-full flex items-center h-full md:space-x-2.5 overflow-hidden rounded-md">
        <ChatSideBar />
        <ChatContainer />
      </div>
    </div>
  );
};

export default Home;
