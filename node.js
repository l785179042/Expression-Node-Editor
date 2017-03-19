


//创建一个node对象，用于创建各种类型的节点

function Node(name,par)
{
	this.name = name;
	this.par = par;

}

Node.prototype.insert_a = function(){
	var svg_f = document.getElementById("frame");
	var svg_n = document.createElementNS(SVG_NS,"g");
	svg_n.setAttribute("name",this.name);
	var oCir = document.getElementById("output");
	var w = String(getSize(svg_f)[0]/2 + getVB(svg_f)[0]) + "px";
	var h = String(getSize(svg_f)[1]/2 + getVB(svg_f)[1]) + "px";
	var str = ''+
		'<rect class="rect_f" x="'+ w +
		'" y="' + h + 
		'" width="100px" height="70px" rx="5px" fill="#F9F4F4" stroke-width="0"></rect>'+
		'<rect class="rect_m" x="' + w + 
		'" y="' + h + 
		'" width="100px" height="20px" rx="5px" fill="#70DFE0" stroke-width="0"></rect>'+
		'<rect class="rect_s" x="' + w + 
		'" y="' + h + 
		'" width="100px" height="70px" rx="5px" fill="None" stroke="black" stroke-width="1px"></rect>'+
		'<text class = "name" x ="' + w + '" y = "' + h +
		'" dx ="' + 50 + '" dy = "'+ 15 +
		'" >COMP</text>' +
		'<use x = "'+ (parseFloat(w) + 100) +'" y = "'+ (parseFloat(h) + 45) +'" xlink:href = "#port" class = "output"></use>' + 
		'<circle class="cir_d" cx="' + (parseFloat(w) + 100) + 'px' + 
		'" cy="' + (parseFloat(h) + 70) + 'px' + 
		'" r="5px" fill="red" x="381px" y="280.5px"></circle>';
	svg_n.innerHTML = str;
	svg_f.insertBefore(svg_n,oCir);

}

Node.prototype.insert = function(n,ev){
	var svg_f = document.getElementById("frame");
	var svg_n = document.createElementNS(SVG_NS,"g");
	var oCir = document.getElementById("output"); 
	var w = ev.clientX - 280 + getVB(svg_f)[0] + "px";
	var h = ev.clientY + getVB(svg_f)[1] + "px";
	var str = ''+
		'<rect class="rect_f" x="'+ w +
		'" y="' + h + 
		'" width="100px" height="70px" rx="5px" fill="#F9F4F4" stroke-width="0"></rect>'+
		'<rect class="rect_m" x="' + w + 
		'" y="' + h + 
		'" width="100px" height="20px" rx="5px" fill="#70DFE0" stroke-width="0"></rect>'+
		'<rect class="rect_s" x="' + w + 
		'" y="' + h + 
		'" width="100px" height="70px" rx="5px" fill="None" stroke="black" stroke-width="1px"></rect>'+
		'<text class = "name" x ="' + w + '" y = "' + h +
		'" dx ="' + 50 + '" dy = "'+ 15 +
		'" >' + n + '</text>' +
		'<use x = "'+ (parseFloat(w) + 100) +'" y = "'+ (parseFloat(h) + 45) +'" xlink:href = "#port" class = "output"></use>' + 
		'<circle class="cir_d" cx="' + (parseFloat(w) + 100) + 'px' + 
		'" cy="' + (parseFloat(h) + 70) + 'px' + 
		'" r="5px" fill="red" x="381px" y="280.5px"></circle>';
	svg_n.innerHTML = str;
	svg_f.insertBefore(svg_n,oCir);
	return svg_n;
}

