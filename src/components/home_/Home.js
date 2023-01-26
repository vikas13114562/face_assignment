import React, { useEffect, useState } from "react";
import "./home.css";
import Nav from "./Nav";
import User from "./User";

export default function Home() {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(0);

  const fetchMore = () => {
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      if (page <= 24) setPage((prev) => prev + 1);
    }, 1000);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      fetchMore();
    }
  };

  useEffect(() => {
    async function getUser() {
      let temp = await fetch("https://randomuser.me/api/?results=500");
      let data = await temp.json();
      setUser(data.results);
    }
    getUser();
  }, []);

  return (
    <div className="home">
      <Nav />

      <div className="home-container">
        {user &&
          user.slice((0 + page) * 20, (1 + page) * 20).map((ele, ind) => {
            return <User key={ele.email} userDetail={ele} />;
          })}
      </div>
    </div>
  );
}
