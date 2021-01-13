const initialState = {
  records: {
    profiles: []
  },
  size: 0
}

export const filterReducer = (state=initialState, action) => {
  const {
    payload,
    type
  } = action;
  switch (type) {
    case 'GENDER': {
      const {
        value,
        data
      } = payload;
      if (value && data?.records) {
        const filteredItems = data?.records?.profiles
          .filter((item) => (
            item?.Gender === value
          ));
        state = {
          records: {
            profiles: filteredItems
          },
          size:filteredItems.length
        };
      } else{
        state = data
      }
      return state;
    }
    case 'PAYMENT_TYPE': {
      const {
        value,
        data
      } = payload;
      if (value &&  data?.records) {
        const filteredItems = data?.records?.profiles
          .filter((item) => (
            item?.PaymentMethod === value
          ));
        state = {
          records: {
            profiles: filteredItems
          },
          size:filteredItems.length
        };
      }else {
        state = data
      }
      return state;
    }
    case 'SEARCH_QUERY': {
      const {
        value,
        data
      } = payload;
      if (value &&  data?.records) {
        const filteredItems = data?.records?.profiles
          .filter((item) => (
            item?.FirstName.toLowerCase().includes(value.toLowerCase()) ||
            item?.LastName.toLowerCase().includes(value.toLowerCase()) ||
            item?.UserName.toLowerCase().includes(value.toLowerCase()) 
          ));
        state = {
          records: {
            profiles: filteredItems
          },
          size:filteredItems.length
        };
      }else {
        state = data
      }
      return state;
    }
    case 'GET_ALL':
      state = payload;
      return state;
    default:
      return state;
  }
};