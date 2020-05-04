const url = 'https://api.github.com/users';

let process = function *(){
  while(true){
      console.log("process loop");
      yield delay(1000);
  }
}

let saga = function * () {
    yield effects.takeEvery('START_PROCESS', process);
    console.log("Saga for to the end");
}

dispatch({type: 'START_PROCESS'})


let saga = function * () {
    console.log('1');
	yield delay(4000);
	yield effects.takeLatest('START_PROCESS', process);
	console.log('2');
}


let process = function * () {
    let timesLooped = 0;
	console.log('a');
    yield console.log(`Looped ${timesLooped++} times`);
	console.log('b');
}

function * fn (val){
	while(true){
		console.log('FN : '+val);
		yield delay(1000);
	}
}

let saga = function * () {
	let arr = ['ankit','Bharath'];
	let index = 0;
	while(index < arr.length){
		yield effects.fork(fn(arr[index]));
		yield delay(500);
		index++;
	}
}

let saga = function * () {
	let arr = ['ankit','Bharath'];
	yield effects.fork(fn(arr[0]));
	yield effects.fork(fn(arr[1]));
}


let process = function * () {
    try {
		while(true){
			console.log("Process Looped");
			yield delay(500);
			
		}
	} catch (err) {
		console.log(err);
	} finally {
		console.log("cancelled?", effects.cancelled());
	}
}

let saga = function * () {
	let forked = yield effects.fork(process);
	yield delay(5000);
	yield effects.cancel(forked);
	console.log("DONE");
	
}


let process = function *(){
  	let timesLooped = 0;
	while(true){
      yield console.log(`Looped ${timesLooped++} times`);
      yield delay(1000);
    }
}

let saga = function * () {
	yield effects.spawn(process);
	yield delay(2000);
		throw new Error();
}

let saga = function * () {
	const {allusers, singleUser } = yield effects.all({
		allusers : effects.call(fetch, url),
		singleUser : effects.call(fetch, url+'/gitankithub')
	});
	
	console.log(yield allusers.json());
	console.log(yield singleUser.json());
}


//Action Channels

function * updateSaga() {
	let chan = yield actionChannel("UPDATE");
	while(true){
		yield effects.take(chan);
		console.log("Updated Log");
		yield delay(1000);
	}
}

run(updateSaga)
dispatch({type: "UPDATE"});


//Generic Channels

function * handleRequest(chan){
	while(true){
		let payload = yield effects.take(chan);
		console.log("Got Payload", payload);
		yield delay(1000);
	}
}
	
	
function * saga() {
	let chan = yield channel();
	
	function * handleRequest(chan){
		while(true){
			let payload = yield effects.take(chan);
			console.log("Got Payload", payload);
			yield delay(1000);
		}
	}
	
	yield effects.fork(handleRequest, chan);
	
	yield effects.put(chan, {payload:42});
	yield effects.put(chan, {payload:43});
	yield effects.put(chan, {payload:44});
	yield effects.put(chan, {payload:45});
}


// Event Channels
// https://github.com/Darmaiad/pluralsight-redux-saga
// https://github.com/danielstern/redux-saga-sandbox
// https://github.com/react-boilerplate/react-boilerplate

// npm run clean
// npm run generate
// npm start
// npm i -S reactstrap bootstrap

// npm i -S isomorphic-fetch yamljs

















































