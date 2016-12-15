package com.reactproject;

import android.content.Context;

import com.facebook.react.bridge.ReactContext;
import com.google.gson.ExclusionStrategy;
import com.google.gson.FieldAttributes;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.reactproject.interfaces.Exclude;
import com.reactproject.rest.providers.RestProvider;
import com.reactproject.utils.Constants;
import com.reactproject.utils.ContactProvider;
import com.reactproject.utils.SharedPrefs;
import com.reactproject.utils.UserAgentProvider;
import com.reactproject.wrappers.ContactProviderModule;
import com.reactproject.wrappers.RestModule;
import com.reactproject.wrappers.SharedPrefsModule;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Dagger module for setting up provides statements.
 * Register all of your entry points below.
 */
@Module(
        complete = false, library = true,
        injects = {
                MainApplication.class,
                RestModule.class,
                UserAgentProvider.class, ContactProviderModule.class,
                SharedPrefs.class, SharedPrefsModule.class,
        }
)
public class ApplicationModule {
    @Provides
    ReactContext provideReactContext(Context context) {
        return new ReactContext(context);
    }

    @Provides
    Gson provideGson() {
        return new GsonBuilder()
                .setDateFormat("yyyy-MM-dd")
                .setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES)
                .setExclusionStrategies(new ExclusionStrategy() {
                    @Override
                    public boolean shouldSkipField(FieldAttributes f) {
                        return f.getAnnotation(Exclude.class) != null;
                    }

                    @Override
                    public boolean shouldSkipClass(Class<?> clazz) {
                        return false;
                    }
                })
                .create();
    }

    @Provides
    Retrofit provideRetrofit(Gson gson, final UserAgentProvider userAgentProvider) {
        HttpLoggingInterceptor logging = new HttpLoggingInterceptor();
        logging.setLevel(HttpLoggingInterceptor.Level.BODY);

        OkHttpClient okHttpClient = new OkHttpClient.Builder()
                .connectTimeout(60 * 1000, TimeUnit.MILLISECONDS)
                .readTimeout(60 * 1000, TimeUnit.MILLISECONDS)
                .addInterceptor(new Interceptor() {
                    @Override
                    public Response intercept(Chain chain) throws IOException {
                        Request req = chain.request();
                        Request.Builder requestBuilder = req.newBuilder()
                                .addHeader(Constants.API_KEY_HEADER, Constants.API_KEY_HEADER_VALUE)
                                .addHeader("User-Agent", userAgentProvider.get());
                        Request request = requestBuilder.build();
                        return chain.proceed(request);
                    }
                })
                .addInterceptor(logging)
                .build();

        return new Retrofit.Builder()
                .baseUrl(Constants.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create(gson))
                .client(okHttpClient)
                .build();
    }

    @Provides
    UserAgentProvider provideUserAgent() {
        return new UserAgentProvider();
    }

    @Provides
    RestProvider provideRegistrationRestProvider(Retrofit retrofit) {
        return new RestProvider(retrofit);
    }

    @Provides @Singleton
    SharedPrefs provideSharedPrefs() {
        return new SharedPrefs();
    }

    @Provides @Singleton
    ContactProvider provideContactProvider(Context context) {
        return new ContactProvider(context);
    }

}
