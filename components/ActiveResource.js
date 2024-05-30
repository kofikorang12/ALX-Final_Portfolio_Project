import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

function ActiveResource() {
  const [resource, setResource] = useState({});

  useEffect(() => {
    async function fetchResource() {
      const axiosRes = await axios.get("/api/activeresource");
      const resource = axiosRes.data;
      setResource(resource);
    }
    fetchResource();
  }, []);
  return (
    <div className="active-resource">
      <h1 className="resource-name">Welcome to JobFinder</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time"></h2>
      </div>

      <Link className="button" href="/">
        Find Job Here 👇🏼
      </Link>
    </div>
  );
}

export default ActiveResource;
