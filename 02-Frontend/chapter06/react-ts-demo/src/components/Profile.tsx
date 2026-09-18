import { useEffect, useState } from 'react';
type UserType = {
  name: string;
  age: number;
  email?: string;
};
type ProfileProps = Omit<UserType, 'email'>;
const Profile = ({ name, age }: ProfileProps) => {
  const [user, setUser] = useState<UserType>({ name, age });

  useEffect(() => {
    const id = setTimeout(
      () =>
        setUser({
          name: 'Ada Lovelace',
          age: 37,
          email: 'test@mail.com',
          /* Object literal may only specify known properties, and 'email'
            does not exist in type 'SetStateAction<{ name: string; age: number; }>'. */
        }),
      1000,
    );

    return () => clearTimeout(id);
  }, []);

  return (
    <p>
      {user.name} is {user.age} years old
    </p>
  );
};

export default Profile;
