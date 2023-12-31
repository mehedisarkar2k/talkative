import { FC } from 'react';

const Message: FC<{ index: number }> = ({ index }) => {
  const isOwner = index % 2 === 0;

  return (
    <div className={`w-fit max-w-[75%] mb-4 ${isOwner ? 'ml-auto' : ''}`}>
      <div
        className={`p-2 border border-grey rounded-lg shadow-sm w-full flex items-center space-x-2 ${
          isOwner && ' bg-purple text-grey'
        }`}
      >
        <div className="hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <p>
          Hey this is welcome message. So you can Try this message by sending
          again... 🙂
        </p>
      </div>

      <p
        className={`mt-1 text-xs text-grey-600 ${
          isOwner ? 'text-right mr-2' : 'ml-2'
        }`}
      >
        1min ago
      </p>
    </div>
  );
};

export default Message;
