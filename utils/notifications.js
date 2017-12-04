import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'flashcards:notifications'

const createNotification = () => {
  return {
    title: 'Take a Quiz!',
    body: "👋 don't forget to take a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export const clearNotifications = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

const scheduleNotification = status => {
  if (status !== 'granted') return

  Notifications.cancelAllScheduledNotificationsAsync()

  let tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(20)
  tomorrow.setMinutes(0)

  Notifications.scheduleLocalNotificationAsync(
    createNotification(),
    { time: tomorrow, repeat: 'day' }
  )

  AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
}

export const setNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data !== null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => scheduleNotification(status))
      }
    })
}
