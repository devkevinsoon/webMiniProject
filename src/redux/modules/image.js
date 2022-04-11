import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import "moment";

import { storage } from "../../shared/firebase";

import { apis } from "../../shared/api";

// actions
const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";
// const DELETE_PREVIEW = "DELETE_PREVIEW";

// action creators
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
// const deletePreview = createAction(DELETE_PREVIEW, () => {});

// initial state
const initialState = {
  image_url: "",
  uploading: false,
  preview: null,
};


const uploadImageApi = (image) => {
  return function (dispatch, getState, { history }){
    dispatch(uploading(true));

    // firebase에 이미지 업로드 하기 위해서 filed이름 포함한 참조 해주어야함.
    const _upload = storage.ref(`images/${image.name}`).put(image);
    
    // 업로드하기
    _upload.then((snapshot) => {
      console.log(snapshot);

      // 업로드한 파일의 다운로드 경로를 가져오기
      snapshot.ref.getDownloadURL().then((url) => {
        console.log("url : ",url);
        apis.uploadImageUrl(url);
        dispatch(uploadImage(url));
        console.log("url : ",url)
      });
    }).catch(err => {
        dispatch(uploading(false));
    });
  };
};

// function uploadImageFB(image) {
//   return function (dispatch, getState, {history}) {
    
//     dispatch(uploading(true));
    
//     console.log(`images/${new Date().getTime()}_${image.name}`);
//     //const _upload = storage.ref(`images/${image.name}`).put(image);

//     // 업로드하기
//     // _upload.then((snapshot) => {
//     //   console.log(snapshot);

//     //   // 업로드한 파일의 다운로드 경로를 가져오기
//     //   snapshot.ref.getDownloadURL().then((url) => {
//     //     console.log(url);
//     //     dispatch(uploadImage(url));
//     //   });
//     // }).catch(err => {
//     //     dispatch(uploading(false));
//     // });
//   };
// }


// reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),

    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),

    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        console.log("preview: ", action);
        draft.preview = action.payload.preview;
        console.log("preview: ", action.payload.preview);
      }),

    // [DELETE_PREVIEW]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.preview = null;
    //   }),
  },
  initialState
);

const actionCreators = {
  uploadImage,
  uploadImageApi,
  setPreview,
  // deletePreview,
};

export { actionCreators };