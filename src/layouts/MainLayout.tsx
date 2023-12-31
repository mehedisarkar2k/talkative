import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <div className="bg-grey-300 w-full h-screen mx-auto">
      <div className="max-w-screen-xl h-screen mx-auto md:px-10 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
