const PubSub = require('../helpers/pub_sub.js');

const DetailView = function (listView) {
this.listView = listView;
}


DetailView.prototype.createCountryDetailView = function (country) {
  const countryName = document.createElement('h3');
  countryName.textContent = country.name;
  this.listView.appendChild(countryName);

  // const countryID = document.createElement('p');
  // countryID.textContent = country.id;
  // countryName.appendChild(countryID);
  // console.log("Original ID:",country._id);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "💀";
  this.deleteCountry(deleteButton,country._id);

  countryName.appendChild(deleteButton);

}

DetailView.prototype.deleteCountry = function (deleteButton,id) {
  deleteButton.addEventListener('click',()=>{
    // console.log('This:',id)
    PubSub.publish('DetailView:country-delete',id);
  })


};





module.exports = DetailView;
