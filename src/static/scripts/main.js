(function(window){

 var HPC = window.HPC = window.HPC || {};

 var $root = $('#huffpostcode-march-madness');

function rehydrateTemplates(){
	HPC.matchTemplate = Handlebars.template( HPC.templates.match );
}

function tabletopCallback (arrayObj) {
	_.each(arrayObj, function(rowObj){
		$root.append( HPC.matchTemplate(rowObj) );
	});
}

function initTabletop () {
	Tabletop.init({
		key: '0AoFVfb01eGFHdEhXR0MwTFdtWXI5WGE3UUMyZFI0Y0E',
		callback: tabletopCallback,
		simpleSheet: true
	});
}

function main () {
	rehydrateTemplates();
	initTabletop();
}

$(document).ready(main);

}(this));