import axios from "axios";

export default async function activeResource(req, res) {
  const json = await axios.get("http://localhost:3001/api/activeresource");

  const resource = json.data;

  return res.send(resource);
}
