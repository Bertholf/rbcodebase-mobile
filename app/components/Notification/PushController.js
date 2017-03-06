import React, { Component } from 'react';
import { AsyncStorage, Platform } from 'react-native';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';
import firebaseClient from './FirebaseClient';
import notif from '../../services/notification';

export default class PushController extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    FCM.requestPermissions();

    AsyncStorage.getItem('FcmToken')
    .then((res) => {
      notif.notification(res);
    }).catch(() => {
      FCM.getFCMToken()
          .then((token) => {
            console.log('FCM INITIAL TOKEN', token);
            // Save token in AsyncStorage
            AsyncStorage.setItem('FcmToken', token)
            .then(() => {
              AsyncStorage.getItem('FcmToken')
              .then((res) => {
                this.setState({ token: res })
                .then(() => {
                  notif.notification(this.state.token);
                });
              }).catch();
            });
            // this.props.onChangeToken(token); Temporary Comment
          }).catch();
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
      AsyncStorage.setItem('FcmToken', token);
      // this.props.onChangeToken(token); Temporary Comment
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
