"use strict";

import BaseModel from '../src/base-model'

class TestModel extends BaseModel{

        constructor(){
        	super();
		this.vara ="";
                this.varb= "";
		this.onChange=this.onChange.bind(this);
        }


        onChange(e){
                this.vara = e.target.value;
		this.fireUpdateEvent();
        }

}

export default TestModel;
