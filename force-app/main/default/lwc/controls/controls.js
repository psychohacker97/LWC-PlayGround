/**
 * @description       : 
 * @author            : Sunandh Samala
 * @group             : 
 * @last modified on  : 05-16-2026
 * @last modified by  : Sunandh Samala
**/
import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    //test 1234
    factors = [0,2,3,4,5,6];
    divisionFactors = [2,3,4,5,6];
    handleAdd(){
        
    }
    handleSubtract(){
        this.dispatchEvent(new CustomEvent('subtract'));
    }
    handleMultiply(event){
        const factor = event.target.dataset.factor;
        this.dispatchEvent( new CustomEvent('multiply',{
            detail:factor
        }));
    }
    handleDivision(event){
        const divisionFactor = event.target.dataset.divisionFactor ;
        this.dispatchEvent( new CustomEvent('division',{
            detail: divisionFactor
        }))
    }
}