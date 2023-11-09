const API_KEY = '31eef68a-06db-4b20-983b-10402f9533f3';
const USERNAME = 'nareshblogs';

const apiUrl = 'https://api.hashnode.com/v1/@nareshblogs/stories';
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';


function jsonp(url, callbackName) {
    const script = document.createElement('script');
    script.src = `${url}?callback=${callbackName}`;
    document.body.appendChild(script);
  }
  
  function processData(data) {
    console.log(data);
  }
  
  jsonp(apiUrl, 'processData');
  




// fetch( corsProxyUrl + apiUrl, {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ${API_KEY}`
//   }
// })
// .then(response => response.json())
// .then(data => {
//   // Process the retrieved blog posts data
//   console.log(data);
// })
// .catch(error => {
//   // Handle errors
//   console.error('Error:', error);
// });