// JavaScript Document
function trackVisitors()
{
  var key = 'visits', 
      value = 0, 
      storage = window.localStorage,
      getItem = storage.getItem(key);
  value = !getItem? 1: parseInt(getItem) + 1;
  storage.setItem(key, value);
  $('#visitors').text(value.toLocaleString());
}

function hideNotice()
{
  $('.notice').slideUp(100);  
}

function getLogo()
{
  var h1 = '<h1 class="typeface">airtaxi.ng <sup>&reg;</sup></h1>',
      a = '<a href="index.html" title="Home">'+ h1 +'</a>';
  $('.logo').html(a);
}

function toggleNav ()
{
  var getIcon = $('.navicon').html(), icon;
  icon = getIcon == '×'? '&equiv;': '&times;';
  $('.navicon').html(icon);
  $('nav').slideToggle();
}

function toggleRibbon ()
{
  $('header .secondary').toggleClass('active');
  $('.ribbon ul').slideToggle();

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
