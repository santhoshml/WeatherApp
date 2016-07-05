export default function({dispatch}) {
  //
  return next => action => {

    // if the action does not have a payload
    if(!action.payload || !action.payload.then){
      return next(action);
    }

    console.log('We do have a promise : ', action);

    action.payload
      .then(function(reponse){
        const newAction = {...action, payload:reponse};

        dispatch(newAction);
      });
  }
}
