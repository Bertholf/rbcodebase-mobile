package com.reactproject.models.http;

import com.google.gson.Gson;

/**
 * Modelled http response
 */
public class HttpResponse {
    /**
     * Local properties
     */
    protected Boolean success;
    protected String error;
    protected String message;

    /**
     * Get success
     * @return Boolean
     */
    public Boolean getSuccess() {
        return success;
    }

    /**
     * Set success
     * @param success
     */
    public void setSuccess(Boolean success) {
        this.success = success;
    }

    /**
     * Get error
     * @return String
     */
    public String getError() {
        return error;
    }

    /**
     * Set error
     * @param error
     */
    public void setError(String error) {
        this.error = error;
    }

    /**
     * Get message
     * @return String
     */
    public String getMessage() {
        return message;
    }

    /**
     * Set message
     * @param message
     */
    public void setMessage(String message) {
        this.message = message;
    }

    public  String toJson() {
        return new Gson().toJson(this);
    }

    public static HttpResponse generateDefaultErrorResponse() {
        HttpResponse response = new HttpResponse();
        response.setSuccess(false);
        response.setError("fail");
        response.setMessage("fail");
        return response;
    }
}

