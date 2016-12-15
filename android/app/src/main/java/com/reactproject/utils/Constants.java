package com.reactproject.utils;

/**
 * Place constants here
 */
public class Constants {
    public static final String BASE_URL = "http://api.bixboxapptest.com";
    public static final String API_KEY_HEADER = "v2.0.0";
    public static final String API_KEY_HEADER_VALUE = "X-API-Bixbox";

    // param for registration
    public static final String PARAM_PHONE_NUMBER = "phone";
    public static final String PARAM_DISPLAY_NAME = "display_name";
    public static final String PARAM_AVATAR = "avatar";
    public static final String PARAM_INTERESTS = "interests[]";
    public static final String PARAM_COUNTRY_CODE = "country_code";
    public static final String PARAM_COUNTRY = "country";
    public static final String PARAM_TIMEZONE = "timezone";
    public static final String PARAM_LANGUAGE = "locale";

    // username and password params for auth
    public static final String PARAM_USERNAME = "username";
    public static final String PARAM_PASSWORD = "password";
    public static final String PARAM_GRANT_TYPE = "grant_type";
    public static final String PARAM_SCOPE = "scope";
    public static final String DEFAULT_GRANT_TYPE = "password";
    public static final String DEFAULT_SCOPE = "all";

    public static final String URL_REGISTER_FRAG = "/auth/register";
    public static final String URL_AUTH_FRAG = "/auth";

    public static final String RESPONSE = "response";
    public static final String AUTH_RESPONSE = "auth_response";

    public static final String APPLICATION_ACCOUNT_TYPE = "com.reactproject";
    public static final String APPLICATION_AUTHTOKEN_TYPE = APPLICATION_ACCOUNT_TYPE;

    public static final class DataType {
        public static final String STRING = "String";
        public static final String INTEGER = "Integer";
        public static final String BOOLEAN = "Boolean";
        public static final String SET = "Set";
        public static final String FLOAT = "Float";
        public static final String LONG = "Long";
    }

    public static final class DataTypeKey {
        public static final int STRING = 1;
        public static final int INTEGER = 2;
        public static final int BOOLEAN = 3;
        public static final int SET = 4;
        public static final int FLOAT = 5;
        public static final int LONG = 6;
    }

    public static final class  DeviceState {
        public static final String STATE = "state";
        public static final String BATTERY = "battery";
        public static final String POWER = "power";
        public static final String AIRPLANE = "airplane";
        public static final String STORAGE = "storage";

    }

}
