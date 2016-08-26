// The below is short for
// export default function(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }
// 'currying' = nesting of single argument functions

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}