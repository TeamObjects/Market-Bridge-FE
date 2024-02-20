const ValidationMessage = ({ text }: { text: string }) => {
  return <div className="text-red-500 text-[12px] ml-6 mb-4">{text}</div>;
};

export default ValidationMessage;
