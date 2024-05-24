import "./Header.css";

function Header() {
  return (
    <div className="outer-div-header">
      <div className="inner-div-header">
        <div className="home inner-block">
          <h2>Home</h2>
        </div>
        <div className="contact-us inner-block">
          <h2>Contact</h2>
        </div>
        <div className="blogs inner-block">
          <h2>Blogs</h2>
        </div>
        <h1>Abhi aur kaam kazi karna hai</h1>
      </div>
    </div>
  );
}

export default Header;
