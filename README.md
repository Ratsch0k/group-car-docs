# Group Car Docs
Source of the documentation website for the project **Group Car**

Links:
 - Website: https://my-group-car.de
 - Repositories:
   - Frontend: https://github.com/Ratsch0k/group-car
   - Backend: https://github.com/Ratsch0k/group-car-api

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment
To deploy a version simply create a new release with a sensible version and a description of the new release.
For pre-releases the description can be omitted.

For now, each release (including pre-releases) will deploy the commit on which the tag was created.
In the future the plan is that only releases should trigger a deployment, and that GitHub pages is used to show the current state of the development branch.

A new version tag should follow the *major.minor.patch* principle.

#### Deployment Process
As mentioned before, to deploy a new version simply create a new release in GitHub.
This will trigger the GitHub workflow in `.github/workflows/ci.yml`. 

This workflow consists of two jobs. **Build** and **Deploy**.

##### Build
In this job the command `yarn build` is executed to test if the project can be built without errors.

##### Deploy
Here, the project is build via `yarn build`.
Then, the generated static site is copied to the server which currently hosts the documentation website.
This will deploy the release.