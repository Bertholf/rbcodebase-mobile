package com.reactproject.wrappers;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.reactproject.Injector;
import com.reactproject.models.SharedPrefsValueHolder;
import com.reactproject.utils.Constants;
import com.reactproject.utils.SharedPrefs;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Nullable;
import javax.inject.Inject;

/**
 * Module for shared prefs
 */
public class SharedPrefsModule extends ReactContextBaseJavaModule {
    public static final String TAG = SharedPrefsModule.class.getSimpleName();

    @Inject SharedPrefs sharedPrefs;
    @Inject Gson gson;

    public SharedPrefsModule(ReactApplicationContext context) {
        super(context);

        Injector.inject(this);
    }

    @Nullable @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
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
    public void get(String key, int type, Promise promise) {
        Object result = sharedPrefs.get(key, type);
        promise.resolve(result);
    }

    @ReactMethod
    public void getAll(Promise promise) {
        Map<String, ?> data = sharedPrefs.getAll();
        List<SharedPrefsValueHolder> holders = new ArrayList<>();

        Iterator it = data.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry)it.next();
            holders.add(new SharedPrefsValueHolder(pair.getKey(), pair.getValue()));
        }
        promise.resolve(gson.toJson(holders));
    }

    @ReactMethod
    public void saveString(String key, String value, Promise promise) {
        sharedPrefs.save(key, value, Constants.DataTypeKey.STRING);
        promise.resolve(null);
    }

    @ReactMethod
    public void saveInt(String key, int value, Promise promise) {
        sharedPrefs.save(key, value, Constants.DataTypeKey.INTEGER);
        promise.resolve(null);
    }

    @ReactMethod
    public void saveFloat(String key, float value, Promise promise) {
        sharedPrefs.save(key, value, Constants.DataTypeKey.FLOAT);
        promise.resolve(null);
    }

    @ReactMethod
    public void saveBoolean(String key, boolean value, Promise promise) {
        sharedPrefs.save(key, value, Constants.DataTypeKey.BOOLEAN);
        promise.resolve(null);
    }

    @ReactMethod
    public void clear(Promise promise) {
        sharedPrefs.clear();
        promise.resolve(null);
    }
}
