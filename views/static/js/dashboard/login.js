
define(["jquery","cookie"],function($){
  $(function(){
    $("form").submit(function(e){
      var userName = $("#tc_name").val();
      var pass = $("#tc_pass").val();

      if(userName.trim()==""){
        alert("请输入用户名");
        return false;
      }
      if(pass==""){
        alert("请输入密码");
        return false;
      }

      $.ajax({
        url:"/api/login",
        type:"post",
        data:{
          tc_name:userName,
          tc_pass:pass
        },
        success:function(data){
          if(data.code==200){
//                        cookie本地存储只能存储字符串
            $.cookie("userinfo",JSON.stringify(data.result),{expires:365,path:"/"});
            location.href ="/";
          }
        }
      })
      return false;
    })
  })
})
