const createRouting = (route) => route;

const routing = createRouting({
  root: {
    relativePath: "/",
    absolutePath: "/",
  },
  "index-view": {
    relativePath: "index-view",
    absolutePath: "/index-view",
  },
  "read-view": {
    relativePath: "read-view",
    absolutePath: "/read-view",
  },
  "edit-view": {
    relativePath: "edit-view",
    absolutePath: "/edit-view",
  },
});

export const getRelativePath = (name) => {
  return routing[name].relativePath;
};

export const getAbsolutePath = (name) => {
  return routing[name].absolutePath;
};
