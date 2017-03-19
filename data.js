

var go = {
	comp:{
		name:"Global objects -> comp",
		input:"comp",
		output:"comp"
	},
	footage:{
		name:"Global objects -> footage",
		input:"footage",
		output:"footage"
	},
	thisComp:{
		name:"Global objects -> thisComp",
		input:"none",
		output:"comp"
	},
	thisLayer:{
		name:"Global objects -> thisLayer",
		input:"none",
		output:"layer"
	},
	thisProperty:{
		name:"Global objects -> thisProperty",
		input:"none",
		output:"property"
	},
	time:{
		name:"Global objects -> time",
		input:"none",
		output:"number"
	},
	colorDepth:{
		name:"Global objects -> colorDepth",
		input:"none",
		output:"number"
	},
	posterizeTime:{
		name:"Global objects -> posterizeTime",
		input:"number",
		output:"number"
	},
	value:{
		name:"Global objects -> value",
		input:"none",
		output:["number","array","string"]
	}

};

var tc = {
	timeToFrames:{
		name:"Time conversion -> timeToFrames",
		input:{"t":"number","fps":"number","isDuration":"bool"},
		output:"number"
	},
	framesToTime:{
		name:"Time conversion -> framesToTime",
		input:{"frames":"number","fps":"number"},
		output:"number"
	},
	timeToTimecode:{
		name:"Time conversion -> timeToTimecode",
		input:{"t":"number","fps":"number","isDuration":"bool"},
		output:"string"
	},
	timeToNTSCTimecode:{
		name:"Time conversion -> timeToNTSCTimecode",
		input:{"t":"number","ntscDropFrame":"bool","isDuration":"bool"},
		output:"string"
	},
	timeToFeetAndFrames:{
		name:"Time conversion -> timeToFeetAndFrames",
		input:{"t":"number","fps":"number","framesPerFoot":"number","isDuration":"bool"},
		output:"string"
	},
	timeToCurrentFormat:{
		name:"Time conversion -> timeToCurrentFormat",
		input:{"t":"number","fps":"number","isDuration":"bool"},
		output:"string"
	}
};

var vm = {
	add:{
		name:"Vector Math -> add",
		input:{"vec1":"array","vec2":"array"},
		output:"array"
	},
	sub:{
		name:"Vector Math -> sub",
		input:{"vec1":"array","vec2":"array"},
		output:"array"
	},
	mul:{
		name:"Vector Math -> mul",
		input:{"vec":"array","amount":"number"},
		output:"array"
	},
	div:{
		name:"Vector Math -> div",
		input:{"vec":"array","amount":"number"},
		output:"array"
	},
	clamp:{
		name:"Vector Math -> clamp",
		input:{"value":["array","number"],"limit1":["array","number"],"limit2":["array","number"]},
		output:["array","number"]
	},
	dot:{
		name:"Vector Math -> dot",
		input:{"vec1":"array","vec2":"array"},
		output:"number"
	},
	cross:{
		name:"Vector Math -> cross",
		input:{"vec1":"array","vec2":"array"},
		output:"array"
	},
	normalize:{
		name:"Vector Math -> normalize",
		input:"array",
		output:"array"
	},
	length:{
		name:"Vector Math -> length",
		input:{"point1":"array","point2":"array"},
		output:"number"
	},
	lookAt:{
		name:"Vector Math -> lookAt",
		input:{"fromPoint":"array","atPoint":"array"},
		output:"array"
	}

};

var rn = {
	seedRandom:{
		name:"Random Numbers -> seedRandom",
		input:{"offset":"number","timeless":"bool"},
		output:"none"
	},
	random:{
		name:"Random Numbers -> random",
		input:{"min":["array","number"],"max":["array","number"]},
		output:["array","number"]
	},
	gaussRandom:{
		name:"Random Numbers -> gaussRandom",
		input:{"min":["array","number"],"max":["array","number"]},
		output:["array","number"]
	},
	noise:{
		name:"Random Numbers -> noise",
		input:["number","array"],
		output:"number"
	}

};

var ip = {
	linear:{
		name:"Interpolation -> linear",
		input:{"t":"number","tMin":"number","tMax":"number","value1":["number","array"],"value2":["number","array"]},
		output:["number","array"]
	},
	ease:{
		name:"Interpolation -> ease",
		input:{"t":"number","tMin":"number","tMax":"number","value1":["number","array"],"value2":["number","array"]},
		output:["number","array"]
	},
	easeIn:{
		name:"Interpolation -> easeIn",
		input:{"t":"number","tMin":"number","tMax":"number","value1":["number","array"],"value2":["number","array"]},
		output:["number","array"]
	},
	easeOut:{
		name:"Interpolation -> easeOut",
		input:{"t":"number","tMin":"number","tMax":"number","value1":["number","array"],"value2":["number","array"]},
		output:["number","array"]
	}
};

var cc = {
	rgbToHsl:{
		name:"Color Conversion -> rgbToHsl",
		input:"array",
		output:"array"
	},
	hslToRgb:{
		name:"Color Conversion -> hslToRgb",
		input:"array",
		output:"array"
	}
};

var om = {
	degreesToRadians:{
		name:"Other Math -> degreesToRadians",
		input:"number",
		output:"number"
	},
	radiansToDegrees:{
		name:"Other Math -> radiansToDegrees",
		input:"number",
		output:"number"
	}
};

var co = {
	layer:{
		name:"Comp -> layer",
		input:{"comp":"comp","index":"number","name":"string","otherLayer":"layer","relIndex":"number"},
		output:"layer"
	},
	marker:{
		name:"Comp -> marker",
		input:"comp",
		output:"marker"
	},
	numLayers:{
		name:"Comp -> numLayers",
		input:"comp",
		output:"number"
	},
	activeCamera:{
		name:"Comp -> activeCamera",
		input:"comp",
		output:"layer"
	},
	width:{
		name:"Comp -> width",
		input:"comp",
		output:"number"
	},
	height:{
		name:"Comp -> height",
		input:"comp",
		output:"number"
	},
	duration:{
		name:"Comp -> duration",
		input:"comp",
		output:"number"
	},
	ntscDropFrame:{
		name:"Comp -> ntscDropFrame",
		input:"comp",
		output:"bool"
	},
	displayStartTime:{
		name:"Comp -> displayStartTime",
		input:"comp",
		output:"number"
	},
	frameDuration:{
		name:"Comp -> frameDuration",
		input:"comp",
		output:"number"
	},
	shutterAngle:{
		name:"Comp -> shutterAngle",
		input:"comp",
		output:"number"
	},
	shutterPhase:{
		name:"Comp -> shutterPhase",
		input:"comp",
		output:"number"
	},
	bgColor:{
		name:"Comp -> bgColor",
		input:"comp",
		output:"array"
	},
	pixelAspect:{
		name:"Comp -> pixelAspect",
		input:"comp",
		output:"number",
	},
	name:{
		name:"Comp -> name",
		input:"comp",
		output:"string"
	}

};

var fo = {
	width:{
		name:"Footage -> width",
		input:"footage",
		output:"number"
	},
	height:{
		name:"Footage -> height",
		input:"footage",
		output:"number"
	},
	duration:{
		name:"Footage -> width",
		input:"footage",
		output:"number"
	},
	frameDuration:{
		name:"Footage -> frameDuration",
		input:"footage",
		output:"number"
	},
	ntscDropFrame:{
		name:"Footage -> ntscDropFrame",
		input:"footage",
		output:"bool"
	},
	pixelAspect:{
		name:"Footage -> pixelAspect",
		input:"footage",
		output:"number"
	},
	name:{
		name:"Footage -> name",
		input:"footage",
		output:"string"
	}
};

var lr_s = {
	source:{
		name:"Layer -> Sub-objects -> source",
		input:"layer",
		output:["comp","footage"]
	},
	sourceTime:{
		name:"Layer -> Sub-objects -> sourceTime",
		input:"layer",
		output:"number"
	},
	effect:{
		name:"Layer -> Sub-objects -> effect",
		input:{"layer":"layer","name":"string","index":"number"},
		output:"effect"
	},
	mask:{
		name:"Layer -> Sub-objects -> mask",
		input:{"name":"string","mask":"index"},
		output:"mask"
	}
};

var lr_g = {
	width:{
		name:"Layer -> General -> width",
		input:"layer",
		output:"number"
	},
	height:{
		name:"Layer -> General -> height",
		input:"layer",
		output:"number"
	},
	index:{
		name:"Layer -> General -> index",
		input:"layer",
		output:"number"
	},
	parent:{
		name:"Layer -> General -> parent",
		input:"layer",
		output:"layer"
	},
	hasParent:{
		name:"Layer -> General -> hasParent",
		input:"layer",
		output:"bool"
	},
	inPoint:{
		name:"Layer -> General -> inPoint",
		input:"layer",
		output:"number"
	},
	outPoint:{
		name:"Layer -> General -> outPoint",
		input:"layer",
		output:"number"
	},
	startTime:{
		name:"Layer -> General -> startTime",
		input:"layer",
		output:"number"
	},
	hasVideo:{
		name:"Layer -> General -> hasVideo",
		input:"layer",
		output:"bool"
	},
	hasAudio:{
		name:"Layer -> General -> hasAudio",
		input:"layer",
		output:"bool"
	},
	active:{
		name:"Layer -> General -> active",
		input:"layer",
		output:"bool"
	},
	enabled:{
		name:"Layer -> General -> enabled",
		input:"layer",
		output:"bool"
	},
	audioActive:{
		name:"Layer -> General -> audioActive",
		input:"layer",
		output:"bool"
	},
	sampleImage:{
		name:"Layer -> General -> sampleImage",
		input:{"point":"array","postEffect":"bool","t":"number"},
		output:"array"
	}
};

var lr_p = {
	anchorPoint:{
		name:"Layer -> Properties -> anchorPoint",
		input:"layer",
		output:"property"
	},
	position:{
		name:"Layer -> Properties -> position",
		input:"layer",
		output:"property"
	},
	scale:{
		name:"Layer -> Properties -> scale",
		input:"layer",
		output:"property",
	},
	rotation:{
		name:"Layer -> Properties -> rotation",
		input:"layer",
		output:"property"
	},
	opacity:{
		name:"Layer -> Properties -> opacity",
		input:"layer",
		output:"property"
	},
	audioLevels:{
		name:"Layer -> Properties -> audioLevels",
		input:"layer",
		output:"property"
	},
	timeRemap:{
		name:"Layer -> Properties -> timeRemap",
		input:"layer",
		output:"property"
	},
	marker:{
		name:"Layer -> Properties -> marker",
		input:"layer",
		output:"marker"
	},
	name:{
		name:"Layer -> Properties -> name",
		input:"layer",
		output:"string"
	}
};

var lr_3 = {
	orientation:{
		name:"Layer -> 3D -> orientation",
		input:"layer",
		output:"property"
	},
	rotationX:{
		name:"Layer -> 3D -> rotationX",
		input:"layer",
		output:"property"
	},
	rotationY:{
		name:"Layer -> 3D -> rotationY",
		input:"layer",
		output:"property"
	},
	rotationZ:{
		name:"Layer -> 3D -> rotationZ",
		input:"layer",
		output:"property"
	},
	lightTransmission:{
		name:"Layer -> 3D -> lightTransmission",
		input:"layer",
		output:"property"
	},
	castsShadows:{
		name:"Layer -> 3D -> castsShadows",
		input:"layer",
		output:"property"
	},
	acceptsShadows:{
		name:"Layer -> 3D -> acceptsShadows",
		input:"layer",
		output:"property"
	},
	acceptsLights:{
		name:"Layer -> 3D -> acceptsLights",
		input:"layer",
		output:"property"
	},
	ambient:{
		name:"Layer -> 3D -> ambient",
		input:"layer",
		output:"property",
	},
	diffuse:{
		name:"Layer -> 3D -> diffuse",
		input:"layer",
		output:"property"
	},
	specular:{
		name:"Layer -> 3D -> specular",
		input:"layer",
		output:"property"
	},
	shininess:{
		name:"Layer -> 3D -> shininess",
		input:"layer",
		output:"property"
	},
	metal:{
		name:"Layer -> 3D -> metal",
		input:"layer",
		output:"property"
	}
};

var lr_t = {
	toComp:{
		name:"Layer -> Space Transforms -> toComp",
		input:{"point":"array","t":"number"},
		output:"array"
	},
	fromComp:{
		name:"Layer -> Space Transforms -> fromComp",
		input:{"point":"array","t":"number"},
		output:"array"
	},
	toWorld:{
		name:"Layer -> Space Transforms -> toWorld",
		input:{"point":"array","t":"number"},
		output:"array"
	},
	fromWorld:{
		name:"Layer -> Space Transforms -> fromWorld",
		input:{"point":"array","t":"number"},
		output:"array"
	},
	toCompVec:{
		name:"Layer -> Space Transforms -> toCompVec",
		input:{"vec":"array","t":"number"},
		output:"array"
	},
	fromCompVec:{
		name:"Layer -> Space Transforms -> fromCompVec",
		input:{"vec":"array","t":"number"},
		output:"array"
	},
	toWorldVec:{
		name:"Layer -> Space Transforms -> toWorldVec",
		input:{"vec":"array","t":"number"},
		output:"array"
	},
	fromWorldVec:{
		name:"Layer -> Space Transforms -> fromWorldVec",
		input:{"vec":"array","t":"number"},
		output:"array"
	},
	fromCompToSurface:{
		name:"Layer -> Space Transforms -> fromCompToSurface",
		input:{"point":"array","t":"number"},
		output:"array"
	}
};

var ca = {
	pointOfInterest:{
		name:"Camera -> pointOfInterest",
		input:"layer",
		output:"property"
	},
	zoom:{
		name:"Camera -> zoom",
		input:"layer",
		output:"property"
	},
	depthOfField:{
		name:"Camera -> depthOfField",
		input:"layer",
		output:"property"
	},
	focusDistance:{
		name:"Camera -> focusDistance",
		input:"layer",
		output:"property"
	},
	aperture:{
		name:"Camera -> aperture",
		input:"layer",
		output:"property"
	},
	blurLevel:{
		name:"Camera -> blurLevel",
		input:"layer",
		output:"property"
	},
	active:{
		name:"Camera -> active",
		input:"layer",
		output:"property"
	}
};

var li = {
	pointOfInterest:{
		name:"Light -> pointOfInterest",
		input:"layer",
		output:"property"
	},
	intensity:{
		name:"Light -> intensity",
		input:"layer",
		output:"property"
	},
	color:{
		name:"Light -> color",
		input:"layer",
		output:"property"
	},
	coneAngle:{
		name:"Light -> coneAngle",
		input:"layer",
		output:"property"
	},
	coneFeather:{
		name:"Light -> coneFeather",
		input:"layer",
		output:"property"
	},
	shadowDarkness:{
		name:"Light -> shadowDarkness",
		input:"layer",
		output:"property"
	},
	shadowDiffusion:{
		name:"Light -> shadowDiffusion",
		input:"layer",
		output:"property"
	}
};

var ef = {
	active:{
		name:"Effect -> active",
		input:"effect",
		output:"bool"
	},
	param:{
		name:"Effect -> param",
		input:{"effect":"effect","name":"string","index":"number"},
		output:"bool"
	},
	name:{
		name:"Effect -> name",
		input:"effect",
		output:"string"
	}
};

var ma = {
	maskOpacity:{
		name:"Mask -> maskOpacity",
		input:"mask",
		output:"property"
	},
	maskFeather:{
		name:"Mask -> maskFeather",
		input:"mask",
		output:"property"
	},
	maskExpansion:{
		name:"Mask -> maskExpansion",
		input:"mask",
		output:"property"
	},
	invert:{
		name:"Mask -> invert",
		input:"mask",
		output:"bool"
	}
};

var pr = {
	value:{
		name:"Property -> value",
		input:"property",
		output:["number","array","string"]
	},
	valueAtTime:{
		name:"Property -> valueAtTime",
		input:{"property":"property","t":"number"},
		output:["number","array","string"]
	},
	velocity:{
		name:"Property -> velocity",
		input:"property",
		output:["number","array"]
	},
	velocityAtTime:{
		name:"Property -> velocityAtTime",
		input:{"property":"property","t":"number"},
		output:["number","array"]
	},
	speed:{
		name:"Property -> speed",
		input:"property",
		output:"number"
	},
	speedAtTime:{
		name:"Property -> speedAtTime",
		input:{"property":"property","t":"number"},
		output:"number"
	},
	wiggle:{
		name:"Property -> wiggle",
		input:{"property":"property","freq":"number","amp":"number","octaves":"number","amp_mult":"number","t":"number"},
		output:["number","array"]
	},
	temporalWiggle:{
		name:"Property -> temporalWiggle",
		input:{"property":"property","freq":"number","amp":"number","octaves":"number","amp_mult":"number","t":"number"},
		output:["number","array"]
	},
	smooth:{
		name:"Property -> smooth",
		input:{"property":"property","width":"number","samples":"number","t":"time"},
		output:["number","array"]
	},
	loopIn:{
		name:"Property -> loopIn",
		input:{"property":"property","type":"string","numKeyframes":"number"},
		output:["number","array"]
	},
	loopOut:{
		name:"Property -> loopOut",
		input:{"property":"property","type":"string","numKeyframes":"number"},
		output:["number","array"]
	},
	loopInDuration:{
		name:"Property -> loopInDuration",
		input:{"property":"property","type":"string","duration":"number"},
		output:["number","array"]
	},
	loopOutDuration:{
		name:"Property -> loopOutDuration",
		input:{"property":"property","type":"string","duration":"number"},
		output:["number","array"]
	},
	key:{
		name:"Property -> key",
		input:{"property":"property","index":"number","markerName":"string"},
		output:["key","markerKey"]
	},
	nearestKey:{
		name:"property -> nearestKey",
		input:{"property":"property","t":"number"},
		output:["key","markerKey"]
	},
	numKeys:{
		name:"Property -> numKeys",
		input:"property",
		output:"numKeys"
	},
	propertyGroup:{
		name:"Property -> propertyGroup",
		input:{"property":"property","countUp":"number"},
		output:"group"
	},
	propertyIndex:{
		name:"Property -> propertyIndex",
		input:"property",
		output:"number"
	},
	name:{
		name:"Property -> name",
		input:"property",
		output:"string"
	}
};

var ky = {
	value:{
		name:"Key -> value",
		input:"key",
		output:["number","array"]
	},
	time:{
		name:"Key -> time",
		input:"key",
		output:"number"
	},
	index:{
		name:"Key -> index",
		input:"key",
		output:"number"
	}
};

var mk = {
	duration:{
		name:"MarkerKey -> duration",
		input:"markerKey",
		output:"number"
	},
	comment:{
		name:"MarkerKey -> comment",
		input:"markerKey",
		output:"string"
	},
	chapter:{
		name:"MarkerKey -> chapter",
		input:"markerKey",
		output:"string"
	},
	url:{
		name:"MarkerKey -> url",
		input:"markerKey",
		output:"string"
	},
	frameTarget:{
		name:"MarkerKey -> frameTarget",
		input:"markerKey",
		output:"string"
	},
	eventCuePoint:{
		name:"MarkerKey -> eventCuePoint",
		input:"markerKey",
		output:"bool"
	},
	parameters:{
		name:"MarkerKey -> parameters",
		input:"markerKey",
		output:"string"
	}
};

var jm = {
	cos:{
		name:"JavaScript Math -> Math.cos",
		input:"number",
		output:"number"
	},
	acos:{
		name:"JavaScript Math -> Math.acos",
		input:"number",
		output:"number"
	},
	tan:{
		name:"JavaScript Math -> Math.tan",
		input:"number",
		output:"number"
	},
	atan:{
		name:"JavaScript Math -> Math.atan",
		input:"number",
		output:"number"
	},
	atan2:{
		name:"JavaScript Math -> Math.atan2",
		input:{"x":"number","y":"number"},
		output:"number"
	},
	sin:{
		name:"JavaScript Math -> Math.sin",
		input:"number",
		output:"number"
	},
	sqrt:{
		name:"JavaScript Math -> Math.sqrt",
		input:"number",
		output:"number"
	},
	exp:{
		name:"JavaScript Math -> Math.exp",
		input:"number",
		output:"number"
	},
	pow:{
		name:"JavaScript Math -> Math.pow",
		input:{"base":"number","exponent":"number"},
		output:"number"
	},
	log:{
		name:"JavaScript Math -> Math.log",
		input:"number",
		output:"number"
	},
	abs:{
		name:"JavaScript Math -> Math.abs",
		input:"number",
		output:"number"
	},
	round:{
		name:"JavaScript Math -> Math.round",
		input:"number",
		output:"number"
	},
	ceil:{
		name:"JavaScript Math -> Math.ceil",
		input:"number",
		output:"number"
	},
	floor:{
		name:"JavaScript Math -> Math.floor",
		input:"number",
		output:"number"
	},
	min:{
		name:"JavaScript Math -> Math.min",
		input:"number",
		output:"number"
	},
	max:{
		name:"JavaScript Math -> Math.max",
		input:"number",
		output:"number"
	},
	PI:{
		name:"JavaScript Math -> Math.PI",
		input:"none",
		output:"number"
	},
	E:{
		name:"JavaScript Math -> Math.E",
		input:"none",
		output:"number"
	},
	LOG2E:{
		name:"JavaScript Math -> Math.LOG2E",
		input:"none",
		output:"number"
	},
	LOG10E:{
		name:"JavaScript Math -> Math.LOG10E",
		input:"none",
		output:"number"
	},
	LN2:{
		name:"JavaScript Math -> Math.LN2",
		input:"none",
		output:"number"
	},
	LN10:{
		name:"JavaScript Math -> Math.LN10",
		input:"none",
		output:"number"
	},
	SQRT2:{
		name:"JavaScript Math -> Math.SQRT2",
		input:"none",
		output:"number"
	},
	SQRT1_2:{
		name:"JavaScript Math -> Math.SQRT1_2",
		input:"none",
		output:"number"
	}
};

var ot = {
	Condition:{
		name:"Others -> Condition",
		input:{"switch":"bool","input1":"all","input2":"all"},
		output:"all"
	},
	Math:{
		name:"Others -> Math",
		input:{"input1":"all","input2":"all"},
		output:"all"
	},
	Constant:{
		name:"Others -> Constant",
		input:"none",
		output:["array","number","bool","string"]
	}
};






































/********************************************************************
				谨以此纪念毕业那段彷徨而又煎熬的岁月
				               2017.3.11
				                 Panda
********************************************************************/