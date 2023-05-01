import React from "react";
import { useDispatch } from "react-redux";
import { upvoteQuote, downvoteQuote, removeQuote } from "./quotesSlice";


function QuoteCard(props) {
  const dispatch = useDispatch();

  function handleUpvoteClick(id) {
    dispatch(upvoteQuote(id))
  }

  function handleDownvoteClick(id) {
    dispatch(downvoteQuote(id))
  }

  function handleRemoveClick(id) {
    dispatch(removeQuote(id))
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{props.quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" onClick= {() => handleUpvoteClick(props.quote.id)} className="btn btn-primary">
              Upvote
            </button>
            <button type="button" onClick= {() => handleDownvoteClick(props.quote.id)} className="btn btn-secondary">
              Downvote
            </button>
            <button type="button" onClick={() => handleRemoveClick(props.quote.id)} className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
