import { FC } from 'react';
import Logo from '../../assets/talkative_log.png';

const SideBarTitle: FC = () => {
  return (
    <div className="text-purple shadow-md  p-2.5 md:p-4 md:px-5 flex items-center">
      <img src={Logo} alt="Logo" className="block h-7 w-7 object-cover mr-2" />
      <p className="text-2xl font-medium hidden md:block">Chats</p>
    </div>
  );
};

export default SideBarTitle;
