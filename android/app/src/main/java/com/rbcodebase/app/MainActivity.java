package com.rbcodebase.app;

import com.facebook.react.ReactActivity;
import com.twitter.sdk.android.core.identity.TwitterAuthClient;

import android.content.Intent;

public class MainActivity extends ReactActivity {
    TwitterAuthClient authClient;
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
             super.onActivityResult(requestCode, resultCode, data);
            if (authClient != null) {
                authClient.onActivityResult(requestCode, resultCode, data);
            }
             MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
    
    @Override
    protected String getMainComponentName() {
        return "hikerapp";
    }

    public void setCallback(TwitterAuthClient authClient){
        this.authClient = authClient;
    }

}
