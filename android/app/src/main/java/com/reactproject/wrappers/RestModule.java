package com.reactproject.wrappers;

import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactproject.Injector;
import com.reactproject.models.http.HttpResponse;
import com.reactproject.rest.providers.RestProvider;

import javax.inject.Inject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Wrapper for rest module
 */
public class RestModule extends ReactContextBaseJavaModule {
    public static final String TAG = RestModule.class.getSimpleName();

    @Inject RestProvider restProvider;

    private ReactApplicationContext context;

    public RestModule(ReactApplicationContext context) {
        super(context);
        this.context = context;

        Injector.inject(this);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void register(String phone, String countryCode, String country,
                         String timezone, String locale, final Promise promise) {
        Call<HttpResponse> response = restProvider.registering(phone, countryCode, country, timezone, locale);
        response.enqueue(new Callback<HttpResponse>() {
            @Override
            public void onResponse(Call<HttpResponse> call, Response<HttpResponse> response) {
                Log.d(TAG, "Success");
                if (response.isSuccessful() && response.body().getSuccess()) {
                    promise.resolve(response.body().toJson());
                } else {
                    onError(new Exception("fail"));
                }
            }

            @Override
            public void onFailure(Call<HttpResponse> call, Throwable t) {
                t.printStackTrace();
                onError(t);
            }

            private void onError(Throwable t) {
                promise.reject(t);
            }
        });
    }
}