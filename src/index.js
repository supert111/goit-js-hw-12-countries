//import './styles.css';

//{name}
fetch('https://restcountries.eu/rest/v2/name/Colombia')
.then(response => {
   // console.log(response.json());

    return response.json();
  })
  .then(country => {
      console.log(country);
  })
  .catch(error => {
      console.log(error);
  });
