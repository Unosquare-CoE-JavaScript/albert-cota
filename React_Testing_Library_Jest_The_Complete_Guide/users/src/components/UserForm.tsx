import { useState } from "react";

function UserForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted with:", { name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Name</label>
        <input type="text" id="name" onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={e => setEmail(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;