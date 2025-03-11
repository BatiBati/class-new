import { RightArrow } from "@/components/assets/RightArrow";
import { HeaderNamu } from "@/components/HeaderNamu";

export default function Home() {
  return (
    <div className="w-screen 100vw h-screen 100vh">
      <div>
        <HeaderNamu />
      </div>
      <div className="relative">
        <img src="./images/coffeImage.png" />
        <div className="absolute top-80 right-40 w-[200px] flex flex-col gap-3">
          <div className="text-3xl font-extrabold text-white">
            Яг одоо захиалаад авах.
          </div>
          <div className="py-[4.5px] px-[22.5px] bg-amber-100 flex items-center gap-2 w-fit text-lg rounded-2xl border-2 divide-[#AA714A] text-[#AA714A]">
            Захиалах <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
}
