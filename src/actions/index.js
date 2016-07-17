
import fetch from 'isomorphic-fetch';

export const RESIVE_RESUME = 'RESIVE_RESUME';

export function resiveResume(json) {
  console.log('Get resume');
  return {
    type: RESIVE_RESUME,
    resume: json
  };
}

export function fetchResume() {
  return dispatch => {
    console.log('dispatch');
    return fetch('/data/resume.json')
      .then(
        response => response.json(),
        err => console.log(err)
      )
      .then(json => dispatch(resiveResume(json)));
  };
}
