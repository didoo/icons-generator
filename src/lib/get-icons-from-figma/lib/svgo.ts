import SVGO from "svgo";

export const svgo = new SVGO({
  // @ts-ignore
  multipass: true,
  plugins: [
    {
      removeTitle: true
    },
    {
      removeViewBox: false
    },
    {
      removeStyleElement: true
    },
    {
      removeAttrs: {
        attrs: [
          "xmlns:xlink",
          "id",
          "class",
          "data-name",
          "fill",
          "transform",
          "href",
          "clip-path",
          "clip-rule"
        ]
      }
    },
    {
      removeEmptyContainers: true
    },
    {
      sortAttrs: true
    },
    {
      removeUselessDefs: true
    },
    {
      removeEmptyText: true
    },
    {
      removeEditorsNSData: true
    },
    {
      removeEmptyAttrs: true
    },
    {
      removeHiddenElems: true
    },
    {
      collapseGroups: true
    }
  ]
});
