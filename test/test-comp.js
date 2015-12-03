"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import BaseChild from '../src/base-child';
import TestController2 from '../test/test-controller-2';

class TestComp extends BaseChild {


        render(){
                return (<div>
                             <label>{this.context.model.vara}</label>
                             <input type="text" size="25" onChange={this.context.model.onChange} />
                        </div>);
        }
}

export default TestComp;
