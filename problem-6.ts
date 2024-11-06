{
  // Problem 6

  interface Profile {
    name: string;
    age: string | number;
    email: string;
  }

  const updateProfile = (
    mainProfile: Profile,
    Updates: Partial<Profile>
  ): Profile => {
    return { ...mainProfile, ...Updates };
  };

  const myProfile = { name: 'Alice', age: 25, email: 'alice@example.com' };
  console.log(updateProfile(myProfile, { age: 26 }));
}
