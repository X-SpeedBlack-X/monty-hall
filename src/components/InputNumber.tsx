type InputNumber = {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
};

export function InputNumber(props) {
  const dec = () => props.onChange(props.value - 1);

  const inc = () => props.onChange(props.value + 1);

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-black">
      <span className="text-gray-300 text-2xl">{props.text}</span>
      <span className="text-7xl">{props.value}</span>

      <div className="flex">
        <button
          className="flex justify-center items-center text-5xl h-20 w-20 m-[5px] border-0"
          onClick={dec}
        >
          -
        </button>
        <button
          className="flex justify-center items-center text-5xl h-20 w-20 m-[5px] border-0"
          onClick={inc}
        >
          +
        </button>
      </div>
    </div>
  );
}
