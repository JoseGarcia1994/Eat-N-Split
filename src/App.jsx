import { useState } from 'react';
import FriendList from './components/FriendList.jsx';
import AddFriendForm from './components/AddFriendForm.jsx';
import FormSplitBill from './components/FormSplitBill.jsx';
import Button from './components/Button.jsx';
import './App.css'

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  }
  
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList />
        {showAddFriend && <AddFriendForm  />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : 'Add Friend'}</Button>
      </div>

      <FormSplitBill />
    </div>
  )
}

export default App
