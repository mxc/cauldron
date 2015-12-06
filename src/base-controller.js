"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

class BaseController extends React.Component {

        constructor(props,context,obj){
		super(props,context);
		//Find the model
		//throw new Error(props.model==null);
		if (!obj && !props.model && !context.model){
			throw new Error("A model object must exist in props, context or be passed as an arguement");
		}
		//set model to object
                obj = obj? obj: props.model? props.model:context.model;
		if (!obj.addListener){
			throw new TypeError("Model object must extend BaseModel or implement addListener");
		}
		this.state={
                        model:obj
                };
		obj.addListener(this);
        }        

	update(){
		this.setState({model:this.state.model});
	}

       getChildContext() {
	       return {
                        model: this.state.model 
                };
       }

}

BaseController.childContextTypes = {
    model: React.PropTypes.object.isRequired
};


export default BaseController;
