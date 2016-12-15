package com.reactproject.models;

/**
 * Holder for shared prefs's value and key
 */
public class SharedPrefsValueHolder {
    private Object value;
    private Object key;

    public SharedPrefsValueHolder(Object key, Object value) {
        this.value = value;
        this.key = key;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    public Object getKey() {
        return key;
    }

    public void setKey(Object key) {
        this.key = key;
    }
}
