import FoundIdTitle from '@/components/(auth)/(findAuth)/FoundIdTitle';

import { CiUser } from 'react-icons/ci';

const FoundIdMain = () => {
  return (
    <div className="flex justify-center items-center w-full p-20">
      <div className="flex-none flex justify-center items-center w-[40px] h-[40px] mr-4 bg-gray-300 rounded-full">
        <CiUser className="w-[25px] h-[25px]" />
      </div>
      <div className="flex-auto">
        <FoundIdTitle />
      </div>
    </div>
  );
};

export default FoundIdMain;
