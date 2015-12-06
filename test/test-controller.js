"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import TestComp from './test-comp';
import BaseController from '../src/base-controller'


class TestController extends BaseController {

        constructor(props,context,obj){
		super(props,contxt,obj);
        }        

        render(){
                return (<TestComp />
        }

}

ReactController.contextTypes = {
    model: React.PropTypes.object
};


export default TestController;
