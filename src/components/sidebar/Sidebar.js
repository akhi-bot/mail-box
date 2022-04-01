import React from "react";
import "./_sidebar.scss";
import { AiFillFile } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { MdInbox, MdMail } from "react-icons/md";
import { RiSpam2Fill } from "react-icons/ri";

import { NavLink } from "react-router-dom";

const Sidebar = ({ toggleSidebar, handlerToggleSidebar }) => {
  return (
    <nav
      className={`sidebar ${toggleSidebar && "open"}`}
      onClick={() => handlerToggleSidebar(false)}
    >
      <NavLink
        to="/mail/inbox?"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        <li>
          <MdInbox size={23} />
          <span>Inbox</span>
        </li>
      </NavLink>

      <NavLink
        to="/mail/draft"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        <li>
          <AiFillFile size={23} />
          <span>Drafts</span>
        </li>
      </NavLink>
      <NavLink
        to="/mail/all"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        <li>
          <MdMail size={23} />
          <span>All Mail</span>
        </li>
      </NavLink>
      <NavLink
        to="/mail/spam"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        <li>
          <RiSpam2Fill size={23} />
          <span>Spam</span>
        </li>
      </NavLink>
      <NavLink
        to="/mail/trash"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        <li>
          <FaTrash size={23} />
          <span>Trash</span>
        </li>
      </NavLink>
    </nav>
  );
};

export default Sidebar;
