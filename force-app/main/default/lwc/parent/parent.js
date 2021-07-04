import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    handleChildClick(event){
        event.preventDefault();
        console.log("From Parent");
        console.log(`Parent received event from child as "${event.detail}"`)
    }
}