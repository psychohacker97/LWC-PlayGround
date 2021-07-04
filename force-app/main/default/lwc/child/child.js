import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api message ;
    handleClick(){
        console.log("From Child");
        this.dispatchEvent( new CustomEvent('childbutton',{bubbles: true,composed : true,detail:"Child button clicked"}))
    }
}