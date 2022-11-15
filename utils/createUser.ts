const CreateUser = async (
  name: string,
  email: string,
  password: string
): Promise<any> => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

export default CreateUser;