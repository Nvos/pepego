# pepego

# Installation

### Backend

1. Install **Golang** - https://golang.org/dl/
2. Ensure that **GOPATH** is set - https://github.com/golang/go/wiki/SettingGOPATH
3. Download **dep** - https://github.com/golang/dep/releases (thought you can possibly install dependencies using go get aswell thought dep is more convenient)
4. Add dep to env. variables
5. Clone project to GOPATH/src go into backend folder and run **dep ensure** which will download all dependencies

### Frontend

1. Install node (preferably latest stable) - https://nodejs.org/en/
2. Install pnpm globally - **npm install -g pnpm**
3. Go into root project directory and run **pnpm install** which will install all required dependencies and link packages

# Running

### Frontend

In root project directory navigate to apps/todoapp and run **pnpm start** which will run application in development mode on http://localhost:3000

### Backend

In root project directory navigate to backend and run **go run server/server.go** which will start backend on http://localhost:8080

# Frontend dependencies

- Typescript/React
  - (Tutorial / examples explaining React types) https://github.com/piotrwitek/react-redux-typescript-guide
  - (Standard official react guide(JavaScript)) https://reactjs.org/tutorial/tutorial.html
- Apollo
  - (Official tutorial) https://www.apollographql.com/docs/react/essentials/get-started.html
- Apollo codegen
  - (Generate types and compoents based off queries) https://graphql-code-generator.com/. Currently module **models** contains generated graphql components based off queries present in **api** module
- Immer
  - (Immutability helper - creates patches based off draft which is applied on object) https://github.com/mweststrate/immer
- Create React App (Typescript)
  - (Standard react project scaffolder) https://facebook.github.io/create-react-app/. Currently it is ejected and configured and provided as module in tools **react-scripts**
- Styled components
  - (Goto library for styling components) https://www.styled-components.com/. Currently it is imported only in **ui** module

# Backend dependencies

- Gqlgen
  - (Graphql backend for go) https://gqlgen.com/. One of few options in ecosystem. Fully typed, schema first, generates code based off schema. Docs are quire poor, github repo examples are better to get to know more advanced features

# Codegen

- To generate frontend graphql components run **pnpm run codegen** in **models** module.
- To generate backend code run **go run scripts/gqlgen.go** in backend directgory. Resolver file is currently not regenerated thuz it is necessary to implement generated interfaces manually.

# Tooling

- For go code best options are jetbrains goland or vscode with go plugin
- For frontend best option is vscode with following plugins
  - Bracket Pair Colorizer
  - Prettier
  - Scss IntelliSense
  - vscode-styled-components (there's currently problem with typing generic components thus it is recomended to fork or manually update regex for interpolation start)
  - Tslint

# Resources

- Good starter book for go - https://www.openmymind.net/The-Little-Go-Book/
