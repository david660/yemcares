let promise = new Promise((resolve, reject));

promise.then((result)=>{
  return money(secResult);
})
.then ((secResult)=>{
  return safe(final);
})
.then ((final)=>{
  console.log(`Finale result: ${final}`);
})
.catch(failureCallback);