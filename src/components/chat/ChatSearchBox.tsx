import { FC } from 'react';

const ChatSearchBox: FC = () => {
  return (
    <div className="mt-4 px-2.5 md:px-5">
      <input
        type="text"
        className="w-full bg-grey-200 rounded-full p-2 px-4 focus:outline-none shadow-sm"
        placeholder="Search"
      />
    </div>
  );
};

export default ChatSearchBox;
