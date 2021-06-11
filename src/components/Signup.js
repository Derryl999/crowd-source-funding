import React from "react";

function Signup() {
  return (
    <div>
      <form action="">
        <h2>Sign Up</h2>
        <label for="email">Email</label>
        <input type="text" name="email" required />
        <div className="email error"></div>

        <label for="password">Password</label>
        <input type="password" name="password" required />
        <div className="password error"></div>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
