export const fileTreeData = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "Header.jsx",
              type: "file",
            },
            {
              name: "Footer.jsx",
              type: "file",
            },
            {
              name: "Sidebar",
              type: "folder",
              children: [
                {
                  name: "Sidebar.jsx",
                  type: "file",
                },
                {
                  name: "SidebarItem.jsx",
                  type: "file",
                },
              ],
            },
          ],
        },
        {
          name: "pages",
          type: "folder",
          children: [
            {
              name: "About.jsx",
              type: "file",
            },
            {
              name: "Contact.jsx",
              type: "file",
            },
            {
              name: "auth",
              type: "folder",
              children: [
                {
                  name: "Login.jsx",
                  type: "file",
                },
                {
                  name: "Register.jsx",
                  type: "file",
                },
              ],
            },
          ],
        },
        {
          name: "services",
          type: "folder",
          children: [
            {
              name: "api.js",
              type: "file",
            },
            {
              name: "authService.js",
              type: "file",
            },
          ],
        },
        {
          name: "styles",
          type: "folder",
          children: [
            {
              name: "global.css",
              type: "file",
            },
            {
              name: "theme.css",
              type: "file",
            },
          ],
        },
      ],
    },
    {
      name: "public",
      type: "folder",
      children: [
        {
          name: "assets",
          type: "folder",
          children: [
            {
              name: "images",
              type: "folder",
              children: [
                {
                  name: "icon.png",
                  type: "file",
                },
                {
                  name: "banner.jpg",
                  type: "file",
                },
              ],
            },
            {
              name: "videos",
              type: "folder",
              children: [
                {
                  name: "intro.mp4",
                  type: "file",
                },
              ],
            },
          ],
        },
        {
          name: "manifest.json",
          type: "file",
        },
        {
          name: "robots.txt",
          type: "file",
        },
      ],
    },
    {
      name: "config",
      type: "folder",
      children: [
        {
          name: "webpack.config.js",
          type: "file",
        },
        {
          name: "babel.config.js",
          type: "file",
        },
      ],
    },
    {
      name: ".gitignore",
      type: "file",
    },
    {
      name: "README.md",
      type: "file",
    },
  ],
};
