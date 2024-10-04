import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Route, Routes, Navigate } from "react-router";
import Dashboard from "../Dashboard";

export default function Account() {
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
                element={<Navigate to="/Kanbas/Account/Signin" />}
              />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Dashboard" element = {<Dashboard/>}/>
            </Routes>
          </td>
        </tr>
      </table>

      
    </div>
  );
}
export {};
