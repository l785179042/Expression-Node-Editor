

window.onload = function(){

	var can = document.getElementById("canvas");

	//为create按钮添加事件
	var btn_cr = document.getElementById("create");
	btn_cr.addEventListener("click",function(){
		if (can.childNodes[1] == undefined)
			createFrame();
	});

	//为addition按钮添加事件
	var btn_ad = document.getElementById("addition");
	btn_ad.addEventListener("click",function(){
		if (can.childNodes[1] != undefined)
		{
			addNode();
		}
	});

	//为delete按钮添加事件
	var btn_de = document.getElementById("delete");
	btn_de.addEventListener("click",function(){
		if (can.childNodes[1] != undefined)
		{
			var re = confirm("Do you want to delete the current property window?");
			if (re)
				removeNode();
		}
	});
	
	//为can注册点击事件
	can.addEventListener("mousedown",function(e){
		if (e.target.getAttribute("class") == "rect_f")
		{
			chaAtr(e.target);
			outPro(e.target);
		}

		else if(e.target.tagName == "svg")
		{
			defAtr(e.target);
			outPro(e.target);			
		}

	});

	document.addEventListener("click",function(e){
		if(e.target.tagName == "LI")
		{
			var n = new Node(null,null);
			var name = e.target.innerHTML;
			if(e.target.getAttribute("sm") == undefined && e.target.getAttribute("ssm") == undefined)
			{
				var f = n.insert(name,ev);
				addNode_l(e.target,n,f);
			}
		}
	});

	//为节点对象添加事件
	document.addEventListener("mousedown",function(e){
	//拖拽移动
		if (e.target.getAttribute("class") == "rect_m" || e.target.getAttribute("class") == "name")
		{
			drag(e.target,e);
		}
	//拖拽缩放
		if (e.target.getAttribute("class") == "cir_d")
		{
			scale(e.target,e);
		}
	//鼠标中键移动画布
		if (e.target.getAttribute("id") == "frame")
		{
			move(e.target,e)
		}
	});

	//浏览器缩放时，动态的修改svg的viewBox的大小
	window.onresize = function(){
		if(document.getElementById("frame"))
		{
			var svg_f = document.getElementById("frame");
			svg_f.setAttribute("viewBox","0 0 "+getSize(svg_f)[0]+" "+getSize(svg_f)[1]);
			var cir = document.getElementById("output");
			cir.setAttribute("cx","100%");
			cir.setAttribute("cy","50%");
		}
	}

	//按下delete删除选中的节点
	document.onkeydown = function(e){
		if(e.keyCode == 46)
		{
			var g = document.getElementsByTagName("g");
			if(g.length != 0)
			{
				for (var i=0;i<g.length;i++)
				{
					if (g[i].getAttribute("id") != "port")
					{
						var rect = g[i].getElementsByClassName("rect_s")[0];
						if (rect.getAttribute("stroke") == "#FF8600")
							g[i].parentNode.removeChild(g[i]);

					}

				}
			}
		}
	}

	//鼠标右键菜单(根据屏幕的位置动态的修改菜单的位置)
	var oMenu = document.getElementById("menu");
	var ev = null;
	document.oncontextmenu = function(e){
		hideMenu();
		if(e.target.tagName == "svg")
		{
			ev = e;
			oMenu.style.display = "block";
			oMenu.style.left = e.clientX + "px";
			oMenu.style.top = e.clientY + "px";
			if(e.clientX > document.body.offsetWidth - 150)
				oMenu.style.left = e.clientX - 150 + "px";
			return false;
		}			
	}
	//二级菜单显示
	document.onmouseover = function(e){
		if(e.target.tagName == "LI")
			showMenu(e.target,e);
	}

	document.onclick = function(){
		var aMenu = document.getElementsByClassName("menu");
		for (var i=0;i<aMenu.length;i++)
			aMenu[i].style.display = "none";
	}


	var oBtn = document.getElementById("generate");
	oBtn.onclick = function(){
		alert(addInPort(rn.random));
	}



















}







