import { useState } from "react";

interface UserFormProps {
  onUserAdd: (user: { name: string; email: string }) => void;
}

function UserForm({ onUserAdd }: UserFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    onUserAdd({ name, email });
    console.log("Form submitted with:", { name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Name</label>
        <input type="text" id="name" name="name" onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" onChange={e => setEmail(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;