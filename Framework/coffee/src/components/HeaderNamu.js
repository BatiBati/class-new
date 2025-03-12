import { Carriage } from "./assets/Carriage";
import { CoffeeIcon } from "./assets/CoffeeIcon";
import { GiftIcon } from "./assets/GiftIcon";

export const HeaderNamu = () => {
  return (
    <div className="w-full h-[110px] flex items-center justify-between py-[13px] px-[80px]">
      <div className="w-[20%] h-[62px] flex justify-center items-center">
        <img src="./images/logo.png" className="w-[62px] h-[62px]" />
        <div className="flex flex-col">
          <div className="text-[20px] text-[#28282A] font-[700]">
            coffee namu
          </div>
          <div className="text-[20px] text-[#28282A] font-[500]">mongolia</div>
        </div>
      </div>
      <div className="h-full w-[80%] flex justify-end">
        <div className="flex w-1/3">
          <div className="flex items-center w-[100%] gap-[4px] text-base  font-semibold text-black">
            <CoffeeIcon />
            Меню
          </div>
          <div className="flex items-center w-[100%] gap-[4px] text-base  font-semibold text-black">
            <GiftIcon />
            Бонус
          </div>
          <div className="flex items-center w-[100%] gap-[4px] text-base  font-semibold text-black">
            <Carriage />
            Захиалга
          </div>
        </div>
        <div className="flex gap-x-[24px] w-[258px] justify-center items-center">
          <div className="w-[106px] text-base h-[48px] flex justify-center items-center border-2 rounded-2xl text-[#AA714A]">
            Нэвтрэх
          </div>
          <div className="w-[106px] text-base h-[48px] flex justify-center items-center border-1 rounded-2xl bg-[#AA714A] text-white">
            Бүртгүүлэх
          </div>
        </div>
      </div>
    </div>
  );
};
