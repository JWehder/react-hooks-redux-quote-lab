// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote 
  };
};

export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id
  }
}

export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id
  }
}

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {

  switch(action.type) {
  case "quotes/add":
    return [...state, action.payload]

  case "quotes/upvote":
    console.log(state)
    return state.map((quote) => {
      return quote.id === action.payload ? {...quote, votes: quote.votes + 1} : quote
    })

  case "quotes/downvote":
    return state.map((quote) => {
      return (quote.id === action.payload && quote.votes > 0) ? {...quote, votes: quote.votes - 1} : quote
    })

  case "quotes/remove":
    if (state.length > 0) {
      return state.filter((quote) => quote.id !== action.payload)
    } else {
      return state
    }
    

  default:
    return state;
  }
  
}
