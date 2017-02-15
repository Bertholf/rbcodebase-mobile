//
//  TwitterAuthModule.m
//  hikerapp
//
//  Created by Mochamad Gufron on 2/15/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "TwitterAuthModule.h"
#import <TwitterKit/TwitterKit.h>
#import "Constant.h"
@implementation TwitterAuthModule
@synthesize onAfterLoginResolve;
@synthesize onAfterLoginReject;
@synthesize onAfterLogoutResolve;
@synthesize onAfterLogoutReject;

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(signIn:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject){
  self.onAfterLoginResolve = resolve;
  self.onAfterLoginReject = reject;
  [[Twitter sharedInstance] logInWithCompletion:^(TWTRSession *session, NSError *error){
    if(error != nil){
      onAfterLoginReject( [[NSString alloc] initWithFormat:@"%ld", [error code]] , [error localizedDescription], error);
    }
    
    NSDictionary *info = @{
                           @"userId": [session userID],
                           @"token": [session authToken],
                           @"tokenSecret": [session authTokenSecret],
                           @"user": @{
                               @"username": [session userName],
                               }
                           };
    onAfterLoginResolve(info);
  }];
  
}
RCT_EXPORT_METHOD(signOut:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject){
  self.onAfterLogoutResolve = resolve;
  self.onAfterLogoutReject = reject;
  resolve(@YES);
}
@end
