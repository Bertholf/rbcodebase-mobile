import auth from './auth';

const updatePref = (id, user_id, privacy_follow, privacy_follow_confirm, privacy_comment, privacy_post, privacy_timeline_post, privacy_message, emai_follow, email_post_like, email_post_share, email_comment_post, email_comment_like, email_comment_reply) => {
  auth.updateSetting(id, user_id, privacy_follow, privacy_follow_confirm, privacy_comment, privacy_post, privacy_timeline_post, privacy_message, emai_follow, email_post_like, email_post_share, email_comment_post, email_comment_like, email_comment_reply)
  .then((response) => {
    console.log('update===', response);
  })
};


export default updatePref;
