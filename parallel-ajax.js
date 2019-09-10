import { forkJoin } from 'rxjs'
import { ajax } from 'rxjs/ajax'

forkJoin({
  google: ajax.getJSON('https://api.github.com/users/google'),
  microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
  users: ajax.getJSON('https://api.github.com/users')
})
  .subscribe(console.log)
