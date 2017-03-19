
var SVG_NS = 'http://www.w3.org/2000/svg';
var XLINK_NS = "http://www.w3.org/1999/xlink";

function createFrame(){
	var svg_f = document.createElementNS(SVG_NS, 'svg');
	canvas.appendChild(svg_f);
	svg_f.setAttribute("width","100%");
	svg_f.setAttribute("height","100%");
	svg_f.setAttribute("id","frame");
	svg_f.setAttribute("viewBox","0 0 "+getSize(svg_f)[0]+" "+getSize(svg_f)[1]);

	insertDef();

	var cir = document.createElementNS(SVG_NS,"circle");
	cir.setAttribute("cx","100%");
	cir.setAttribute("cy","50%");
	cir.setAttribute("r","8px");
	cir.setAttribute("stroke","#191A1B");
	cir.setAttribute("stroke-width","1px");
	cir.setAttribute("fill","#E8A01C");
	cir.setAttribute("id","output");
	svg_f.appendChild(cir);
	return svg_f;
}

//插入一个def标签及其内容
function insertDef(){
	var frame = document.getElementById("frame");
	var def = document.createElementNS(SVG_NS,"def");
	var str = '<g id = "port">' + 
			  '<circle r="6px" stroke-width="1px" fill="none" ></circle>' + 
			  '<circle r="4px" stroke="none" ></circle>'+
			  '</g>';
	def.innerHTML = str;
	frame.appendChild(def);
}


function addNode(){
	var n = new Node('thisComp.thisLayer.property("hehe")',null);
	n.insert_a();
}

function removeNode(){
	var can = document.getElementById("canvas");
	var svg = document.getElementsByTagName("svg")[0];
	can.removeChild(svg);

}

//获取对象的实际尺寸大小
function getSize(node){
	var w = window.getComputedStyle(node,null).width;
	var width = parseInt(w);
	var h = window.getComputedStyle(node,null).height;
	var height = parseInt(h);
	return [width,height];
}


//鼠标点击事件，改变SVG中对象的样式

function chaAtr(node){
	var par = node.parentNode.parentNode;
	var allChild = par.childNodes;
	for (var i=0;i<allChild.length;i++)
	{
		if (allChild[i].childNodes[2])
		{
			if (allChild[i].childNodes[0] == node)
			{
				allChild[i].childNodes[2].setAttribute("stroke","#FF8600");
				allChild[i].childNodes[2].setAttribute("stroke-width","2px");
				continue;
			}
			allChild[i].childNodes[2].setAttribute("stroke","black");
			allChild[i].childNodes[2].setAttribute("stroke-width","1px");
		}
		
	}
	return true;
}

function defAtr(node){
	var allChild = node.childNodes;
	for (var i=0;i<allChild.length;i++)
	{
		if(allChild[i].childNodes[2])
		{
			allChild[i].childNodes[2].setAttribute("stroke","black");
			allChild[i].childNodes[2].setAttribute("stroke-width","1px");
		}
		
	}
}


//输出选择对象的某一属性，后期修改
function outPro(node){

	var a = document.getElementById("editText");
	var value = node.parentNode.getAttribute("name");
	a.value = value;
}

//鼠标拖拽移动节点
function drag(node,ev){
	var par = node.parentNode;
	var x = ev.clientX - parseFloat(ev.target.getAttribute("x"));
	var y = ev.clientY - parseFloat(ev.target.getAttribute("y"));
	var w = parseFloat(par.childNodes[0].getAttribute("width"));
	var h = parseFloat(par.childNodes[0].getAttribute("height"));

	document.onmousemove = function(ev){
		var left = ev.clientX - x;
		var top = ev.clientY - y;
		for(var i=0;i<par.childNodes.length;i++)
		{
			par.childNodes[i].setAttribute("x",String(left)+"px");
			par.childNodes[i].setAttribute("y",String(top)+"px");
		}
		par.childNodes[par.childNodes.length-1].setAttribute("cx",String(w + left) + "px");
		par.childNodes[par.childNodes.length-1].setAttribute("cy",String(h + top) + "px");
		setOutPortPos(node);
		setInPortPos(node);
	}
	document.onmouseup = function(){
		this.onmousemove = null;
		this.onmouseup = null;
	}
}


//鼠标拖拽缩放节点
function scale(node,ev){
	var par = node.parentNode;
	var w = ev.clientX - parseFloat(par.childNodes[0].getAttribute("width"));
	var h = ev.clientY - parseFloat(par.childNodes[0].getAttribute("height"));
	var x = parseFloat(par.childNodes[0].getAttribute("x"));
	var y = parseFloat(par.childNodes[0].getAttribute("y"));
	document.onmousemove = function(ev){
		var width = ev.clientX-w;
		var height = ev.clientY-h;
		if(width < 80)
			width = 80;
		if(height<60)
			height = 60;
		for (var i=0;i<3;i++)
		{
			par.childNodes[i].setAttribute("width", String(width) + "px");
			if(par.childNodes[i].getAttribute("class") == "rect_m")
			{
				par.childNodes[i].setAttribute("height","20px");
				continue;
			}
			par.childNodes[i].setAttribute("height", String(height) + "px");
		}

		par.getElementsByClassName("name")[0].setAttribute("dx", String(width/2) + "px");

		node.setAttribute("cx",String(width+x) + "px");
		node.setAttribute("cy",String(height+y) + "px");
		setOutPortPos(node);
		setInPortPos(node);
	}
	document.onmouseup = function(ev){
		this.onmousemove = null;
		this.onmouseup = null;
	}
}


//鼠标中键移动画布
function move(node,e){
	if(e.button == 1)
	{
		node.setAttribute("cursor","-webkit-grabbing");
		var x = e.clientX;
		var y = e.clientY;
		var a = getVB(node)[0];
		var b = getVB(node)[1];
		document.onmousemove = function(e){
			var cx = e.clientX - x;
			var cy = e.clientY - y;
			var vx = a - cx;
			var vy = b - cy;
			node.setAttribute("viewBox", vx+" "+vy+" "+getVB(node)[2]+" "+getVB(node)[3]);

			//固定输出点
			var oCir = document.getElementById("output");
			oCir.setAttribute("cx",vx + parseFloat(getVB(node)[2]) + "px");
			oCir.setAttribute("cy",vy + parseFloat(getVB(node)[3]/2) + "px");

		}
		document.onmouseup = function(e){
			this.onmousemove = null;
			this.onmouseup = null;
			e.target.setAttribute("cursor","default");
		}
	}
}

//获取viewBox的参数
function getVB(node){
	if(node)
	{
		var oArray = node.getAttribute("viewBox").split(" ");
		for(var i=0;i<oArray.length;i++)
		{
			var a = parseFloat(oArray[i]);
			oArray[i] = a;
		}
		return oArray;
	}
}

//隐藏全部菜单
function hideMenu(){
	var aMenu = document.getElementsByClassName("menu");
	for (var i=0;i<aMenu.length;i++)
		aMenu[i].style.display = "none";
}

//显示次级菜单
function showMenu(node,ev){
	var oDiv = node.parentNode.parentNode;
	var oUl = node.parentNode;
	var list = oUl.getElementsByTagName("li");
	for (var i=0;i<list.length;i++)
	{
		var sm = list[i].getAttribute("sm");
		var ssm = list[i].getAttribute("ssm");
		if(!sm && !ssm )
			continue;
		if(sm)
		{
			if (list[i] == node)
			{
				
				document.getElementById(sm).style.display = "block";
				document.getElementById(sm).style.left = oDiv.offsetLeft + 150 + "px";
				document.getElementById(sm).style.top = oDiv.offsetTop + 19.1*i + "px";
				if(ev.clientX > document.body.offsetWidth - 150)
					document.getElementById(sm).style.left = oDiv.offsetLeft - document.getElementById(sm).offsetWidth + "px";
				if(document.getElementById(sm) == document.getElementById("pr_menu") || document.getElementById(sm) == document.getElementById("jm_menu"))
					document.getElementById(sm).style.top = oDiv.offsetTop + "px";
				continue;
			}
			document.getElementById(sm).style.display = "none";
		}
		if(ssm)
		{
			if (list[i] == node)
			{
				document.getElementById(ssm).style.display = "block";
				document.getElementById(ssm).style.left = oDiv.offsetLeft + 145 + "px";
				document.getElementById(ssm).style.top = oDiv.offsetTop + 19.1*i + "px";
				continue;
			}
			document.getElementById(ssm).style.display = "none";
		}
		if (document.getElementById("lr_menu").style.display == "none")
		{
			document.getElementById("lr_s_menu").style.display = "none";
			document.getElementById("lr_g_menu").style.display = "none";
			document.getElementById("lr_p_menu").style.display = "none";
			document.getElementById("lr_3_menu").style.display = "none";
			document.getElementById("lr_t_menu").style.display = "none";
		}

	} 
}

//为li标签添加事件
function addNode_l(node,n,f){
	var name = node.innerHTML;
	var par = node.parentNode.parentNode;
	var id = par.getAttribute("id");
	var list = document.getElementsByTagName("li");

	var p;
	for (var i=0;i<list.length;i++)
	{
		if (list[i].getAttribute("sm") == id || list[i].getAttribute("ssm") == id)
		{
			p = list[i].innerHTML;
			break;
		}

		p =null;
	}
	n.name = name;
	n.par = p;
	var obj = getData(name,p);
	addInPort(obj,f);
}

function addStr(x,y,name,nextNode){
	var u = document.createElementNS(SVG_NS,"use");
	u.setAttribute("x",x);
	u.setAttribute("y",y);
	u.setAttributeNS(XLINK_NS,"xlink:href","#port");
	u.setAttribute("class","input");
	var t = document.createElementNS(SVG_NS,"text");
	t.setAttribute("x",x+8);
	t.setAttribute("y",y);
	t.setAttribute("class","in_text");
	t.setAttribute("dominant-baseline","middle");
	t.innerHTML = name;

	nextNode.parentNode.insertBefore(u,nextNode);
	nextNode.parentNode.insertBefore(t,nextNode);
	return true;
	
}




/************************************端口函数******************************************/


//设置每一个对象输出端口的位置(在缩放和移动节点时调用)
function setOutPortPos(node){
	var par = node.parentNode;
	var oRect = par.getElementsByClassName("rect_f")[0];
	var x = oRect.getAttribute("x");
	var y = oRect.getAttribute("y");
	var w = oRect.getAttribute("width");
	var h = oRect.getAttribute("height");
	var posX = parseFloat(x) + parseFloat(w);
	var posY = parseFloat(y) + (parseFloat(h)+20)/2;

	var output = par.getElementsByClassName("output")[0];
	output.setAttribute("x",posX);
	output.setAttribute("y",posY);

	return true;
}

//从data中get出每一个对象的数据
function getData(name,par){

	var obj;

	switch (par)
	{
		case "Global objects":
			obj = go[name];
			break;
		case "Time conversion":
			obj = tc[name];
			break;
		case "Vector Math":
			obj = vm[name];
			break;
		case "Random Numbers":
			obj = rn[name];
			break;
		case "Interpolation":
			obj = ip[name];
			break;
		case "Color Conversion":
			obj = cc[name];
			break;
		case "Other Math":
			obj = om[name];
			break;
		case "Other Math":
			obj = om[name];
			break;
		case "Comp":
			obj = co[name];
			break;
		case "Footage":
			obj = fo[name];
			break;
		case "Sub-objects":
			obj = lr_s[name];
			break;
		case "General":
			obj = lr_g[name];
			break;
		case "Properties":
			obj = lr_p[name];
			break;
		case "3D":
			obj = lr_3[name];
			break;
		case "Space Transforms":
			obj = lr_t[name];
			break;
		case "Camera":
			obj = ca[name];
			break;
		case "Light":
			obj = li[name];
			break;
		case "Effect":
			obj = ef[name];
			break;
		case "Mask":
			obj = ma[name];
			break;
		case "Property":
			obj = pr[name];
			break;
		case "Key":
			obj = ky[name];
			break;
		case "MarkerKey":
			obj = mk[name];
			break;
		case "JavaScript Math":
			obj = jm[name.split(".")[1]];
			break;
		case "Others":
			obj = ot[name];
			break;
		default:
			obj = null;

	}

//从obj中get出数据；
	return obj;

}

//创建节点时，动态的添加输入端口
function addInPort(obj,g){
	var inPort = obj.input;
	var oRect = g.getElementsByClassName("rect_f")[0];
	var nexNode = g.getElementsByClassName("cir_d")[0];
	var x = parseFloat(oRect.getAttribute("x"));
	var y = parseFloat(oRect.getAttribute("y"));
	var w = parseFloat(oRect.getAttribute("width"));
	var h = parseFloat(oRect.getAttribute("height"));
	g.setAttribute("name",obj.name);
	if(typeof(inPort) == "string")
	{
		if (inPort == "none")
		{
			return;
		}
		else
		{
			addStr(x,y+(h+20)/2,inPort,nexNode);
		}
	}
	else if(inPort instanceof Array)
	{
		addStr(x,y+(h+20)/2,"value",nexNode);
	}
	else
	{
		var a = [];
		for (var key in inPort)
			a.push(key);
		for (var i=0;i<a.length;i++)
		{
			addStr(x,y+(h-20)/(a.length+1)*(i+1)+20,a[i],nexNode);
		}
	}
}

//添加一个对象
function setInPortPos(node){
	var par = node.parentNode;
	var oRect = par.getElementsByClassName("rect_f")[0];
	var x = oRect.getAttribute("x");
	var y = oRect.getAttribute("y");
	var w = oRect.getAttribute("width");
	var h = oRect.getAttribute("height");
	var posX,posY;

	var inputs = par.getElementsByClassName("input");
	var in_texts = par.getElementsByClassName("in_text");
	if(inputs)
	{
		for (var i=0;i<inputs.length;i++)
		{
			posX = parseFloat(x);
			posY = parseFloat(y) + (parseFloat(h)-20)/(inputs.length+1)*(i+1)+20;
			inputs[i].setAttribute("x",posX);
			inputs[i].setAttribute("y",posY);
			in_texts[i].setAttribute("x",posX+8);
			in_texts[i].setAttribute("y",posY);
			
		}
	}


}

/***************************************绘制连线**************************************/










