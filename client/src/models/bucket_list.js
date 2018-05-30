const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const BucketList = function(url){
  this.url = url;
}

BucketList.prototype.bindEvents = function () {
  this.setupSelectListener();
  this.deleteCountryListener();
};

BucketList.prototype.setupSelectListener = function () {
  PubSub.subscribe('DropDownView:form-submited',(evt)=>{
    this.postNewCountry(evt.detail)
  })
};

BucketList.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((countrys) => {
    PubSub.publish('BucketList:data-loaded', countrys)
  })
  .catch(console.error);
};

BucketList.prototype.postNewCountry = function (country) {
  const request = new Request(this.url);
  request.post({country})
  .then((countrys)=>{
    PubSub.publish('BucketList:data-loaded',countrys);
  }).catch(console.error);
};

BucketList.prototype.deleteCountryListener = function(){
  PubSub.subscribe('DetailView:country-delete',(evt)=>{
    // console.log("This gonna work!")
    const request = new Request(this.url);
    request.delete(evt.detail).then((countrys)=>{
      PubSub.publish('BucketList:data-loaded', countrys);
    })
    .catch(console.error);
  })
}

module.exports = BucketList;
