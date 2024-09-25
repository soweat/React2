export default async function Page() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();
  return (
    <ui>
      {ports.map((post) => (
        <li key={post.id}>{post.tilte}</li>
      ))}
    </ui>
  );
}
