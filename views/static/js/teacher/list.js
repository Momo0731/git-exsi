/**
 * Created by Nicole on 2017/9/12.
 */
define(["jquery","template","bootstrap"],function($,template){
   $(function(){
     $.ajax({
       url:"/api/teacher",
       success:function(data){
         console.log(data);
        $("#teacher_list_tbody").html(template("teacher_list_tpl",data))

       }
     })

   })
})