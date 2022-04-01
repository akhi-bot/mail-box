import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MailsBody from "../../components/mailBody/MailsBody";
import { searchMails } from "../../redux/actions/searchAction";

const SearchScreen = () => {
  const searchedMails = useSelector((state) => state.searchMails);
  console.log(searchedMails);
  const input = useSearchParams()[0].get("q");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMails(input));
  }, [dispatch, input]);

  return (
    <>
      <MailsBody searchScreen mailsInfo={searchedMails} />
    </>
  );
};

export default SearchScreen;
