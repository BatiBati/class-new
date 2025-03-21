import { RightArrow } from "@/components/assets/RightArrow";
import { Star } from "@/components/assets/Star";
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

      <div className="w-[100%] h-[30%] bg-[#ad7628] p-[50px] flex m-[50px] rounded-2xl">
        <div className="w-[50%] h-[100%] flex justify-center items-center relative">
          <div className="h-[90%] w-[100%] flex justify-center items-center">
            <Star />

            <Star />
            <Star />

            <img src="./images/phone.png" className="h-full" />
          </div>
          {/* <div>
                <img src="./images/icedMocha.svg" className="absolute left-0" />
              </div>
              <div>
                <img src="./images/cupOfCoffe.png" />
              </div> */}
        </div>
        <div className="w-[50%] h-[100%] relative bg-amber-950">
          {/* <div className="w-fit h-[100%] flex flex-col justify-between  bg-amber-500">
              <div>
                <h1 className="text-[#AA714A] text-[32px] font-bold w-[329px]">
                  Үнэгүй кофе авахад илүү амар боллоо.
                </h1>
                <p>
                  <span className="font-bold w-[419px]">Coffee namu app </span>
                  -Урамшууллын апп татаж аваад, дуртай зүйлээ хаанаас ч, хэзээ ч
                  хамаагүй захиалаарай.
                </p>
              </div>

              <div>
                <button className="flex items-center gap-2 pl-0">
                  Апп татах <RightArrow />
                </button>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}
