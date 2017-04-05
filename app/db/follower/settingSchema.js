const SettingSchema = {
  name: 'Setting',
  primary_key: 'id',
  properties: {
    id: 'int',
    user_id: 'int',
    privacy_follow: { type: 'string', default: 'all' },
    privacy_follow_confirm: { type: 'string', default: 'all' },
    privacy_comment: { type: 'string', default: 'all' },
    privacy_post: { type: 'string', default: 'all' },
    privacy_timeline_post: { type: 'string', default: 'all' },
    privacy_message: { type: 'string', default: 'all' },
    email_follow: { type: 'int', default: 0 },
    email_post_like: { type: 'int', default: 0 },
    email_post_share: { type: 'int', default: 0 },
    email_comment_post: { type: 'int', default: 0 },
    email_comment_like: { type: 'int', default: 0 },
    email_comment_reply: { type: 'int', default: 0 },
    created_at: { type: 'date', default: null },
    updated_at: { type: 'date', default: null },
  },
};

module.exports = SettingSchema;
