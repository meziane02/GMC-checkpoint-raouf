import { ChangeEvent, useState } from "react";

type Props = { item: IUser; index: number; edit: ListManager<IUser>["edit"] };

export default function EditUser({ edit, index, item }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(item);
  function handleChange(attr: keyof IUser, t: "number" | "string") {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setUser((p) => ({
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
          value={user.name}
          name="name"
          onChange={handleChange("name", "string")}
        />
        <input
          type="number"
          value={user.age}
          name="age"
          onChange={handleChange("age", "number")}
        />
        <button
          onClick={() => {
            edit(index, user);
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
