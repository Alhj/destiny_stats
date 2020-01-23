interface platformTypes {
  type: string
}

const platformNumberReducer = (state:number = 1, action: platformTypes) => {
  switch (action.type) {
    case 'STEAM':
      state = 3;
      return state;
    case 'PS4':
      state = 2;
      return state;
    case 'XBOX': 
      state = 1;
      return state;
    default: 
      return state;
  };
}

export default platformNumberReducer;