async function getUser(username) {
  const res = await fetch(`/api/user/${username}`, {
    cache: "no-store"
  });

  return res.json();
}

export default async function Page({ params }) {
  const data = await getUser(params.username);

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>@{data.username}</h1>
      <p>{data.bio || "No bio"}</p>
    </div>
  );
}
