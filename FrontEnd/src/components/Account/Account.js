/**
 * Filename: Account.js
 * Description: Allows user to view their own profile and friend profiles
 */
import "./Account.css";
import "./Sidebar.js";
import React from "react";
import Sidebar from "./Sidebar";
import UserPost from "../Misc/CustomComponents/UserPost";
import "../Misc/CustomComponents/UserPost";
import useFetch from "../../hooks/useFetch";
import Header from "../Misc/CustomComponents/Header";

const Account = () => {
  const userID = window.localStorage.getItem("userID");
  const { data: post } = useFetch(`/api/v1/posts/all/${userID}`);
  const {
    data: profile,
    isPending: profileIsPending,
    error: profileError,
  } = useFetch(`/api/v1/profiles/${userID}`);

  return (
    <div className="account-page">
      <div className="header-container">
        {profileIsPending ? "..." : <Header />}
      </div>
      <div className="account-main">
        {profileIsPending ? (
          "..."
        ) : (
          <>
            <Sidebar profile={profile} />
          </>
        )}
        <div className="posts-container">
          {post && post.map((item, i) => <UserPost post={item} key={i} />)}
        </div>
      </div>
    </div>
  );
};

export default Account;
