package com.reactproject.wrappers;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.reactproject.Injector;
import com.reactproject.models.Contact;
import com.reactproject.utils.ContactProvider;

import java.util.List;

import javax.inject.Inject;

/**
 * Contact provider module
 */
public class ContactProviderModule extends ReactContextBaseJavaModule {
    public final static String TAG = ContactProviderModule.class.getSimpleName();

    @Inject ContactProvider contactProvider;

    public ContactProviderModule(ReactApplicationContext context) {
        super(context);
        Injector.inject(this);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void search(String query, Promise promise) {
        List<Contact> contacts = contactProvider.searchContactFromPhonebook(query);
        promise.resolve((new Gson()).toJson(contacts));
    }
}
