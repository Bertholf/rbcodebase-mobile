package com.reactproject;

import android.app.Application;
import android.app.Instrumentation;
import android.content.Context;

import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.crashlytics.android.Crashlytics;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactproject.wrappers.ReactPackageWrapper;

import java.util.Arrays;
import java.util.List;

import io.fabric.sdk.android.Fabric;

public class MainApplication extends Application implements ReactApplication {
    private static MainApplication instance;

    public MainApplication() {}

    public MainApplication(final Context context) {
        this();
        attachBaseContext(context);
    }

    public MainApplication(final Instrumentation instrumentation) {
        this();
        attachBaseContext(instrumentation.getTargetContext());
    }

    @Override
    public void onCreate() {
        super.onCreate();

        Fabric.with(this, new Crashlytics());
        if (instance == null) {
            instance = this;
        }

        // Perform injection
        Injector.init(getRootModule(), this);

    }

    /**
     * Get root module
     * @return Object
     */
    private Object getRootModule() {
        return new RootModule();
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new ReactPackageWrapper(),
                    new ReactNativeLocalizationPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
    }

    public static MainApplication getInstance() {
        return instance;
    }
}
