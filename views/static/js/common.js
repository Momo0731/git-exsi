define(["jquery","template","cookie"],function($,template){
	$(function(){
		//�û�����ͷ����Ⱦ
		if(location.pathname != "/dashboard/login"){
			if(!$.cookie("PHPSESSID")){
				location.href="/dashboard/login"
			}
			var userinfo=JSON.parse($.cookie("userinfo"));

			$("#profile").html(template("profileTpl",userinfo));

		}

	//	�ǳ�����
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

	//	������Ч��ʵ��
		//1.��ʾ�Ӳ˵�
		$(".navs>ul>li>ul").parent().click(function(){
			$(this).children("ul").stop().slideToggle();
		})

		//2.1������������ʾ
			$(".navs a").each(function(index,ele){
				if(location.pathname==$(ele).attr("href")){
					$(ele).addClass("active")
				}


		})


	})
})
