const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const DropDownView = function(form){
  this.form = form;
  this.allData = null;
}

DropDownView.prototype.bindEvents = function () {
  // console.log(this.form);
  this.form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    // console.log(evt.target.country.value)
    const country = this.getCountryData(evt.target.country.value)[0];
    // console.log(country)
    PubSub.publish('DropDownView:form-submited',country);
  })
  this.getData();
};

DropDownView.prototype.getData = function () {
  const api = 'https://restcountries.eu/rest/v2/all'
  const request = new Request(api);
  request.get()
  .then((countrys)=>{
    // console.log(countrys);
    this.allData = countrys;
    this.populate(this.allData)
  })

};

DropDownView.prototype.populate = function (countrys) {
  const dropDown = document.querySelector('#country')
  countrys.forEach((country)=>{
    // console.log(country);
    const newOption = document.createElement('option');
    newOption.textContent = country.name;
    dropDown.appendChild(newOption);
  })
};

DropDownView.prototype.getCountryData = function (name) {
  return this.allData.filter((country) => country.name == name)
};



module.exports = DropDownView;
