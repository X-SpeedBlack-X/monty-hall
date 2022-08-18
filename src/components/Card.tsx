type CardProps = {
  bgColor?: string;
  children: any;
};

export function Card(props: CardProps) {
  return (
    <div
      className="flex w-[300px] h-[250px] text-white text-3xl p-5 m-[3px]"
      style={{
        background: props.bgColor ?? "#fff",
      }}
    >
      {props.children}
    </div>
  );
}
