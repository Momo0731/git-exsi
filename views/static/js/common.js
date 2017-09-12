define(["jquery","template","cookie"],function($,template){
	$(function(){
		//用户名与头像渲染
		if(location.pathname != "/dashboard/login"){
			if(!$.cookie("PHPSESSID")){
				location.href="/dashboard/login"
			}
			var userinfo=JSON.parse($.cookie("userinfo"));

			$("#profile").html(template("profileTpl",userinfo));

		}

	//	登出功能
		$("#logout_btn").click(function(){
			$.ajax({
				url:"/api/logout",
				type:"post",
				success:function(data){
					if(data.code==200){
						location.href="/dashboard/login";
						$.removeCookie("userinfo");
					}
				}
			})
		})

	//	导航栏效果实现
		//1.显示子菜单
		$(".navs>ul>li>ul").parent().click(function(){
			$(this).children("ul").stop().slideToggle();
		})

		//2.1导航栏高亮显示
			$(".navs a").each(function(index,ele){
				if(location.pathname==$(ele).attr("href")){
					$(ele).addClass("active")
				}


		})


	})
})
