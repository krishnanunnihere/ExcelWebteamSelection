
function showData(){
  let title = document.getElementById('firstname').value;
  let body = document.getElementById('lastname').value;

	fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({title:title, body:body})
  })
  .then(response => response.json())
  .then(data => {
    window.alert(JSON.stringify(data));
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
}