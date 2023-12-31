import { FC } from 'react';

const MessageSendBox: FC = () => {
  return (
    <div className="mt-auto w-full">
      <div className="w-full flex items-center space-x-2 bg-grey-100 p-2.5 md:p-4">
        <textarea
          name="message"
          id="message"
          className="w-full p-1.5 px-2 resize-none rounded-md shadow-md focus:outline-none "
          autoFocus
          contextMenu="false"
          placeholder="Type your message"
        />

        <button className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-purple"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MessageSendBox;
