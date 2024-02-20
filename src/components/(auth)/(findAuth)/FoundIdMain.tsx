import { CiUser } from 'react-icons/ci';

const FoundIdMain = () => {
  return (
    <div className="flex justify-center items-center w-full p-20 ml-10">
      <div className="flex-none flex justify-center items-center w-[40px] h-[40px] mr-4 bg-gray-300 rounded-full">
        <CiUser className="w-[25px] h-[25px]" />
      </div>
      <div className="flex-auto">
        <h3 className="text-2xl text-[#011B5B] mb-2">DataLiteracy</h3>
        <p className="text-gray-500">가입일 2021.11.03</p>
      </div>
    </div>
  );
};

export default FoundIdMain;
