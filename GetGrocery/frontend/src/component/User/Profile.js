import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
        if (isAuthenticated === false) {
            history.push("/login");
        }
    }, [history, isAuthenticated]);
    return (
        <Fragment>
            <MetaData title={`${user.name}'s Profile`} />
            <div className="profileContainer">
                <div>
                    <h1>My Profile</h1>
                    <img src={user.avatar.url} alt={user.name} />
                    <br></br><br></br><br></br><br></br><br></br>
                    <div>
                        <h4>Full Name</h4>
                        <p>{user.name}</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>{user.email}</p>
                    </div>


                    <div>
                        <Link to="/orders">My Orders</Link>
                        <Link to="/password/update">Update Password</Link>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default Profile;
