import { FC } from 'react';

const ChatSideBarFooter: FC = () => {
  return (
    <div className="text-purple/70 shadow-md  p-2.5 md:p-4 md:px-5">
      <p className="hidden md:block">
        Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        by{' '}
        <a
          href="https://www.github.com/mehedisarkar2k"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 underline hover:text-purple transition-all"
        >
          @mehedi
        </a>
      </p>
    </div>
  );
};

export default ChatSideBarFooter;
