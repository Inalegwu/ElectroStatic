# Electron App Starter

This project is a starter template for Electron Based Desktop applications
it's designed to be as unopinionated as possible and is based on [Create-Electron-Webpack](https://github.com/sprout2000/create-electron-webpack)
My Only opinion here is Kuma-UI , and that is entirely removable , like every other part of this project

# Why ElectroStatic ?

I've created many an electron project in my time,both for personal projects and for work projects(rarely).
I'd gotten quite used to the process of setting projects up with my favourite tools as well but then the new generation of tools started popping up and I tried testing a few of them out to see how well they would Integrate into my current Electron workflow.The largest of these tools was Drizzle ORM and DrizzleKit which promised a fully typescript based orm for databases.Having dealt with the issues that come with using prisma in an electron application , the idea of having a fully typescript orm that ran within node was exciting.I had discovered Drizzle through [Theo Browne's](https://t3.gg) stream on youtube , where I had earlier discovered TRPC , but hadn't thought much of TRPC since then , as it looked like a web focused package , then I remembered, an Electron app is mostly a website and I went digging for how to make this work.
After refactoring a major project I was working on to use these tools , the difference in development speed was clear and I immediately set on migrating my personal projects too which I have done successfully , although some of the projects had to be rebuild from scratch to accomodate the weight of the change, It was worth it IMO.
Kuma UI , is a rather new discovery that seemed to work well within the context of the project and it came to me at the right time since [Stitches](https://stitches.dev) had announced the new unmaintained status of the product and I found Kuma UI through the devaslife youtube channel

```
    don't forget to add a .npmrc file if you're going to be using pnpm as this project uses electron builder to package electron apps
    and electron-builder doesn't work well with it
```

## Genetic make up

### What packages make up ElectroStatic ?

[TRPC](https://trpc.io): This package is used as our IPC layer.Having using this package in my projects has made interprocess communication much easier , especially with the ease of [Electron TRPC](https://www.electron-trpc.dev/).I had originally used [Interprocess](https://github.com/daltonmenezes/interprocess) by Dalton Menezes , which was great, But the lack of typesaftey became a problem once my project grew significantly but luckily I found electron-trpc after some research and it's been great to me

[Kuma-UI](https://www.kuma-ui.com/): For Simple Utility Components for styling , any developer that has used Chakra-UI or Nativebase will be familiar with this kind of package , Being a React Native Developer primarily , and having used [Shopify Restyle](https://github.com/Shopify/restyle) many times, I love this pattern of styling , some times over tailwind for building more defined style systems.

[React](https://react.dev) : The Default frontend framework shipped with the Starter. A Branch specific to Solid JS Will be created in the near future , as these are the two frameworks I develop in primarily, pull requests for other frameworks are welcome as well

[Drizzle](https://orm.drizzle.team) : Typescript interface for our storing data in a local database , Ideal for offline first applications and other applications that will need to store some other type of information locally that is too structured for web local storage

[Electron Builder](https://electron.build.) : Tool for packaging electron apps for distribution , there isn't much to say about this package , it's pretty ubiquitous in the electron community

# ElectroStatic CLI

### coming soon

Electrostatic CLI , is a tool that I have recently started working on , to allow the creation of new ElectroStatic apps to be as simple as an npm/yarn/pnpm command , but that will be when I've gotten this project repo to a point where I am fully confident in the apps being created with this project , as well as battling the issues that arise with this stack in the final stages of the electron workflow within my own projects , which will make it as fixes into the project
