// JavaScript Document
function trackVisitors()
{
  var key = 'visits', value = 0, storage = window.localStorage;
  value = !storage.getItem(key)? 1: parseInt(storage.getItem(key)) + 1;
  storage.setItem(key, value);
  document.getElementById('visitors').innerHTML = value.toLocaleString();
}

function hideNotice()
{
  $("#notice").slideUp(100);  
}

function toggleNav ()
{
  $("#nav").slideToggle();
}

function toggleRibbon ()
{
  $("#ribbon").slideToggle();
}

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
