import { of, timer } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { concatMap } from 'rxjs/operators'

timer(1000).pipe(
  concatMap((res) => {
    console.log('initial value', res);
    return ajax.getJSON('https://api.github.com/users/google')
  }),
  concatMap(ajaxResponseOfGoogle => {
    console.log('ajaxResponseOfGoogle', ajaxResponseOfGoogle);
    return ajax.getJSON('https://api.github.com/users/microsoft')
  }),
  concatMap(ajaxResponseOfMicrosoft => {
    console.log('ajaxResponseOfMicrosoft', ajaxResponseOfMicrosoft);
    return ajax.getJSON('https://api.github.com/users')
  }),
  concatMap(ajaxResponseOfUsers => {
    console.log('ajaxResponseOfUsers', ajaxResponseOfUsers);
    return of(ajaxResponseOfUsers)
  })
)
.subscribe({
  next (ajaxResponse) {
    console.log('ajaxResponse', ajaxResponse)
  },
  error (error) {
    console.error(error)
  },
  complete (res) {
    console.log('complete with ', res)
  }
})
