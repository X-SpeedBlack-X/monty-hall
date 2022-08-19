import useDoors, { Door } from "../hooks/door";

type DoorProps = {
  value: Door;
  onChange: (newDoor: Door) => void;
};

export function Door(props: DoorProps) {
  const door = props.value;
  const selected = door.selected && !door.openDoor ? styles.selected : "";

  const { setDoor } = useDoors();

  const toggleSelection = (e) =>
    props.onChange(
      setDoor((state) => ({
        ...state,
        selected: !state.selected,
      }))
    );

  const opening = (e) => {
    e.stopPropagation();
    props.onChange(door.opening());
  };

  return <div></div>;
}
