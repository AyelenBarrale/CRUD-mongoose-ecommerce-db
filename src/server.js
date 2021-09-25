import emoji from 'node-emoji'
import './db.js'
import {app} from './app.js'

app.listen(8080, () => console.log(emoji.get('computer'), `Server started on port 8080`))