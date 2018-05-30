const DropDownView = require('./views/drop_down_view.js');
const BucketList = require('./models/bucket_list.js');
const ListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded',()=>{
  const listViewDOM = document.querySelector('#list-view');
  const listView = new ListView(listViewDOM);
  listView.bindEvents();

  const bucketListUrl = 'http://localhost:3000/api/bucketList'
  const bucketList = new BucketList(bucketListUrl);
  bucketList.bindEvents();
  bucketList.getData();

  const dropDownForm = document.querySelector('#drop-down-view');
  // console.log(dropDownForm);
  const dropDownView = new DropDownView(dropDownForm);
  dropDownView.bindEvents();
})
