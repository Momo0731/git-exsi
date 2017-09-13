/**
 * Created by Nicole on 2017/9/13.
 */
define(["jquery","template","utils","form"],function($,template,utils){
  $(function(){
    var id = utils.getQueryObj().id;
    console.log(id);

    //  由location判断添加还是编辑
    if(id){
      //  编辑
      $.ajax({
        url:"/api/teacher/edit",
        data:{
          tc_id:id,
        },
        success:function(data){
          if(data.code==200){
            data.result.title="讲师编辑";
            data.result.btnText="保 存";
            data.result.url="/api/teacher/update"
            $(".body,.teacher").html(template("teacher_add_edit_tpl",data.result));
          }
        }
      })

    }else {
      //  添加
      var obj = {
        url: "/api/teacher/add",
        title: "讲师添加",
        btnText: "添 加"
      }
      $(".body,.teacher").html(template("teacher_add_edit_tpl", obj));

    }
    //  表单提交事件委托，
      $(".body,.teacher").on("submit","form",function(){
        $(this).ajaxSubmit({
          success:function(data){
            if(data.code==200){
              location.href="/teacher/list"
            }
          }
        })
        return false;
      })


  })
})