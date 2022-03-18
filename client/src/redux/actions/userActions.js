export const getUser = (word) => {
  return {
    type: 'USER',
    payload: word,
  };
};
