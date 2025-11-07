export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;

    console.log("Resume viewed by:", name);

    // Future me tu yaha database connect kar sakta hai
    return res.status(200).json({ message: "Name received!" });
  }

  res.status(405).json({ error: "Method not allowed" });
}
