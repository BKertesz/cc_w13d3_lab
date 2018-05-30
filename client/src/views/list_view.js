const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js');

const ListView = function (view) {
  this.view = view;
}

ListView.prototype.bindEvents = function() {
  this.setUpListener();
};

ListView.prototype.setUpListener = function () {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    this.handleList(evt.detail)
  });
};

ListView.prototype.handleList = function (countrys) {
  this.view.innerHTML = '';
  countrys.forEach((country) => {
    const detailView = new DetailView(this.view)
    detailView.createCountryDetailView(country)
  });
};




module.exports = ListView;
