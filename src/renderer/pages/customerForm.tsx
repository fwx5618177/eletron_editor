const CustomerForm = () => {
  const handleSubmit = (...args) => {
    console.log(args);
  };

  return (
    <>
      <div className="layout_login_form">
        <form action="" method="post">
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
        </form>
      </div>
      <input
        className="layout_btn"
        type="submit"
        value="Submit"
        onClick={handleSubmit}
      />
    </>
  );
};

export default CustomerForm;
