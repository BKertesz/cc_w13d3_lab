const PubSub = require('../helpers/pub_sub.js');

const DropDownView = function(form){
  this.form = form;
}

DropDownView.prototype.bindEvents = function () {
  // console.log(this.form);
  this.form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    // console.log(evt.target.country.value)
    PubSub.publish('DropDownView:form-submited',evt.target.country.value);
  })
};



module.exports = DropDownView;
