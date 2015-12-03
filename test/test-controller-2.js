"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import BaseController from '../src/base-controller';

class TestController2 extends BaseController {

        constructor(props,context){
                super(props,context);
        }

        render(){
                return (<div>
                             <label>{this.props.model.vara}</label>
                             <input type="text" size="25" onChange={this.props.model.onChange} />
                        </div>);
        }
}

export default TestController2;
