
const FollowingSchema = {
  // define database schema based following response
  name: 'Following',
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
    // leader: 'Leader',
  },
};

// let following = new Realm({ schema: [FollowingSchema] });
module.exports = FollowingSchema;
