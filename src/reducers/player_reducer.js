const initialState = { isPlaying: false };

export default function(state = initialState, action) {
  console.log({ action });
  switch (action.type) {
    case "PLAY_SONG":
      return { ...state, isPlaying: true }; //... spread operator takes old state object and creates brand new object with new isPlaying value
    case "PAUSE_SONG":
      return { ...state, isPlaying: false };
    default:
      return state;
  }
}
