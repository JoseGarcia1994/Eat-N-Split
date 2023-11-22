import Button from "./Button.jsx";

const AddFriendForm = () => {
  return (
    <form className="form-add-friend">
      <label>Friend Name</label>
      <input type="text" />

      <label>Image Url</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
};

export default AddFriendForm;