const res = fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => {
    return res.json();   
  })
  .then(data => {
    console.log(data);   
  })
  .catch(err => console.log(err));

console.log(res); 
