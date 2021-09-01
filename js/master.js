// JavaScript Document
function getCities(data)
{
  var cities = data.split(/\r\n|\n/);
  var e, city, options = '';
  for (let i in cities) {
    e = cities[i].split(',');
    city = e[0].toUpperCase();
    options += '<option value="'+city+'" />';
  }
  document.getElementById('hint').innerHTML = options;
}