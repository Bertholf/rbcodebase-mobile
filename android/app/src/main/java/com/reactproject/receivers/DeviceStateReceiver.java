package com.reactproject.receivers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.reactproject.utils.Constants;

public class DeviceStateReceiver extends BroadcastReceiver {
    public static final String TAG = DeviceStateReceiver.class.getSimpleName();

    private ReactContext reactContext;

    public DeviceStateReceiver(ReactContext reactContext) {
        this.reactContext = reactContext;
    }
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();

        Log.d(TAG, "On receive broadcast");

        WritableMap params = Arguments.createMap();

        if (action.equals("android.intent.action.BATTERY_OKAY")) {
            params.putBoolean(Constants.DeviceState.STATE, true);
            sendEvent(Constants.DeviceState.BATTERY, params);
        } else if (action.equals("android.intent.action.BATTERY_LOW")) {
            params.putBoolean(Constants.DeviceState.STATE, false);
            sendEvent(Constants.DeviceState.BATTERY, params);
        } else if (action.equals("android.intent.action.ACTION_POWER_CONNECTED")) {
            params.putBoolean(Constants.DeviceState.STATE, true);
            sendEvent(Constants.DeviceState.POWER, params);
        } else if (action.equals("android.intent.action.ACTION_POWER_DISCONNECTED")) {
            params.putBoolean(Constants.DeviceState.STATE, false);
            sendEvent(Constants.DeviceState.POWER, params);
        } else if (action.equals("android.intent.action.AIRPLANE_MODE")) {
            params.putBoolean(Constants.DeviceState.STATE, true);
            sendEvent(Constants.DeviceState.AIRPLANE, params);
        } else if (action.equals("android.intent.action.DEVICE_STORAGE_OK")) {
            params.putBoolean(Constants.DeviceState.STATE, true);
            sendEvent(Constants.DeviceState.STORAGE, params);
        } else if (action.equals("android.intent.action.DEVICE_STORAGE_LOW")) {
            params.putBoolean(Constants.DeviceState.STATE, false);
            sendEvent(Constants.DeviceState.STORAGE, params);
        }
    }

    private void sendEvent(String eventName, WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}