import "./App.css";
import EditProduct from "./components/EditProduct";
import EditUser from "./components/EditUser";
import GenericList from "./components/GenericList";
const products: IProduct[] = [
  {
    id: "ssdgadg",
    name: "tasse",
    price: 15,
  },
  {
    id: "sadfgabh",
    name: "souris",
    price: 75,
  },
  {
    id: "auishvyvhoarf",
    name: "laptop",
    price: 500,
  },
];
const users: IUser[] = [
  {
    id: "hasdulycabskdv45",
    name: "youcef",
    age: 27,
  },
  {
    id: "adsgviyg",
    name: "mhamed",
    age: 34,
  },
  {
    id: "raid",
    name: "raid",
    age: 28,
  },
];
function App() {
  return (
    <>
      <GenericList<IUser>
        initialItems={users}
        title="USERS"
        generateItem={() => {
          return {
            age: Math.floor(Math.random() * 100),
            name: "Random " + Math.floor(Math.random() * 100),
            id: Math.random().toString(16),
          };
        }}
        renderItem={(item) => {
          return (
            <div>
              {item.name}-{item.age}
            </div>
          );
        }}
        renderEdit={(item, i, edit) => {
          return <EditUser edit={edit} index={i} item={item} />;
        }}
      />
      <GenericList<IProduct>
        initialItems={products}
        title="PRODUCTS"
        generateItem={() => {
          return {
            price: Math.floor(Math.random() * 1000),
            name: "product number" + Math.floor(Math.random() * 100),
            id: Math.random().toString(16),
          };
        }}
        renderItem={(item) => {
          return (
            <div>
              {item.name}-{item.price}$
            </div>
          );
        }}
        renderEdit={(item,index,edit)=>{
          return(
            <EditProduct edit={edit} index={index} item={item}/>
          )
        }}
      />
    </>
  );
}

export default App;
