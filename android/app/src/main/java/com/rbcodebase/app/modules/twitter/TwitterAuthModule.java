package com.rbcodebase.app.modules.twitter;

import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.rbcodebase.app.MainActivity;
import com.twitter.sdk.android.core.Callback;
import com.twitter.sdk.android.core.Result;
import com.twitter.sdk.android.core.TwitterApiClient;
import com.twitter.sdk.android.core.TwitterException;
import com.twitter.sdk.android.core.TwitterSession;
import com.twitter.sdk.android.core.identity.TwitterAuthClient;

/**
 * Created by gufy on 2/15/17.
 */

public class TwitterAuthModule extends ReactContextBaseJavaModule {
    private static String TAG = TwitterAuthModule.class.getSimpleName();
    private TwitterAuthClient twitterApiClient;
    private Callback<TwitterSession> callback;
    private Promise promise;
    public TwitterAuthModule(ReactApplicationContext reactContext) {
        super(reactContext);
        twitterApiClient = new TwitterAuthClient();
        callback = new Callback<TwitterSession>() {
            @Override
            public void success(Result<TwitterSession> result) {
                requestEmailAddress(result.data);
            }

            @Override
            public void failure(TwitterException exception) {
                Log.d(TAG, "failure: " + exception.getMessage());
                promise.reject(exception);
            }
        };
    }

    private void requestEmailAddress(final TwitterSession session){
        twitterApiClient.requestEmail(session, new Callback<String>() {
            @Override
            public void success(Result<String> result) {
                WritableNativeMap data = new WritableNativeMap();
                WritableNativeMap user = new WritableNativeMap();
                session.getUserId();
                data.putDouble("userId", session.getUserId());
                user.putString("username", session.getUserName());
                user.putString("email", result.data);
                data.putString("token", session.getAuthToken().token);
                data.putString("secret", session.getAuthToken().secret);
                data.putDouble("id", session.getId());
                data.putMap("user", user);
                data.putString("provider", "twitter");
                promise.resolve(data);
            }

            @Override
            public void failure(TwitterException exception) {
                Log.d(TAG, "failure: " + exception.getMessage());

                WritableNativeMap data = new WritableNativeMap();
                WritableNativeMap user = new WritableNativeMap();
                session.getUserId();
                data.putDouble("userId", session.getUserId());
                user.putString("username", session.getUserName());
                data.putString("token", session.getAuthToken().token);
                data.putString("secret", session.getAuthToken().secret);
                data.putDouble("id", session.getId());
                data.putMap("user", user);
                data.putString("provider", "twitter");
                promise.resolve(data);
            }
        });
    }

    @Override
    public String getName() {
        return "TwitterAuthModule";
    }

    @ReactMethod
    public void signIn(Promise promise){
        this.promise = promise;
        MainActivity activity = (MainActivity) getCurrentActivity();
        if (activity != null) {
            activity.setCallback(twitterApiClient);
        }
        twitterApiClient.authorize(activity, callback);
    }

    @ReactMethod
    public void signOut(){
        promise.resolve("logged out");
    }
}
