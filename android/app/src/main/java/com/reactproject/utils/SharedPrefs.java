package com.reactproject.utils;

import android.content.SharedPreferences;

import com.reactproject.Injector;

import java.util.Map;

import javax.inject.Inject;

/**
 * Hold shared prefs
 */
public class SharedPrefs {

    @Inject SharedPreferences sharedPreferences;

    public SharedPrefs() {
        super();
        Injector.inject(this);
    }

    public void save(String key, Object value, int type) {
        SharedPreferences.Editor editor = sharedPreferences.edit();
        switch (type) {
            case Constants.DataTypeKey.STRING:
                editor.putString(key, (String) value);
                break;
            case Constants.DataTypeKey.INTEGER:
                editor.putInt(key, (int) value);
                break;
            case Constants.DataTypeKey.BOOLEAN:
                editor.putBoolean(key, (boolean) value);
                break;
            case Constants.DataTypeKey.FLOAT:
                editor.putFloat(key, (Float) value);
                break;
        }
        editor.apply();
    }

    public Object get(String key, int type) {
        Object obj = null;
        switch (type) {
            case Constants.DataTypeKey.STRING:
                obj = sharedPreferences.getString(key, "");
                break;
            case Constants.DataTypeKey.INTEGER:
                obj = sharedPreferences.getInt(key, 0);
                break;
            case Constants.DataTypeKey.BOOLEAN:
                obj = sharedPreferences.getBoolean(key, false);
                break;
            case Constants.DataTypeKey.FLOAT:
                obj = sharedPreferences.getFloat(key, 0);
                break;
        }
        return obj;
    }

    public Map<String, ?> getAll() {
        return sharedPreferences.getAll();
    }

    public void clear() {
        sharedPreferences.edit().clear().apply();
    }
}
