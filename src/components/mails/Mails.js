import "./_mails.scss";

import React from "react";
import MessageBox from "../MessageBox";

const Mails = (props) => {
  const { mailTag, mailsInfo, goToMailBody } = props;
  const { loading, mails, error } = mailsInfo;
  return (
    <ul className="mails">
      {loading ? (
        <h2 className="mt-4 text-center">Loading...</h2>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {" "}
          {Array.from(new Set(mails.map((x) => x.userId))).map((userId) => (
            <li
              className="mails__list border border-dark px-md-4"
              key={userId}
              onClick={goToMailBody(mailTag, userId)}
            >
              <p className="mails__list__left">🕴 {`User ${userId}`}</p>
              <p className="mails__list__right">
                <span className="bg-secondary border border-dark">
                  {mails.filter((x) => x.userId === userId).at(-1)?.tag}
                </span>
                {mails.filter((x) => x.userId === userId).at(-1)?.subject} -{" "}
                {mails.filter((x) => x.userId === userId).at(-1)?.body}
              </p>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default Mails;
