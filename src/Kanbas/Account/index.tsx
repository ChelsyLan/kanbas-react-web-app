import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Route, Routes, Navigate } from "react-router";
import Dashboard from "../Dashboard";
import { useSelector } from "react-redux";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  
  return (
    <div id="wd-acount-screen">
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route
                path="/"
                element={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" }/>
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
              {/* <Route path="/Dashboard" element = {<Dashboard/>}/> */}
            </Routes>
          </td>
        </tr>
      </table>

      
    </div>
  );
}
export {};
