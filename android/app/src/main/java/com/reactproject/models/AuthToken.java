package com.reactproject.models;

import java.io.Serializable;

/**
 * Auth Token class
 */
public class AuthToken implements Serializable {

    /**
     * Local properties
     */
    private String tokenType;
    private String scope;
    private String resourceOwner;
    private String expiresIn;
    private String accessToken;

    /**
     * Constructor
     */
    public AuthToken() {

    }

    /**
     * Construcot with params
     * @param tokenType
     * @param scope
     * @param resourceOwner
     * @param expiresIn
     * @param accessToken
     */
    public AuthToken(String tokenType, String scope, String resourceOwner, String expiresIn, String accessToken) {
        this.tokenType = tokenType;
        this.scope = scope;
        this.resourceOwner = resourceOwner;
        this.expiresIn = expiresIn;
        this.accessToken = accessToken;
    }

    /**
     * Get token type
     * @return String
     */
    public String getTokenType() {
        return tokenType;
    }

    /**
     * Set token type
     * @param tokenType
     */
    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    /**
     * Get scope
     * @return String
     */
    public String getScope() {
        return scope;
    }

    /**
     * Set scope
     * @param scope
     */
    public void setScope(String scope) {
        this.scope = scope;
    }

    /**
     * Get resource owner
     * @return String
     */
    public String getResourceOwner() {
        return resourceOwner;
    }

    /**
     * Set resource owner
     * @param resourceOwner
     */
    public void setResourceOwner(String resourceOwner) {
        this.resourceOwner = resourceOwner;
    }

    /**
     * Get expires in
     * @return String
     */
    public String getExpiresIn() {
        return expiresIn;
    }

    /**
     * Set expires in
     * @param expiresIn
     */
    public void setExpiresIn(String expiresIn) {
        this.expiresIn = expiresIn;
    }

    /**
     * Get access token
     * @return String
     */
    public String getAccessToken() {
        return accessToken;
    }

    /**
     * Set access token
     * @param accessToken
     */
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}

