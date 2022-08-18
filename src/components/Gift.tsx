export function Gift() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-[100px] h-[25px] bg-green-500 "></div>
      <div className="w-[90px] h-[60px] bg-green-400"></div>

      <div className="absolute w-[15px] h-[85px]  bg-red-500"></div>
      <div className="absolute top-10 w-[90px] h-[15px] bg-red-500"></div>
    </div>
  );
}
