import { combineReducers } from 'redux';
import pipeParamsRed from './pipeParamsRed'
import fluidCondRed from './fluidCondRed';
import documentationRed from './documentationRed'


export default combineReducers({
   pipeParams: pipeParamsRed,
   fluidCond: fluidCondRed,
   documentation: documentationRed
    
})