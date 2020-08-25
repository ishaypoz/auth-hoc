//how to build middleware for redux
// function({dispatch}){
//return function(next){
//return function(action){}}}
/*we can omit the return when use es6 arrow function*/
//the dispatch action take action and make sure it eventully call all the reducers and middlewares
export default ({ dispatch }) => (next) => (action) => {
	//check to see if the action has a promis on its payload property if it does wait for resolve else send to next middleware
	if (!action.payload || !action.payload.then) {
		return next(action); //send action to the other middleware and after it to the reducers
	}
	//if we got here we want to the action to resolve itself and get the data .then make sure it happen when data return from pai
	action.payload.then(function (response) {
		const newAction = { ...action, payload: response };
		dispatch(newAction); // will send to redux all middleware again to see if anyone else need the newAction
	});
};
