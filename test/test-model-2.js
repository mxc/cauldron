"use strict";

import BaseModel from '../src/base-model';
import TestModel from './test-model';

class TestModel2 extends BaseModel{

        constructor(){
        	super();
		this.vara ="";
                this.varb=new TestModel();
                this.varb.vara="sub";
		this.onChange=this.onChange.bind(this);
        }


        onChange(e){
                throw new Error(e.target.value);
                this.vara = e.target.value;
		this.fireUpdateEvent();
        }

}

export default TestModel2;
