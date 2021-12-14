const fs = require("fs").promises;
const path = require("path");

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

// fs.readdir(path.resolve(__dirname))
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (file === "node_modules") continue;

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    //Só pega css, se for diferente passa
    if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) {
      continue;
    }

    console.log(fileFullPath, stats.isDirectory());
  }
}

readdir("C:/Desenvolvimento/#99Cursos/TypeScript");
