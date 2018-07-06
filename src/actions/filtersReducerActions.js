export const setFilterByText = (text = '') => ({type: 'TEXT_FILTER', text: text});

export const setStartDate = (startDate = 0) => ({type: 'START_DATE_FILTER', startDate: startDate});

export const setEndDate = (endDate = 0) => ({type: 'END_DATE_FILTER', endDate: endDate});

export const setDateSordingOrder = (ordering = 'newest')=>({type:'DATE_SORTING', ordering:ordering})
