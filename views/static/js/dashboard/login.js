
define(["jquery","cookie"],function($){
  $(function(){
    $("form").submit(function(e){
      var userName = $("#tc_name").val();
      var pass = $("#tc_pass").val();

      if(userName.trim()==""){
        alert("�������û���");
        return false;
      }
      if(pass==""){
        alert("����������");
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
//                        cookie���ش洢ֻ�ܴ洢�ַ���
            $.cookie("userinfo",JSON.stringify(data.result),{expires:365,path:"/"});
            location.href ="/";
          }
        }
      })
      return false;
    })
  })
})
