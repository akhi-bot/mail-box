import { Accordion } from "react-bootstrap";

import "./_mailsBody.scss";

import React from "react";
import MessageBox from "../MessageBox";

const MailsBody = (props) => {
  const { mailsInfo, searchScreen } = props;
  const { loading, mails, error } = mailsInfo;

  return (
    <Accordion defaultActiveKey="0" className="mailBody__mailDetails">
      {loading ? (
        <h2 className="mt-4 text-center">Loading...</h2>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {mails.length ? (
            mails.map((mail) => (
              <Accordion.Item
                eventKey={mail.id}
                key={mail.id}
                className="bg-dark"
              >
                <Accordion.Header
                  className={`bg-dark ${searchScreen && "search"}`}
                >
                  {searchScreen && (
                    <div className="userDetails">
                      <img
                        src="https://p.kindpng.com/picc/s/78-786678_avatar-hd-png-download.png"
                        alt=""
                        className="user-img"
                      />
                      <span className="name">User{mail.userId}</span>
                    </div>
                  )}
                  <div className="mail-info">
                    <span className="subject">{mail.subject}</span>
                    <span className="bg-secondary border border-dark tag ">
                      {mail.tag}
                    </span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <strong className="text-capitalize">{mail.subject} :</strong>
                  <p className="mt-1 text-capitalize">{mail.body}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))
          ) : (
            <MessageBox variant="danger">Not Found</MessageBox>
          )}
        </>
      )}
    </Accordion>
  );
};

export default MailsBody;
