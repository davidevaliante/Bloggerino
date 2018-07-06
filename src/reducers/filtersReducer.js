//------------------------------------------------------------FILTER REDUCER-------------
const defaultFilters = {
  text: '',
  sortBy: 'createdAt',
  startDate: 0,
  endDate: Infinity,
  ordering : 'newest'
};
const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case 'TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'START_DATE_FILTER':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'END_DATE_FILTER':
      return {
        ...state,
        endDate: action.endDate
      }
    case 'DATE_SORTING':
      return {
        ...state,
        ordering : action.ordering
      }
    default:
      return state;
  }
};

export default filtersReducer;
