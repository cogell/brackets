define(function (require) {
	require('kinetic');

	return function Artboard ( canvasId, width, height ) {

		// refactor data model that controls width and height into another POJO

		this.canvasId = canvasId;
		this.width = width;
		this.height = height;

		this.render = function render () {
			console.log('Starting to render artboard...');
			this.stage = this.createStage();
			this.layer = this.createLayer();

			this.stage.add( this.layer );
		};

		this.createStage = function createStage () {
			return new Kinetic.Stage({
				container: this.canvasId,
				width: this.width,
				height: this.height
			});
		};

		this.createLayer = function createLayer () {
			return new Kinetic.Layer();
		};

		this.addKineticElement = function addKineticElement (el) {
			this.layer.add( el );
		};

	};

});