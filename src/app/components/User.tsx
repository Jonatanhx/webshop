import { auth } from "../../auth";

export async function User() {
  const session = await auth();

  if (!session?.user) return null;
  return (
    <div>
      <div>{session.user.name}</div>
    </div>
  );
}
