import {
  useLocation,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import Comments from "../components/comments/Comments";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getSingleQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log("match", match);
  console.log("params", params.quoteId);
  console.log("location", location);
  console.log("history", history);

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <NoQuotesFound />;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
