import "../test/do-not-mock-model-tests";
import Model from '../test/test-model';


class Ctl {

        constructor(){
                this.val="default";
        }
        update(){
                this.val="updated";
        }
};

describe("adding listeners to model",function(){

	it('should update listeners set in model',function(){
                var model = new Model();
		var controller = new Ctl();
                model.addListener(controller);        
                expect(model.listeners.has(controller)).toBeTruthy();

	});

});

describe ('removing existing listeners from model', function(){
	it('should remove listener from set',function(){
		var controller = new Ctl();
		var model = new Model();
		model.addListener(controller);
		model.removeListener(controller);
		expect(model.listeners.has(controller)).toBeFalsy();
	});
});



describe ('removing non-existing listeners from model', function(){
	it('should not throw an error',function(){
		var controller = new Ctl();
		var model = new Model();
		expect(model.removeListener(controller)).toBeFalsy();
	});
});

describe ('adding listener with no update method', function(){
	it('should throw a type error',function(){
		var model = new Model();
		var controller = {};
                expect(function(){ 
                                        model.addListener(controller);
                                 }
                ).toThrow(new TypeError("listener does not provide an update method"));
	});
});

describe ('firing update', function(){
	it('should call conttollers update method',function(){
		var model = new Model();
		var controller = new Ctl();
                model.addListener(controller);
                model.fireUpdateEvent();
		expect(controller.val).toBe("updated");
	});
});

