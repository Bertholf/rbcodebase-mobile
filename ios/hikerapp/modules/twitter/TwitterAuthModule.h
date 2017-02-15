//
//  TwitterAuthModule.h
//  hikerapp
//
//  Created by Mochamad Gufron on 2/15/17.
//  Copyright © 2017 Facebook. All rights reserved.
//
#import <React/RCTBridgeModule.h>
#ifndef TwitterAuthModule_h
#define TwitterAuthModule_h

@interface TwitterAuthModule: NSObject<RCTBridgeModule>
@property RCTPromiseResolveBlock onAfterLoginResolve;
@property RCTPromiseRejectBlock onAfterLoginReject;
@property RCTPromiseRejectBlock onAfterLogoutReject;
@property RCTPromiseResolveBlock onAfterLogoutResolve;
@end

#endif /* TwitterAuthModule_h */
