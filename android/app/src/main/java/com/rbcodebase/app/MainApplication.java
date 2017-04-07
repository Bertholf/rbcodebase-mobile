package com.rbcodebase.app;

import android.app.Application;

import com.crashlytics.android.Crashlytics;
import com.facebook.react.ReactApplication;
import com.evollu.react.fcm.FIRMessagingPackage;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import io.fullstack.oauth.OAuthManagerPackage;
import com.imagepicker.ImagePickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.microsoft.codepush.react.CodePush;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.mapbox.reactnativemapboxgl.ReactNativeMapboxGLPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import io.fabric.sdk.android.Fabric;
import java.util.Arrays;
import java.util.List;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.rbcodebase.app.modules.google.GoogleSignInPackage;
import com.rbcodebase.app.modules.twitter.TwitterAuthPackage;
import com.twitter.sdk.android.Twitter;
import com.twitter.sdk.android.core.TwitterAuthConfig;
import org.pgsqlite.SQLitePluginPackage;

public class MainApplication extends Application implements ReactApplication {
  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();
  protected static CallbackManager getCallbackManager() {
      return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new SQLitePluginPackage(),
              new MainReactPackage(),
              new FIRMessagingPackage(),
              new ReactNativeLocalizationPackage(),
              new RCTSplashScreenPackage(),
              new OAuthManagerPackage(),
              new ImagePickerPackage(),
              new VectorIconsPackage(),
              new GoogleSignInPackage(),
              new ReactMaterialKitPackage(),
              new ReactNativeMapboxGLPackage(),
              new TwitterAuthPackage(),
              new FBSDKPackage(mCallbackManager),
              new CodePush("4h-aS_f7gtPEyNlpBeeL9LqAaRkVNkidNuy8f", MainApplication.this, BuildConfig.DEBUG)
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    String TWITTER_CONSUMER_KEY = getResources().getString(R.string.twitter_consumer_key);
    String TWITTER_CONSUMER_SECRET = getResources().getString(R.string.twitter_consumer_secret);;
    TwitterAuthConfig authConfig = new TwitterAuthConfig(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET);
    Fabric.with(this, new Crashlytics(), new Twitter(authConfig));
    SoLoader.init(this, /* native exopackage */ false);
    FacebookSdk.sdkInitialize(getApplicationContext());
  }
}
