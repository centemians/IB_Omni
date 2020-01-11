import axios from 'axios';
import {apiRequest} from './utils';

async function getStores(city, locality) {
  //const json = await apiRequest(`/customer/search-shopkeepers/city/${city}/locality/${locality}`);
  fetch('https://api.myjson.com/bins/13qfeu')
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => console.log('error', error.message));
  // const json = await response.json();
}

// function getStores() {
//   return fetch('https://api.myjson.com/bins/13qfeu')
//     .then(response => response.json())
//     .then(responseJson => {
//       console.log(responseJson);
//       return responseJson;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

export default {
  getList: getStores,
};
