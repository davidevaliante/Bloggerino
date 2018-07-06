// ------------------------------------------------------POST REDUCER--------------------
const defaultPostList = [];
const postListReducer = (state = defaultPostList, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ];

    case 'EDIT_POST':
      return state.map((post) => {
        if (post.id === action.id) {
          return [
            ...state,
            action.updated_fields
          ]
        } else {
          return post
        }
      });

    case 'REMOVE_POST':
      console.log(`Removed post with id: {action.id_to_remove}`);
      return state.filter(({id}) => id !== action.id_to_remove);

    default:
      return state;
  }
};

export default postListReducer;
