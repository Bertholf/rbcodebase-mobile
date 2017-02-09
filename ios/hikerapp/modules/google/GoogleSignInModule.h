//
//  GoogleSignInModule.h
//  hikerapp
//
//  Created by Mochamad Gufron on 2/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//
#import <React/RCTBridgeModule.h>
#import <GoogleSignIn/GoogleSignIn.h>
#ifndef GoogleSignInModule_h
#define GoogleSignInModule_h

@interface GoogleSignInModule: NSObject<RCTBridgeModule, GIDSignInDelegate, GIDSignInUIDelegate>
  @property RCTPromiseResolveBlock onAfterLoginResolve;
  @property RCTPromiseRejectBlock onAfterLoginReject;
  @property RCTPromiseRejectBlock onAfterLogoutReject;
  @property RCTPromiseResolveBlock onAfterLogoutResolve;
@end
#endif /* GoogleSignInModule_h */
