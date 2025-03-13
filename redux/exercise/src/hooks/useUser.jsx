import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../app/authSlice";
export default function useUser() {
  const { user, isLoggedIn } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  return {
    setUser: (newUser) => {
      dispatch(setUser(newUser));
    },
    user,
    isLoggedIn,
  };
}
