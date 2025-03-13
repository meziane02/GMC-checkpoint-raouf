import { ChangeEvent, useState } from "react";

type Props = {
  item: IProduct;
  index: number;
  edit: ListManager<IProduct>["edit"];
};

export default function EditProduct({ edit, index, item }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState(item);
  function handleChange(attr: keyof IProduct, t: "number" | "string") {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setProduct((p) => ({
        ...p,
        [attr]: t === "number" ? Number(e.target.value) : e.target.value,
      }));
    };
  }
  if (isEditing)
    return (
      <div>
        <input
          type="text"
          value={product.name}
          name="name"
          onChange={handleChange("name", "string")}
        />
        <input
          type="number"
          value={product.price}
          name="price"
          onChange={handleChange("price", "number")}
        />
        <button
          onClick={() => {
            edit(index, product);
            setIsEditing(false);
          }}
        >
          save
        </button>
      </div>
    );
  return (
    <button
      onClick={() => {
        setIsEditing(true);
      }}
    >
      edit
    </button>
  );
}
