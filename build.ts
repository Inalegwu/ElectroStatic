import { build } from "electron-builder";

build({
  config: {
    appId: "com.electrostatic.app",
    productName: "ElectroStatic",
    artifactName: "${productName}-${version}_${platform}_${arch}.${ext}",
    buildDependenciesFromSource: true,
    files: ["out/**/*"],
    directories: {
      output: "release/${version}",
    },
    mac: {
      target: ["dmg"],
    },
    win: {
      target: [
        {
          target: "msi",
          arch: ["x64"],
        },
      ],
    },
    linux: {
      target: [
        {
          target: "AppImage",
        },
      ],
    },
    msi: {
      oneClick: true,
      perMachine: true,
      runAfterFinish: true,
    },
  },
});
