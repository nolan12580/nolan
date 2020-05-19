$(function(){
	//导航
	$.ajax({
		url:"http://www.qhdlink-student.top/test/nav.php",
		dataType:"json",
		type:"get",
		success:function(data){
			for(var i in data){
				var name_m=data[i].title_m;
				var href_m=data[i].addr_m;
				if(data[i].type=="0"){
					$(".tab").append("<li><a href='"+href_m+"'>"+name_m+"</a></li>");
				}else{
					var c_list="";
					for(var j in data[i].children_m){
						c_list+=("<li><a href='"+data[i].children_m[j].addr_c+"'>"+data[i].children_m[j].title_c+"</a></li>")
					}
					
					$(".tab").append("<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>"+name_m+"<span class='caret'></span></a><ul class='dropdown-menu'>"+c_list+"</ul></li>");
				}
			}
		}
	});
	//banner
	$.ajax({
		url:"http://www.qhdlink-student.top/student/banner.php",
		dataType:"json",
		type:"post",
		data:{
			username:"zyp",
			userpwd:"123456",
			userclass:"56",
			type:"4",
		},
		success:function(data){
			for(var i in data){
				if(i=="0"){
					$(".carousel-inner").append("<div class='item active'><img src='http://www.qhdlink-student.top/"+data[i].path_banner+"'></div>");
				}else{
					$(".carousel-inner").append("<div class='item'><img src='http://www.qhdlink-student.top/"+data[i].path_banner+"'></div>")
				}
			}
		}
	})
	//菜品
	$.ajax({
		url:"http://www.qhdlink-student.top/student/coacha.php",
		dataType:"json",
		type:"post",
		data:{
			username:"zyp",
			userpwd:"123456",
			userclass:"56",
			type:"4",
		},
		success:function(data){
			for(var i in data){
					$(".eatmenu>.img").eq(i).append("<img src='http://www.qhdlink-student.top/"+data[i].path_coach+"'>")
					$(".eatmenu>.text").eq(i).append("<p class='cpname left'>菜品名称："+data[i].name_coach+" </p>")
					$(".eatmenu>.text").eq(i).append("<p class='cpid right'>菜品编号："+data[i].id_coach+" </p>")
					$(".eatmenu>.text").eq(i).append("<p class='maketime left'>生产日期："+data[i].dage_coach+" </p>")
					$(".eatmenu>.text").eq(i).append("<p class='eattime right'>保质期至："+data[i].tage_coach+" </p>")
					var starnum=data[i].evaluate_coach;
					var c_star="<span class='glyphicon glyphicon-star' aria-hidden='true'></span>";
					var b_star=""
					for(var j=0;j<starnum;j++){
						b_star+=c_star;
					}
					$(".eatmenu>.text").eq(i).append("<button type='button' class='btn btn-default btn-sm left'>菜品星级："+b_star+"</button>")
					$(".eatmenu>.text").eq(i).append("<p class='salemoney right'>惊爆价: <span>"+data[i].type_coach+"</span>元 </p>")
					
			}
		}
	})
	//新闻详情页面
	var m=decodeURI(location.search);
	var sm=m.slice(1);
	$.ajax({
		url:"http://www.qhdlink-student.top/student/newsinfo.php",
		dataType:"json",
		type:"post",
		data:{
			username:"zyp",
			userpwd:"123456",
			userclass:"56",
			type:"4",
			m:sm,
		},
		success:function(data){
			$(".h1").html(data[0].title_news)
			$(".newlist").append("<p class='newsinfo'>"+data[0].info_news+"</p>")
			$(".newlist").append("<p class='newsinfo right'>"+data[0].time_news+"报道</p>")
		}
	})
})