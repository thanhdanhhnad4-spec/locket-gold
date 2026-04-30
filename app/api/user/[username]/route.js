
export async function GET(req, { params }) {
  const { username } = params;

  return Response.json({
    username,
    bio: "Hello from Locket clone 🚀"
  });
}
