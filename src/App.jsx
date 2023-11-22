import FriendList from './components/FriendList.jsx';
import AddFriendForm from './components/AddFriendForm.jsx';
import FormSplitBill from './components/FormSplitBill.jsx';
import './App.css'
import Button from './components/Button.jsx';

function App() {
  
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList />
        <AddFriendForm />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill />
    </div>
  )
}

export default App
