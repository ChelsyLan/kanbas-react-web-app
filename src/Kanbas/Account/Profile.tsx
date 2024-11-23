import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentUser } from "./reducer";

const Profile = () => {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const role = currentUser.role === "TA" ? "STUDENT" : currentUser.role;

  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    if (!currentUser) {
        navigate("/Kanbas/Account/Signin");
        return;
    }
    setProfile(currentUser);
  }, [currentUser, navigate]);
  
  return (
    <div id="wd-profile-screen" style={{ width: "400px" }}>
      <h1>Profile</h1>
      {profile && (
        <div>
          <input
            defaultValue={profile.username}
            id="wd-username"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            defaultValue={profile.password}
            id="wd-password"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <input
            defaultValue={profile.firstName}
            id="wd-firstname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            defaultValue={profile.lastName}
            id="wd-lastname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            defaultValue={profile.dob}
            id="wd-dob"
            type="date"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            defaultValue={profile.email}
            id="wd-email"
            className="form-control mb-2"
            onChange={ (e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            defaultValue={role}
            id="wd-role"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
