import { useState } from 'react';
import { initialFriends } from './data';
import FriendList from './components/FriendList.jsx';
import AddFriendForm from './components/AddFriendForm.jsx';
import FormSplitBill from './components/FormSplitBill.jsx';
import Button from './components/Button.jsx';
import './App.css'

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  }

  const addFriend = (friend) => {
    setFriends(friends => [...friends, friend])
    setShowAddFriend(false);
  }

  const handleSelectedFriend = friend => {
    setSelectedFriend(cur => cur?.id === friend.id ? null : friend);
    setShowAddFriend(false)
  }

  const splitBill = (value) => {
    setFriends(friends => 
      friends.map(friend =>
        friend.id === selectedFriend.id
        ? {...friend, balance: friend.balance + value}
        : friend
    ))

    setSelectedFriend(null)
  }
  
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList 
        friends={friends} 
        handleSelectedFriend={handleSelectedFriend}
        selectedFriend={selectedFriend}
        />

        {showAddFriend && 
        <AddFriendForm  
        addFriend={addFriend} />}

        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : 'Add Friend'}</Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} splitBill={splitBill}/>}
    </div>
  )
}

export default App
