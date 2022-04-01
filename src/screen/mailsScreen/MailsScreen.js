import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMails } from "../../redux/actions/mailsAction";
import Mails from "../../components/mails/Mails";

const MailScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mailTag } = useParams();
  const mailsInfo = useSelector((state) => state.mails);

  useEffect(() => {
    dispatch(fetchMails(mailTag));
  }, [dispatch, mailTag]);

  const handleClick = (tag, userId) => () => {
    navigate(`/mail/${tag || "all"}/${userId}`);
  };

  return (
    <>
      <Mails
        mailsInfo={mailsInfo}
        goToMailBody={handleClick}
        mailTag={mailTag}
      />
    </>
  );
};

export default MailScreen;
