import './layout.css';

const Layout = () => {
  return (
    <>
      <div className="layout_container">
        <section className="layout_login">
          <h3>Login</h3>

          <div className="layout_login_form">
            <label htmlFor="username" className="layout_login_form_label">
              <span>Username</span>
              <input
                id="username"
                type="text"
                className="layout_login_form_username layout_login_form_input"
              />
            </label>

            <label htmlFor="password" className="layout_login_form_label">
              <span>Password</span>
              <input
                id="password"
                type="password"
                className="layout_login_form_password layout_login_form_input"
              />
            </label>

            <label htmlFor="date" className="layout_login_form_label">
              <span>date</span>
              <input
                id="date"
                type="date"
                className="layout_login_form_date layout_login_form_input"
              />
            </label>
          </div>

          <div className="layout_btn">Submit</div>
        </section>
        <section className="layout_bg">
          <header>
            <h3>Welcome to this Editor</h3>
          </header>
        </section>
      </div>
    </>
  );
};

export default Layout;
