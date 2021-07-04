import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    message = "hello";
    handleChange(event){
        const value = event.target.value ;
        this.message = value;
    }
    handleChildClick(event){
        console.log("From Grand Parent");
        console.log(`Grand Parent received event from child as "${event.detail}"`)
    }
}