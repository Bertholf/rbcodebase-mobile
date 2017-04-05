
const FollowersSchema = {
  // define database schema based following response
  name: 'Followers',
  primaryKey: 'relation_id',
  properties: {
    relation_id: 'int',
    follower_id: 'int',
    leader_id: 'int',
    status: 'string',
    created_at: 'string',
    updated_at: 'string',
    deleted_at: 'string',
    follower: { type: 'Follower' },
    leader: { type: 'Leader' },
  },
};

// let following = new Realm({ schema: [FollowingSchema] });
module.exports = FollowersSchema;
