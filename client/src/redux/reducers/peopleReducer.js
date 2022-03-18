const peopleReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ALL_PEOPLE':
      return payload;
    case 'ALL_HEDGEHOGS':
      return payload;
    case 'ALL_BEAVERS':
        return payload;
    default:
      return state;
  }
};

export default peopleReducer;
