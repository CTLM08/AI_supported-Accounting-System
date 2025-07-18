import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import TaskBar from "./components/TaskBar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Investment from "./pages/Investment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Budget from "./pages/Budget";
import Advisor from "./pages/Advisor";
import Account from "./pages/Account";
import { createContext, use } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { doc, getDoc, onSnapshot } from "@firebase/firestore";
import Add from "./components/Add";
import Add_payment from "./components/Add_Payment";

export const appContext = createContext({
  userData: {},
  navigate: () => {},
  setUserData: () => {},
  Front: false,
  IsAdd: false,
  SetIsAdd: () => {},
  SetFront: () => {},
  uid: null,
  currentDate: null,
  isAddPayment: false,
  setIsAddPayment: () => {},
});
const App = () => {
  //get the url path
  const currentPath = useLocation();
  const [user, setUser] = useState(null);
  const [userDoc, setUserDoc] = useState();

  const [isAddPayment, setIsAddPayment] = useState(false);
  const [Front, SetFront] = useState(false);
  const [IsAdd, SetIsAdd] = useState(false);
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const [uid, setUid] = useState();
  const currentDate = new Date();
  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      if (_user) {
        setUser(_user);
        if (currentPath.pathname == "/") navigate("/dashboard");
        getDoc(doc(firestore, "user", _user.uid)).then((_doc) => {
          setUserDoc(_doc);
          setUserData(_doc.data());
          setUid(_user.uid);
        });
      } else {
        setUser(null);
      }
    });
  }, []);
  useEffect(() => {
    if (uid) {
      onSnapshot(doc(firestore, "user", uid), (doc) => {
        setUserData(doc.data());
      });
    }
  }, [uid]);
  return (
    <appContext.Provider
      value={{
        userData,
        navigate,
        setUserData,
        IsAdd,
        SetFront,
        SetIsAdd,
        uid,
        currentDate,
        isAddPayment,
        setIsAddPayment,
      }}
    >
      <div className="flex flex-row h-screen w-full font-roboto relative ">
        <>
          {currentPath.pathname !== "/login" &&
          currentPath.pathname !== "/register" ? (
            <div className="w-[25%] p-5">
              <TaskBar />
            </div>
          ) : null}
        </>
        <>
          {IsAdd ? (
            <div className="fixed w-full h-screen">
              <Add defaultType={IsAdd} />
            </div>
          ) : (
            ""
          )}
        </>
        <>
          {isAddPayment ? (
            <div className="fixed w-full h-screen">
              <Add_payment />
            </div>
          ) : (
            ""
          )}
        </>
        <div
          className={`overflow-y-auto w-full  bg-gray-100 ${
            currentPath.pathname === "/login" ||
            currentPath.pathname === "/register"
              ? ""
              : "p-5"
          }`}
        >
          {/* flex-1 */}
          <Routes className="h-full">
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/advisor" element={<Advisor />} />
            <Route path="/account" element={<Account />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </appContext.Provider>
  );
};

export default App;
