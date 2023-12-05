# Electron App Starter

This project is a starter template for Electron Based Desktop applications
it's designed to be as unopinionated as possible and is based on [Create-Electron-Webpack](https://github.com/sprout2000/create-electron-webpack)
My Only opinion here is Kuma-UI , and that is entirely removable , like every other part of this project

## Contents

Electron-TRPC , TRPC , Tanstack/Query: This is used as our IPC layer

Kuma-UI : Styling and Base components , theme config and the likes

React : Our Frontend framework of choice , branches for Solid JS will be available soon , PR's welcome for additional frameworks

Drizzle-ORM & Drizzle-Kit + better-sqlite3 : This acts as our storage layer for applications that will need to store some for of data , this can be removed if you don't need that
