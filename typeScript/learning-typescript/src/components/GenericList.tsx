import React from "react";
import useListManager from "../hooks/useListManager";
type props<T> = {
  initialItems: T[];
  renderItem(item: T): React.ReactNode;
  renderEdit(
    item: T,
    index: number,
    edit: ListManager<T>["edit"]
  ): React.ReactNode;
  generateItem(): T;
  title: string;
};

export default function GenericList<T>({
  initialItems,
  renderItem,
  title,
  generateItem,
  renderEdit,
}: props<T>) {
  const { items, add, remove, edit } = useListManager(initialItems);
  return (
    <div>
      <h1>Generic List : {title}</h1>
      {items.map((item, i) => {
        return (
          <div key={i}>
            {renderItem(item)}
            <button
              onClick={() => {
                remove(i);
              }}
            >
              -
            </button>
            {renderEdit(item, i, edit)}
          </div>
        );
      })}
      <button
        onClick={() => {
          add(generateItem());
        }}
      >
        +
      </button>
    </div>
  );
}
