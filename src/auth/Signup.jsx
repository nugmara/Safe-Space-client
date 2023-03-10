function Signup() {
  return (
    <div>
      <h1>Sign up</h1>

      <form>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={undefined}
          onChange={undefined}
        />

        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          value={undefined}
          onChange={undefined}
        />

        <label>Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={undefined}
          onChange={undefined}
        />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={undefined}
          onChange={undefined}
        />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={undefined}
          onChange={undefined}
        />

        <label>Select an image</label>
        <select name="image">
          <option value=""></option>
        </select>
      </form>
    </div>
  );
}

export default Signup;
