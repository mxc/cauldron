"user-strict";



class BaseModel {
	
       constructor(){
		this.listeners = new Set();
		this.errors = new Map();
                this.addListener = this.addListener.bind(this);
	}

	addListener(listener){
                if(listener.update){
                        return this.listeners.add(listener);
                }else{
                        throw new TypeError("listener does not provide an update method");
                }
        }

        removeListener(listener){
              return this.listeners.delete(listener);
        }

        fireUpdateEvent(){
                this.listeners.forEach(function(listener){
                        listener.update();
                });
        }


}

export default BaseModel;
