// script.js

const trips = [];
const matchesList = document.getElementById('matchesList');

document.getElementById('tripForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;
  const space = parseInt(document.getElementById('space').value);
  
  trips.push({ name, from, to, date, space });
  alert('Trip submitted successfully!');
  this.reset();
});

document.getElementById('itemForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const itemName = document.getElementById('itemName').value;
  const fromItem = document.getElementById('fromItem').value;
  const toItem = document.getElementById('toItem').value;
  const weight = parseInt(document.getElementById('weight').value);

  const matches = trips.filter(trip => trip.from === fromItem && trip.to === toItem && trip.space >= weight);

  matchesList.innerHTML = matches.length > 0 ? 
    matches.map(match => `<li>${match.name} can deliver your ${itemName} on ${match.date}.</li>`).join('') :
    '<li>No matches found.</li>';
});
