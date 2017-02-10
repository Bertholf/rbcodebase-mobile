package com.rbcodebase.app.modules.google;

/**
 * Created by gufy on 2/8/17.
 */


import android.app.Activity;
import android.content.Intent;
import android.content.IntentSender;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableNativeMap;
import com.rbcodebase.app.Constants;
import com.google.android.gms.auth.api.Auth;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.auth.api.signin.GoogleSignInResult;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.Scopes;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.common.api.ResultCallback;
import com.google.android.gms.common.api.Scope;
import com.google.android.gms.common.api.Status;
import com.rbcodebase.app.R;


/**
 * Created by k on 21/4/16.
 */
public class GoogleSignInModule extends ReactContextBaseJavaModule {
    public static String TAG = GoogleSignInModule.class.getSimpleName();
    private GoogleApiClient mGoogleApiClient;

    private ActivityEventListener googleSigninIntentListener;
    private ActivityEventListener signInResolutionIntentListener;

    public GoogleSignInModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return "GoogleSignInModule";
    }

    @ReactMethod
    public void signIn(final Promise promise) {
        withGoogleApiClient(
                new Runnable() {
                    @Override
                    public void run() {
                        getCurrentActivity().runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                attemptGoogleSignIn(promise);
                            }
                        });
                    }
                },
                new Runnable() {
                    @Override
                    public void run() {

                        promise.reject("failed", "connectionError");
                    }
                }
        );
    }

    @ReactMethod
    public void signOut(final Promise promise) {
        withGoogleApiClient(
                new Runnable() {
                    @Override
                    public void run() {
                        getCurrentActivity().runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                Auth.GoogleSignInApi.signOut(mGoogleApiClient).setResultCallback(
                                        new ResultCallback<Status>() {
                                            @Override
                                            public void onResult(Status status) {
                                                WritableNativeMap data = new WritableNativeMap();
                                                data.putString("status", "logged out");
                                                data.putString("message", status.getStatusMessage());

                                                promise.resolve(data);
                                            }
                                        }
                                );
                            }
                        });
                    }
                },
                new Runnable() {
                    @Override
                    public void run() {
                        promise.reject("failed", "connectionError");
                    }
                }
        );
    }

    @ReactMethod
    public void revokeAccess(final Promise promise) {
        withGoogleApiClient(
                new Runnable() {
                    @Override
                    public void run() {
                        getCurrentActivity().runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                Auth.GoogleSignInApi.revokeAccess(mGoogleApiClient).setResultCallback(
                                        new ResultCallback<Status>() {
                                            @Override
                                            public void onResult(Status status) {
                                                WritableNativeMap data = new WritableNativeMap();
                                                data.putString("status", "access revoked    ");
                                                data.putString("message", status.getStatusMessage());

                                                promise.resolve(data);
                                            }
                                        }
                                );
                            }
                        });
                    }
                },

                new Runnable() {
                    @Override
                    public void run() {
                        promise.reject("failed", "connectionError");
                    }
                }
        );
    }

    private void withGoogleApiClient(final Runnable onConnected, final Runnable onConnectionError) {
        if (mGoogleApiClient != null) {
            mGoogleApiClient.disconnect();
            mGoogleApiClient = null;
        }

        Activity currentActivity = getCurrentActivity();
        Log.d(TAG, "withGoogleApiClient: starting");
        if (currentActivity == null) {
            onConnectionError.run();
            return;
        }
        Log.d(TAG, "withGoogleApiClient: beginning");

        GoogleSignInOptions googleSignInOptions = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestEmail()
                .requestScopes(
                        new Scope(Scopes.EMAIL),
                        new Scope(Scopes.PROFILE)
                )
                .requestIdToken(currentActivity.getString(R.string.server_client_id))
                .requestServerAuthCode(currentActivity.getString(R.string.server_client_id))
                .build();

        mGoogleApiClient = new GoogleApiClient.Builder(getCurrentActivity())
                .addConnectionCallbacks(new GoogleApiClient.ConnectionCallbacks() {
                    @Override
                    public void onConnected(Bundle bundle) {
                        onConnected.run();
                    }

                    @Override
                    public void onConnectionSuspended(int i) {
                        mGoogleApiClient.connect();
                    }
                })
                .addOnConnectionFailedListener(new GoogleApiClient.OnConnectionFailedListener() {
                    @Override
                    public void onConnectionFailed(final ConnectionResult connectionResult) {

                        if (connectionResult.hasResolution()) {
                            getCurrentActivity().runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    resolveGoogleSignInError(
                                            connectionResult,
                                            new Runnable() {
                                                @Override
                                                public void run() {
                                                    withGoogleApiClient(onConnected, onConnectionError);
                                                }
                                            },
                                            new Runnable() {
                                                @Override
                                                public void run() {
                                                    Log.d(TAG, connectionResult.getErrorMessage());
                                                    onConnectionError.run();
                                                }
                                            }
                                    );
                                }
                            });
                        } else {
                            onConnectionError.run();
                        }
                    }
                })
                .addApi(Auth.GOOGLE_SIGN_IN_API, googleSignInOptions)
                .build();

        mGoogleApiClient.connect();
    }

    private void resolveGoogleSignInError(
            final ConnectionResult result, final Runnable onResolution, final Runnable onResolutionFailed
    ) {
        if (signInResolutionIntentListener != null) {
            getReactApplicationContext().removeActivityEventListener(signInResolutionIntentListener);
            signInResolutionIntentListener = null;
        }

        signInResolutionIntentListener = new ActivityEventListener() {
            @Override
            public void onNewIntent(Intent intent) {

            }

            @Override
            public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
                if (requestCode == Constants.GOOGLE_SIGNIN_RESOLUTION) {
                    if (resultCode != Activity.RESULT_OK) {
                        onResolution.run();
                    } else {
                        onResolutionFailed.run();
                    }

                    getReactApplicationContext().removeActivityEventListener(signInResolutionIntentListener);
                    signInResolutionIntentListener = null;
                }
            }
        };

        try {
            result.startResolutionForResult(getCurrentActivity(), Constants.GOOGLE_SIGNIN_RESOLUTION);
        } catch (IntentSender.SendIntentException e) {
            onResolutionFailed.run();
        }
    }

    private void attemptGoogleSignIn(final Promise promise) {
        if (googleSigninIntentListener != null) {
            getReactApplicationContext().removeActivityEventListener(googleSigninIntentListener);
            googleSigninIntentListener = null;
        }

        googleSigninIntentListener = new ActivityEventListener() {
            @Override
            public void onNewIntent(Intent intent) {

            }

            @Override
            public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
                if (requestCode == Constants.GOOGLE_SIGNIN_RESULT) {
                    final GoogleSignInResult result = Auth.GoogleSignInApi.getSignInResultFromIntent(data);
                    handleSignInResult(result, promise);

                    getReactApplicationContext().removeActivityEventListener(googleSigninIntentListener);
                    googleSigninIntentListener = null;
                }
            }

        };

        getReactApplicationContext().addActivityEventListener(googleSigninIntentListener);

        Intent signInIntent = Auth.GoogleSignInApi.getSignInIntent(mGoogleApiClient);
        getCurrentActivity().startActivityForResult(signInIntent, Constants.GOOGLE_SIGNIN_RESULT);
    }

    private void handleSignInResult(GoogleSignInResult result, Promise promise) {
        Log.d("result", String.valueOf(result.getStatus().toString()));
//        Log.d("result", result.getStatus().getStatusMessage());
        if (result.isSuccess()) {
            GoogleSignInAccount account = result.getSignInAccount();
            Log.d("token", account.getIdToken());
            Log.d("serverCode", account.getServerAuthCode());
            WritableNativeMap data = new WritableNativeMap();
            WritableNativeMap user = new WritableNativeMap();
            user.putString("name", account.getDisplayName());
            user.putString("email", account.getEmail());
            user.putString("photo", account.getPhotoUrl().toString());
            data.putMap("user", user);
            data.putString("idToken", account.getIdToken());
            data.putString("authCode", account.getServerAuthCode());

            promise.resolve(data);
        } else {
            promise.reject("failed", "authError");
        }
    }
}
