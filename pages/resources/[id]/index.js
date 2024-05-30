import Footer from "components/Footer";
import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";

const ResourceDetail = ({ resource }) => {
  const activeResource = () => {
    // making patch request
    axios
      .patch("/api/resources", { ...resource, status: "active" })
      // consumimg the promise
      .then((_) => alert("Resources has been published👍"))
      //Catching error possible
      .catch((_) => alert("Cannot publish the resource"));
  };

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} min</p>
                    <Link
                      href={`/resources/${resource.id}/edit`}
                      className="button is-warning"
                    >
                      Update
                    </Link>
                    <button
                      onClick={activeResource}
                      className="button is-success ml-1"
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

// export async function getStaticPaths() {
//   const resData = await fetch("http://localhost:3001/api/resources");
//   const data = await resData.json();
//   const paths = data.map((resource) => {
//     return {
//       params: { id: resource.id },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getServerSideProps({ params }) {
//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${params.id}`
//   );
//   const data = await dataRes.json();
//   // const data = await resData.json();

//   return {
//     props: {
//       resource: data,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await dataRes.json();

  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;
