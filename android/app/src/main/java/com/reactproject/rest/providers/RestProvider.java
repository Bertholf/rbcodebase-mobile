package com.reactproject.rest.providers;


import com.reactproject.models.AuthToken;
import com.reactproject.models.http.HttpResponse;
import com.reactproject.models.http.HttpResponseWithData;
import com.reactproject.rest.interfaces.RestInterface;
import com.reactproject.utils.Constants;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Retrofit;

/**
 * Provide service for registration
 */
public class RestProvider {
    /**
     * Properties
     */
    private Retrofit retrofit;

    /**
     * Constructor
     * @param retrofit
     */
    public RestProvider(Retrofit retrofit) {
        this.retrofit = retrofit;
    }

    private RestInterface getService() {
        return retrofit.create(RestInterface.class);
    }

    /**
     * Registering new contact
     * @param phoneNumber
     * @param countryCode
     * @param country
     * @param timezone
     * @param language
     * @return HttpResponse
     */
    public Call<HttpResponse> registering(String phoneNumber, String countryCode, String country, String timezone, String language) {
        return getService().register(phoneNumber, countryCode, country, timezone, language);
    }

    /**
     * Get auth token
     * @param username
     * @param password
     * @param cb
     */
    public void verifying(String username, String password, Callback<HttpResponseWithData<AuthToken>> cb) {
        getService().verify(username, password, Constants.DEFAULT_GRANT_TYPE, Constants.DEFAULT_SCOPE, cb);
    }
}