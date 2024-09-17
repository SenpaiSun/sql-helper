import { Button } from "antd";

export const PopupCompareResult: React.FC = () => {
  return (
    <div className="border-white border rounded-xl w-2/3 h-2/3 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 bg-[#242424] p-5 flex flex-col">
      <Button type='primary' danger className='mb-12 w-40 h-10 mx-auto' style={{outline: 'none'}}>Close popup</Button>
      <div className="border-white border rounded-xl w-11/12 h-full bg-[#242424] mx-auto p-2 text-whitey">
        asdasdasdasdasdasd
      </div>
    </div>
  );
};
