let Profile = () => {
  const imageUrl = "./src/assets/1.jpg";

  const handleClick = (e) => (e.target.style.display = "none");

  return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
};

export default Profile;
