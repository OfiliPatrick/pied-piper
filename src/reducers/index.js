import { combineReducers } from 'redux';
import pipeParamsRed from './pipeParamsRed'
import fluidCondRed from './fluidCondRed';
import commentRed from './commentRed'


export default combineReducers({
   pipeParams: pipeParamsRed,
   fluidCond: fluidCondRed,
   comment: commentRed
    
})