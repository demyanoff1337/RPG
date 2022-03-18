import { allPeople } from '../actions/peopleActions';

export const showAll = (mail) => {
  return async (dispatch) => {
    const response = await fetch('/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mail }),
    });
    // dispatch(allPeople(img.data[0].url));   
  };
};
