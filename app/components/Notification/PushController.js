import React, { Component } from 'react';
import { Platform, AsyncStorage } from 'react-native';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';
import notif from '../../services/notif';

export default class PushController extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    FCM.requestPermissions();

    /**
     * @TODO
     * Should check if in AsyncStorage has the FcmToken
     * and generate device unique ID
     *
     * if AsyncStorage.getItem === null {
     *   FCM.getFCMToken()
     *    .then(() => notif.sendToken(token, deviceId) )
     */
    AsyncStorage.getItem('FcmToken')
    .then((res) => {
      if (res === null || typeof res === 'undefined') {
        FCM.getFCMToken()
        .then((token) => {
          AsyncStorage.setItem('FcmToken');
          notif.sendToken(token)
          .then(response => console.log('RESPONSE FCM SEND NOTIF', response))
          .catch();
        });
      } else {
        notif.sendToken(res)
        .then(resp => console.log('FCM RESP', resp))
        .catch();
      }
    });

    FCM.getInitialNotification().then((notif) => {
      console.log('INITIAL NOTIFICATION', notif);
    }).catch();

    this.notificationListner = FCM.on(FCMEvent.Notification, (notif) => {
      console.log('Notification', notif);
      if (notif.local_notification) {
        return;
      }
      if (notif.opened_from_tray) {
        return;
      }

      if (Platform.OS === 'ios') {
        switch (notif._notificationType) {
          case NotificationType.Remote:
            notif.finish(RemoteNotificationResult.NewData);
            break;
          case NotificationType.NotificationResponse:
            notif.finish();
            break;
          case NotificationType.WillPresent:
            notif.finish(WillPresentNotificationResult.All);
            break;
        }
      } else {
        switch (notif._notificationType) {
          case NotificationType.Remote:
            notif.finish(RemoteNotificationResult.NewData);
            break;
          case NotificationType.NotificationResponse:
            notif.finish();
            break;
          case NotificationType.WillPresent:
            notif.finish(WillPresentNotificationResult.All);
            break;
        }
      }
      this.showLocalNotification(notif);
    });

    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
      console.log('TOKEN (refreshUnsubscribe)', token);
      this.props.onChangeToken(token);
    });
  }

  showLocalNotification(notif) {
    FCM.presentLocalNotification({
      title: notif.title,
      body: notif.body,
      priority: 'high',
      click_action: notif.click_action,
      show_in_foreground: true,
      local: true,
    });
  }

  componentWillUnmount() {
    this.notificationListner.remove();
    this.refreshTokenListener.remove();
  }


  render() {
    return null;
  }
}
