import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import "moment";

// actions
const SET_PREVIEW = "SET_PREVIEW";

// action creators
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// initial state
const initialState = {
  uploading: false,
  preview: "https://pbs.twimg.com/media/DennlYdV4AAkkQo?format=jpg&name=medium",
};

// reducer
export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview.result;
      }),
  },
  initialState
);
const actionCreators = {
  setPreview,
};
export { actionCreators };