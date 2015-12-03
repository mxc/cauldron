"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import TestComp from './test-comp';
import TestModel from './test-model';
import BaseController from '../src/base-controller'

class TestControllerWithoutModel extends BaseController {

        constructor(props,context){
		super(props,context);
        }        

        render(){
                return (<TestComp  />);

        }

}



export default TestControllerWithoutModel;
