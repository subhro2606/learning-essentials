/*Can also be written as module.export.getDate=function()*/
exports.getDate=function(){
  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  return new Date().toLocaleString('en-US', options);
};
/*Can also be written as module.export.getDate=function()*/
exports.getDay=function(){
  let options = {
    weekday: 'long'
  };
  return new Date().toLocaleString('en-US', options);
};
