import { useState } from "react";

export default function useListManager<T>(InitialElems: T[]): ListManager<T> {
  const [items, setItems] = useState(InitialElems);
  return {
    items,
    add: (item) => {
      setItems((prev) => {
        return [...prev, item];
      });
    },
    remove: (Index) => {
      setItems((prev) => {
        return prev.filter((_, i) => {
          return i !== Index;
        });
      });
    },
    edit: (Index, NewItem) => {
      setItems((prev) => {
        return prev.map((item, i) => {
          if (i === Index) return NewItem;
          else return item;
        });
      });
    },
  };
}
