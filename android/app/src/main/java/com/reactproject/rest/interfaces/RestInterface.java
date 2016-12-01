package com.reactproject.rest.interfaces;

import com.reactproject.models.AuthToken;
import com.reactproject.models.http.HttpResponse;
import com.reactproject.models.http.HttpResponseWithData;
import com.reactproject.utils.Constants;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.Headers;
import retrofit2.http.POST;

/**
 * List of registration process URLs
 */
public interface RestInterface {
    @Headers({
            "Content-Type: application/x-www-form-urlencoded",
            "Accept: */*"
    })
    @FormUrlEncoded
    @POST(Constants.URL_REGISTER_FRAG)
    Call<HttpResponse> register(@Field(Constants.PARAM_PHONE_NUMBER) String phoneNumber,
                               @Field(Constants.PARAM_COUNTRY_CODE) String countryCode,
                               @Field(Constants.PARAM_COUNTRY) String country,
                               @Field(Constants.PARAM_TIMEZONE) String timezone,
                               @Field(Constants.PARAM_LANGUAGE) String language);

    @Headers({
            "Content-Type: application/x-www-form-urlencoded",
            "Accept: */*"
    })
    @FormUrlEncoded
    @POST(Constants.URL_AUTH_FRAG)
    void verify(@Field(Constants.PARAM_USERNAME) String username,
                @Field(Constants.PARAM_PASSWORD) String password,
                @Field(Constants.PARAM_GRANT_TYPE) String grantType,
                @Field(Constants.PARAM_SCOPE) String scope,
                Callback<HttpResponseWithData<AuthToken>> cb);
}
