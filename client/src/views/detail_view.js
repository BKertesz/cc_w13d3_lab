const PubSub = require('../helpers/pub_sub.js');

const DetailView = function (listView) {
this.listView = listView;
}


DetailView.prototype.createCountryDetailView = function (details) {
  // console.log(country)
  const countryName = document.createElement('h2');
  countryName.textContent = details.country.name;
  this.listView.appendChild(countryName);

  const countryPopulation = document.createElement('p');
  countryPopulation.textContent = `Population: ${details.country.population}`;
  countryName.appendChild(countryPopulation);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "💀";
  this.deleteCountry(deleteButton,details._id);

  const myLine = document.createElement('hr');
  this.listView.appendChild(myLine);

  countryName.appendChild(deleteButton);

}

DetailView.prototype.deleteCountry = function (deleteButton,id) {
  deleteButton.addEventListener('click',()=>{
    // console.log('This:',id)
    PubSub.publish('DetailView:country-delete',id);
  })


};





module.exports = DetailView;
