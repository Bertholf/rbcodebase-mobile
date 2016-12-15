package com.reactproject.wrappers;

import android.content.IntentFilter;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.reactproject.receivers.DeviceStateReceiver;

/**
 * Device state
 */
public class DeviceStateModule extends ReactContextBaseJavaModule {
    public static final String TAG = DeviceStateModule.class.getSimpleName();

    DeviceStateReceiver deviceStateReceiver;

    public DeviceStateModule(ReactApplicationContext reactContext) {
        super(reactContext);

        deviceStateReceiver = new DeviceStateReceiver(reactContext);
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("android.intent.action.BATTERY_OKAY");
        intentFilter.addAction("android.intent.action.BATTERY_LOW");
        intentFilter.addAction("android.intent.action.ACTION_POWER_CONNECTED");
        intentFilter.addAction("android.intent.action.ACTION_POWER_DISCONNECTED");
        intentFilter.addAction("android.intent.action.AIRPLANE_MODE");
        intentFilter.addAction("android.intent.action.DEVICE_STORAGE_OK");
        intentFilter.addAction("android.intent.action.DEVICE_STORAGE_LOW");
        reactContext.registerReceiver(deviceStateReceiver, intentFilter);
    }

    @Override
    public String getName() {
        return TAG;
    }
}
