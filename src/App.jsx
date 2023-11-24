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

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  }

  const addFriend = (friend) => {
    setFriends(friends => [...friends, friend])
    setShowAddFriend(false);
  }
  
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends}/>
        {showAddFriend && 
        <AddFriendForm  
        addFriend={addFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : 'Add Friend'}</Button>
      </div>

      <FormSplitBill />
    </div>
  )
}

export default App
