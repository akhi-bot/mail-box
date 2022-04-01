import React, { useState } from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch, AiFillSetting } from "react-icons/ai";
import { MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({ handlerToggleSidebar }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      navigate(`/search?q=${input}`);
      setInput("");
    }
  };
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handlerToggleSidebar()}
      />

      <img
        src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo-500x281.png"
        alt=""
        className="header__logo"
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <AiFillSetting size={28} />
        <MdApps size={28} />
        <img
          src="https://w7.pngwing.com/pngs/954/328/png-transparent-computer-icons-user-profile-avatar-heroes-head-recruiter-thumbnail.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
