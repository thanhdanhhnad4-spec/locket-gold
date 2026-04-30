export async function GET(req, { params }) {
  return Response.json({
    username: params.username,
    bio: "Demo user"
  });
}
