const express = require("express");

const app = express();
const PORT = 3001;

const fs = require("fs");
const path = require("path");
const pathToFile = path.resolve("./data.json");

const getResources = () => JSON.parse(fs.readFileSync(pathToFile));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello woeld");
});

// getting resources by Id
app.get("/api/resources/:id", (req, res) => {
  const resources = getResources();
  const { id } = req.params;
  const resource = resources.find((resource) => resource.id === id);
  res.send(resource);
});

// Creating patch request end point on the server to post updated forms to the resources
app.patch("/api/resources/:id", (req, res) => {
  const resources = getResources();
  //get the id from the resource parameter
  const { id } = req.params;
  // finding the index of the resource to be updated
  const index = resources.findIndex((resource) => resource.id === id);
  // Finding active resource with the active status
  const activeResource = resources.find(
    (resource) => resource.status === "active"
  );

  resources[index] = req.body;

  // Publish resource related
  if (req.body.status === "active") {
    if (activeResource) {
      return res.status(422).send("There is active resource alreadt");
    }
    resources[index].status = "active";
    //New property to know the time published
    resources[index].activationTime = new Date();
  }

  // write the updated file to the resources using the idex of the form
  fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
    if (error) {
      return res.status(422).send("Cannot store input data in the file");
    }

    return res.send("Input data has been Updated well!");
  });
});

//Create end point to get active resources
app.get("/api/activeresource", (req, res) => {
  const resources = getResources();
  const activeResource = resources.find(
    (resource) => resource.status === "active"
  );
  res.send(activeResource);
});

app.get("/api/resources", (req, res) => {
  const resources = getResources();
  res.send(resources);
});

app.post("/api/resources", (req, res) => {
  const resources = getResources();
  const resource = req.body;

  const date = new Date();
  resource.createdAt = date.toLocaleString();

  // resource.createdAt = new Date();
  resource.status = "inactive";
  resource.id = Date.now().toString();
  resources.unshift(resource);

  fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
    if (error) {
      return res.status(422).send("Cannot store data in the file");
    }

    return res.send("Data has been saved!");
  });
});

app.listen(PORT, () => {
  console.log("server is listening on " + PORT);
});
