
const FollowerSchema = {
  name: 'Follower',
  primary_key: 'id',
  properties: {
    id: 'int',
    name_first: 'string',
    name_last: 'string',
    name_display: 'string',
    name_slug: 'string',
    email: 'string',
    cell_number: 'string',
    cell_carrier: 'string',
    status: 'int',
    confirmation_code: 'string',
    confirmed: 'int',
    verified: 'int',
    language: 'string',
    timezone: 'string',
    date_birth: 'date',
    timeline_id: 'int',
    img_avatar: { type: 'string', default: null },
    img_background: { type: 'string', default: null },
    gender: { type: 'string', default: 'male' },
    picture: 'string',
    access_token: { type: 'string', default: null },
    registered: { type: 'bool', default: null },
    // setting: 'string',
  },
};

module.exports = FollowerSchema;
