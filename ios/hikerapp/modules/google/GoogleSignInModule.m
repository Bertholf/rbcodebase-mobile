//
//  GoogleSignInModule.m
//  hikerapp
//
//  Created by Mochamad Gufron on 2/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "GoogleSignInModule.h"
#import <Google/SignIn.h>
@implementation GoogleSignInModule
@synthesize onAfterLoginReject;
@synthesize onAfterLoginResolve;
@synthesize onAfterLogoutReject;
@synthesize onAfterLogoutResolve;
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(configure)
{
  [GIDSignIn sharedInstance].delegate = self;
  [GIDSignIn sharedInstance].uiDelegate = self;
  
  [GIDSignIn sharedInstance].scopes = @[@"email", @"profile"];
  [GIDSignIn sharedInstance].clientID = @"173115952010-70ri1qc45avr8oh9ppepk4bv5upd81jt.apps.googleusercontent.com";
  [GIDSignIn sharedInstance].serverClientID = @"173115952010-gsrn8acu05vuvcnsajaaoo3c5dkvjmfe.apps.googleusercontent.com";
}
- (dispatch_queue_t)methodQueue{
  return dispatch_get_main_queue();
}
RCT_EXPORT_METHOD(signIn:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
  onAfterLoginReject = reject;
  onAfterLoginResolve = resolve;
  @try {
    
    [[GIDSignIn sharedInstance] signIn];
  } @catch (NSException *exception) {
    [[GIDSignIn sharedInstance] signInSilently];
  }
}
RCT_EXPORT_METHOD(signOut:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
  onAfterLogoutReject = reject;
  onAfterLogoutResolve = resolve;
}
- (void) afterSignIn:(GIDGoogleUser *)user {
  NSLog(@"%@", user.userID);
  NSDictionary *info = @{
                         @"userId": user.userID,
                         @"idToken": user.authentication.idToken,
                         @"user": @{
                             @"email": user.profile.email,
                             @"displayName": user.profile.name
                             }
                         };
  onAfterLoginResolve(info);
}
- (void) afterSignInError:(NSError *)error{
  onAfterLoginReject( [[NSString alloc] initWithFormat:@"%ld", [error code]] , [error localizedDescription], error);
}

- (void) afterSignOut:(GIDGoogleUser *)user {
  NSDictionary *info = @{
                         @"userId": user.userID,
                         @"authCode": user.serverAuthCode,
                         @"idToken": user.authentication.idToken,
                         @"user": user.profile
                         };
  NSError *error;
  NSData *jsonData = [NSJSONSerialization dataWithJSONObject:info
                                                     options:(NSJSONWritingPrettyPrinted)
                                                       error:&error];
  
  NSString *infoString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
  onAfterLogoutResolve(infoString);
}

- (void) afterSignOutError:(NSError *)error{
  onAfterLogoutReject( [[NSString alloc] initWithFormat:@"%ld", [error code]] , [error localizedDescription], error);
}
- (void) signIn:(GIDSignIn *)signIn presentViewController:(UIViewController *)viewController {
  UIViewController *rootViewController = [[[[UIApplication sharedApplication]delegate] window] rootViewController];
  [rootViewController presentViewController:viewController animated:true completion:nil];
}

- (void) signIn:(GIDSignIn *)signIn dismissViewController:(UIViewController *)viewController {
  [viewController dismissViewControllerAnimated:true completion:nil];
}

+ (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  
  return [[GIDSignIn sharedInstance] handleURL:url
                             sourceApplication:sourceApplication
                                    annotation:annotation];
}

- (void)signIn:(GIDSignIn *)signIn didSignInForUser:(GIDGoogleUser *)user withError:(NSError *)error{
  if (error != nil){
    onAfterLoginReject( [[NSString alloc] initWithFormat:@"%ld", [error code]] , [error localizedDescription], error);
    return;
  }
  [self afterSignIn:user];
}
@end
