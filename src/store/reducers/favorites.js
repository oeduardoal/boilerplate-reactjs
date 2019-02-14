const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'facebook/react',
          description: 'lorem impsur dolar',
          url: 'https://github.com/babel/babel-eslint/issues/487',
        },
      ];
    default:
      return state;
  }
}
