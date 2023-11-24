import Friend from './Friend.jsx';

const FriendList = ({friends, handleSelectedFriend, selectedFriend}) => {

  return (
    <ul>
      {friends.map(friend => (
        <Friend 
        key={friend.id} 
        friend={friend} 
        handleSelectedFriend={handleSelectedFriend}
        selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendList;