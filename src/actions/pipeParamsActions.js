import {ON_PIPE_PARAMS_CHANGE} from '../actions/types'

export const onPipeParamsChange = (fieldId, fieldValue) => {
    return {
        type: ON_PIPE_PARAMS_CHANGE,
        payload: { fieldId, fieldValue }
    
    }
    
}