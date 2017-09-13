/**
 * Created by Nicole on 2017/9/12.
 */
define(function(){
  return{
    getQueryObj:function(){
      var sreach = location.search;
      //?id=889&name=hehe&age=18
      sreach=sreach.substr(1).split("&");
      var result={};
      for (var i = 0; i < sreach.length; i++) {
        result[sreach[i].split("=")[0]]=sreach[i].split("=")[1];
      }
      return result;
    }
  };
})