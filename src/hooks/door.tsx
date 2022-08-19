import { useState } from "react";

export type Door = {
  numberDoor: number;
  haveGift: boolean;
  selected: boolean;
  openDoor: boolean;
};

export default function useDoors() {
  const [door, setDoor] = useState<Door>({
    numberDoor: 3,
    haveGift: false,
    selected: false,
    openDoor: false,
  });

  const createDoors = (quantity: number, doorGift: number) =>
    Array.from({ length: quantity }, (_, i) => {
      const numberDoor = i + 1;
      const haveGift = numberDoor === doorGift;

      setDoor((state) => ({
        ...state,
        numberDoor,
        haveGift,
      }));
    });

  const updateDoors = (doors: Door[], doorModified: Door) =>
    doors.map((doorCurrent) => {
      const doorModifiedEqual =
        doorCurrent.numberDoor === doorModified.numberDoor;

      if (doorModifiedEqual) {
        return doorModified;
      } else {
        const updatedDoor = () => {
          setDoor((state) => ({
            ...state,
            selected: false,
          }));

          return door;
        };

        return doorModified.openDoor ? doorCurrent : updatedDoor();
      }
    });
  return {
    createDoors,
    updateDoors,
    door,
    setDoor,
  };
}
