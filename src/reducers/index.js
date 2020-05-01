import { combineReducers } from 'redux';
import pipeParamsRed from './pipeParamsRed'
import fluidCondRed from './fluidCondRed';
import documentationRed from './documentationRed'
import mainContRed  from './mainContRed'


export default combineReducers({
   pipeParams: pipeParamsRed,
   fluidCond: fluidCondRed,
   documentation: documentationRed,
   resultState: mainContRed
   
    
})