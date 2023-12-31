import { FC } from 'react';
import SideBarTitle from './SideBarTitle';
import ChatSearchBox from './ChatSearchBox';
import ChatItem from './ChatItem';
import ChatSideBarFooter from './ChatSideBarFooter';

const ChatSideBar: FC = () => {
  return (
    <div className="bg-grey-100 w-1/5 md:flex-[1] h-full rounded-r-md shadow-md backdrop-blur-md flex flex-col">
      <SideBarTitle />

      <ChatSearchBox />

      {
        <div className="overflow-auto pt-4 flex flex-col">
          {Array.from({ length: 50 }).map((_, index) => (
            <ChatItem key={index} />
          ))}
        </div>
      }

      <ChatSideBarFooter />
    </div>
  );
};

export default ChatSideBar;
