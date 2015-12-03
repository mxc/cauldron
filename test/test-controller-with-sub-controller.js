"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import TestComp from './test-comp';
import TestController2 from './test-controller-2';
import TestModel from './test-model';
import BaseController from '../src/base-controller'


class TestControllerWithSubController extends BaseController {

        constructor(props,context){
		super(props,context);
        }        

        render(){
                return (<div><TestComp /><TestController2 model={this.props.model.varb} /></div>);

        }

}



export default TestControllerWithSubController;
