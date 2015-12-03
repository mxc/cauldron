'user-strict';
import "../test/do-not-mock-controller-tests";
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import TestUtils from 'react-addons-test-utils';
import TestControllerWithModelInConstructor from '../test/test-controller-with-model-in-constructor';
import TestControllerWithoutModel from '../test/test-controller-without-model';
import TestControllerWithModelAsProperty from '../test/test-controller-with-model-as-property';
import TestModel from '../test/test-model';
import TestModel2 from '../test/test-model-2';
import TestController2 from '../test/test-controller-2';
import TestComp from '../test/test-comp';
import TestControllerWithSubController from '../test/test-controller-with-sub-controller';

describe("updating model from view should update controller state",function(){
	it('should update state of react controller on change event',function(){
		var ctrl = TestUtils.renderIntoDocument(<TestControllerWithModelInConstructor />);
		var input = TestUtils.findRenderedDOMComponentWithTag (ctrl,'input');
                input.value="Test";
		TestUtils.Simulate.change(input);
                expect(ctrl.state.model.vara).toBe("Test");
	});
});

describe("creating a controller with no model",function(){
	it('should throw an exeception',function(){
		var func = function(){
			TestUtils.renderIntoDocument(<TestControllerWithoutModel />);
		}
                expect(func).toThrow(new Error('A model object must exist in props, context or be passed as an arguement'));
	});
});

describe("creating a controller with model provided in controller constructor",function(){
	it('should have state.model set',function(){
		var ctrl = TestUtils.renderIntoDocument(<TestControllerWithModelInConstructor />);
                expect(ctrl.state.model).toBeTruthy();
	});
});

describe("creating a controller with model provided as property",function(){
	it('should have state.model set',function(){
		var model = new TestModel();
		var ctrl = TestUtils.renderIntoDocument(<TestControllerWithModelAsProperty model={model} />);
                expect(ctrl.state.model).toBeTruthy();
	});
});

describe("updating a subcomponent ",function(){
	it('should update controller model',function(){
		var model = new TestModel2();
		var ctrl1 = TestUtils.renderIntoDocument(<TestControllerWithSubController model={model} />);
                var ctrl2 = TestUtils.findRenderedComponentWithType (ctrl1,TestController2);
                var input = TestUtils.findRenderedDOMComponentWithTag (ctrl2,'input');
                input.value="Test";
		TestUtils.Simulate.change(input);
                expect(ctrl2.state.model.vara).toBe("Test");
                expect(ctrl1.state.model.varb.vara).toBe("Test");
	});
});
