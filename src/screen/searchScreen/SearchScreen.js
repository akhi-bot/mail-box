import { useSelector } from "react-redux";
import MailsBody from "../../components/mailBody/MailsBody";

const SearchScreen = () => {
  const searchMails = useSelector((state) => state.searchMails);
  console.log(searchMails);

  return (
    <>
      <MailsBody searchScreen mailsInfo={searchMails} />
    </>
  );
};

export default SearchScreen;
