import React, { useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MailsBody from "../../components/mailBody/MailsBody";
import { fetchUserMails } from "../../redux/actions/mailsAction";
import "./_mailBodyScreen.scss";

const MailBodyScreen = () => {
  const { mailTag, userId } = useParams();
  const dispatch = useDispatch();
  const userMails = useSelector((state) => state.userMails);

  useEffect(() => {
    dispatch(fetchUserMails(mailTag, userId));
  }, [dispatch, mailTag, userId]);

  return (
    <div className="mailBodyScreen">
      <div className="mailBodyScreen__userDetail">
        <img
          src="https://p.kindpng.com/picc/s/78-786678_avatar-hd-png-download.png"
          alt=""
        />
        <span> User-{userId}</span>
        <FaArrowAltCircleRight size={26} />
      </div>
      <MailsBody mailsInfo={userMails} />
    </div>
  );
};

export default MailBodyScreen;
