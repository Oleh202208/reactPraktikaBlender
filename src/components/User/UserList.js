function UsersList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
