import { initialFriends } from '../data';
import Friend from './Friend.jsx';

const FriendList = () => {
  const friends = initialFriends

  return (
    <ul>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id}/>
      ))}
    </ul>
  );
};

export default FriendList;