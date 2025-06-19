interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {


    const renderUsers = users.map((user: User) => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <hr />
      </div>
    ));
    return (
        <div>
            <h2>User List</h2>
            {renderUsers}
        </div>
    );
}

export default UserList;