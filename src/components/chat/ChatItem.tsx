import { FC } from 'react';

const ChatItem: FC = () => {
  return (
    <div className="p-2 shadow-sm flex items-center space-x-1 cursor-pointer">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8 md:w-12 md:h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>

      <div className="hidden md:block">
        <h3 className="text-lg font-semibold">John Doe</h3>
        <p className="text-sm text-grey-600">Hey there! I am using WhatsApp.</p>
      </div>

      <p className="hidden md:block w-fit text-grey-600 text-xs">Just now</p>
    </div>
  );
};

export default ChatItem;
