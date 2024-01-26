# Electron App Starter

This project is a starter template for Electron Based Desktop applications
it's designed to be as unopinionated as possible and is based on [Create-Electron-Webpack](https://github.com/sprout2000/create-electron-webpack) but uses electron-vite instead to provide fast hot reloading as well as mitigate some of the known issues when using webpack with some electron related packages
All packages included in this project are entirely removable and can be replaced with your own choices , This template is designed to reduce boilerplate and to let developers focusing on building their applications as quickly as possible

# Why ElectroStatic ?

I've created many an electron project in my time,both for personal projects and for work project.
I'd gotten quite used to the process of setting projects up with my favourite tools as well but then the new generation of tools started popping up and I tried testing a few of them out to see how well they would Integrate into my current Electron workflow.The largest of these tools was Drizzle ORM and DrizzleKit which promised a fully typescript based orm for databases.Having dealt with the issues that come with using prisma in an electron application , the idea of having a fully typescript orm that ran within node was exciting.I had discovered Drizzle through [Theo Browne's](https://t3.gg) stream on youtube , where I had earlier discovered TRPC , but hadn't thought much of TRPC since then , as it looked like a web focused package , then I remembered, an Electron app is mostly a website and I went digging for how to make this work.
After refactoring a major project I was working on to use these tools , the difference in development speed was clear and I immediately set on migrating my personal projects too which I have done successfully , although some of the projects had to be rebuild from scratch to accomodate the weight of the change, It was worth it IMO.
Kuma UI , is a rather new discovery that seemed to work well within the context of the project and it came to me at the right time since [Stitches](https://stitches.dev) had announced the new unmaintained status of the product and I found Kuma UI through the devaslife youtube channel


## Genetic make up

The Key Pieces of ElectroStatic

[TRPC](https://trpc.io): This package is used as our IPC layer.Having using this package in my projects has made interprocess communication much easier , especially with the ease of [Electron TRPC](https://www.electron-trpc.dev/).I had originally used [Interprocess](https://github.com/daltonmenezes/interprocess) by Dalton Menezes , which was great, But the lack of typesaftey became a problem once my project grew significantly but luckily I found electron-trpc after some research and it's been great to me

[Radix Themes](https://www.radix-ui.com/themes): For UI Components for appearance.Being a React Native Developer primarily , and having used [Shopify Restyle](https://github.com/Shopify/restyle) many times, I love this pattern of styling , some times over tailwind for building more defined style systems.

[Unocss](https://unocss.dev):For simple additional styling where necessary or where radix-themes don't meet up to what you need.

[Drizzle](https://orm.drizzle.team) : Typescript interface for our storing data in a local database , Ideal for offline first applications and other applications that will need to store some other type of information locally that is too structured or too large for web local storage.Offline first apps have become more and more popular in Userland , and building apps with offline first in mind , is a key strategy to success for indie app developers , So drizzle and SQLite are great fits for projects targetting those environments

[Legend State](https://legendapp.com/open-source/state) : New state management library for React and javascript , focused on providing the fine grained reactivity promised by other frameworks without hacking React internals , I've used this in personal and professional projects recently after it's announcment and for a new package it shows a lot of promise , This along with [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) are my state managers of choice , I've added Legend state to this starter template because of its' relative easy of use and familiarity to people from other state managers like MobX , XState , Valtio and others like it but also to inspire me to use it a bit more in my own personal projects.

### Other Tools
Other packages that are 'essential' to electron development but
can be a hassle to setup over and over again

[React](https://react.dev) : The Default frontend framework shipped with the Starter.My personal framework of choice , I use SolidJS as well , but the UI Framework ecosystem around it leave much to be desired so I decided to leave it out for now

[ElectronVite](https://electron-vite.com) : A new way to build electron applications , previously , I've worked with webpack based starter packs , and they work great , until they don't and they become more pain than they're worth , especially when trying to work with wasm binaries and even pnpm , so I set out looking and found electron-vite , a great package and a great starter kit , but their starter seemed a bit too much for me , mostly because on scaffolding a new project , you're greeted with many folders and even a **.d.ts** file , which seemed a bit overkill for some of the things I was trying to do , so I stuck to using just the package and building my own starter around it , and here it is.This project did start as a Webpack based project but I have a feeling electron-vite I the only way you and I should go

[Electron Builder](https://electron.build.) : Tool for packaging electron apps for distribution , there isn't much to say about this package , it's pretty ubiquitous in the electron community

[Better-Sqlite3](https://github.com/wiselibs/better-sqlite3): The best way to interact with an sqlite database in nodejs and thus electron

[Biome JS](https://biomejs.dev) : Formatting and Linting.