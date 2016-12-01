package com.reactproject.wrappers;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactproject.Injector;
import com.reactproject.utils.Constants;
import com.reactproject.utils.SharedPrefs;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;
import javax.inject.Inject;

/**
 * Module for shared prefs
 */
public class SharedPrefsModule extends ReactContextBaseJavaModule {
    public static final String TAG = SharedPrefsModule.class.getSimpleName();

    @Inject SharedPrefs sharedPrefs;

    public SharedPrefsModule(ReactApplicationContext context) {
        super(context);

        Injector.inject(this);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> constants = new HashMap<>();
        constants.put(Constants.DataType.STRING, Constants.DataTypeKey.STRING);
        constants.put(Constants.DataType.INTEGER, Constants.DataTypeKey.INTEGER);
        constants.put(Constants.DataType.BOOLEAN, Constants.DataTypeKey.BOOLEAN);
        constants.put(Constants.DataType.SET, Constants.DataTypeKey.SET);
        constants.put(Constants.DataType.FLOAT, Constants.DataTypeKey.FLOAT);
        constants.put(Constants.DataType.LONG, Constants.DataTypeKey.LONG);
        return constants;
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public Object get(String key, int type) {
        return sharedPrefs.get(key, type);
    }

    @ReactMethod
    public void save(String key, Object value, int type) {
        sharedPrefs.save(key, value, type);
    }
}
