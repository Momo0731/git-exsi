/**
 * Created by Nicole on 2017/9/12.
 */
define(["jquery","template","bootstrap"],function($,template){
  $(function(){
    //所有讲师数据页面渲染
    $.ajax({
      url:"/api/teacher",
      success:function(data){
        $("#teacher_list_tbody").html(template("teacher_list_tpl",data))
      }
    })

    //  查看讲师
    //  0.1查看讲师按钮时页面模板渲染的，因此需要事件委托
    $("#teacher_list_tbody").on("click",".check-info",function(){
      var id= $(this).parent("td").data("id");
      $.ajax({
        url:"/api/teacher/view",
        data:{
          tc_id:id,
        },
        success:function(data){
          if(data.code==200){
            $(".modal-dialog").html(template("check_teacher_tpl",data.result));
            //$("#teacherModal").modal("show");
          }
        }
      })

    })

//    注销与启用的切换
//     /tc_status==0  已启用
//     //tc_status==1  已注销

    $("#teacher_list_tbody").on("click",".btn-status",function(){
      var id =  $(this).parent("td").data("id");
      var status = $(this).data("status");
      var that =$(this);
      $.ajax({
        url:"/api/teacher/handle",
        data:{
          tc_id:id,
          tc_status:status,
        },
        success:function(data){
          if(data.code==200){
            that.data("status",data.result.tc_status);

            if(data.result.tc_status==0){
              that.removeClass("btn-success").addClass("btn-warning").text("注销");
            }else{
              that.removeClass("btn-warning").addClass("btn-success").text("启用");
            }
          }
        }
      })
    })




  })
})