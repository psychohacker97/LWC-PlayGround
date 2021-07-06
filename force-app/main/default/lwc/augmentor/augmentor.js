import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    factors = [1000000,2000000,3000000,4000000]
    startCounter = 0;
    handleStartChange(event){
        this.startCounter = parseInt(event.target.value);
    }

    handleMaximizeCounter(event){
        const factor = parseInt(event.target.dataset.factor) ;
        this.template.querySelector('c-numerator').maximizeCounter(factor);
    }
}