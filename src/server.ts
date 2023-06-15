import dotenv from 'dotenv-flow'

dotenv.config()

import { app } from './app'

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
  console.log(`App running on port ${PORT}`)
)

// const server = app.listen(PORT, () =>
//   console.log(`App running on port ${PORT}`)
// )

// const events = [
//   'exit',
//   'SIGINT',
//   'SIGUSR1',
//   'SIGUSR2',
//   //'uncaughtException',
//   'SIGTERM',
// ]

// events.forEach((e) => {
//   process.on(e, () => {
//     server.close()
//     connection.close()
//   })
// })
