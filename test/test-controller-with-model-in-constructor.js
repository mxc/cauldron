"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import TestComp from './test-comp';
import TestModel from './test-model';
import BaseController from '../src/base-controller'


class TestControllerWithModelInConstructor extends BaseController {

        constructor(props,context){
		var obj = new TestModel();
		super(props,context,obj);
		this.obj = obj;
        }        

        render(){
                return (<TestComp  />);

        }

}



export default TestControllerWithModelInConstructor;
