import { useState } from 'react';

function useLiftState(){
    const [liftedStates, setLiftedStates] = useState({});

    function liftUpState(stateName,state,setState){
        let setStateName = 'set' + stateName.slice(0,1).toUpperCase() + stateName.slice(1);
        console.log(stateName);
        setLiftedStates({...liftedStates, [stateName]:state, [setStateName]:setState })
    }

    return [ liftedStates, liftUpState ];
}