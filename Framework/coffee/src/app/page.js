import { RightArrow } from "@/components/assets/RightArrow";
import { HeaderNamu } from "@/components/HeaderNamu";

export default function Home() {
  return (
    <div className="w-[100%] h-[100%] bg-white">
      <div>
        <HeaderNamu />
      </div>
      <div className="relative flex justify-end items-center">
        <img src="./images/coffeImage.png" />
        <div className="absolute right-40 w-[200px] flex flex-col gap-3">
          <div className="text-3xl font-extrabold text-white">
            Яг одоо захиалаад авах.
          </div>
          <div className="py-[4.5px] px-[22.5px] bg-amber-100 flex items-center gap-2 w-fit text-lg rounded-2xl border-2 divide-[#AA714A] text-[#AA714A]">
            Захиалах <RightArrow />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center">
        <div className="w-[90%] h-[472px] bg-[#F8F1E7] p-[50px] flex">
          <div className="bg-red-600 w-[50%] h-[100%] flex justify-center items-center relative">
            <div className="h-[90%] w-[100%] flex relative" >
              <img src="./images/Star1.svg" className="w-[40px] h-[42px]" />
              <img src="./images/phone.png" className="h-full" />
              <img src="./images/Star2.svg" className="w-[25px] h-[20px]" />
              <img src="./images/Star3.svg" className="w-[54px] h-[52px]" />

              <div>
                <img src="./images/icedMocha.svg" className="absolute left-0" />
              </div>
              <div>
                <img src="./images/cupOfCoffe.png" />
              </div>
            </div>

          </div>
          <div className="bg-amber-300 w-[50%] h-[100%]"></div>
        </div>
      </div>
    </div>
  );
}
