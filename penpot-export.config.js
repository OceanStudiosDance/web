// @ts-check
require('dotenv').config()

if (typeof process.env.PENPOT_ACCESS_TOKEN !== 'string') {
  throw new Error('Missing PENPOT_ACCESS_TOKEN environment variable')
}

/**
 * @type {import('@penpot-export/core').UserConfig}
 */
const config = {
  instance: process.env.PENPOT_BASE_URL || undefined,
  accessToken: process.env.PENPOT_ACCESS_TOKEN,
  files: [
    {
      fileId: 'e21d721b-b52f-80fd-8006-b2a74bcb1e76',
      colors: [
        {
          format: 'scss',
          output: 'app/styles/colors.css', // 👈 Path where your colors SCSS file should be generated.
        },
      ],
      typographies: [
        {
          format: 'json',
          output: 'app/styles/typographies.css', // 👈 Path where your typographies JSON file should be generated.
        },
      ],
    },
    {
      fileId: 'e21d721b-b52f-80fd-8006-b2a74bcb1e76',
      pages: [
        {
          pageId: '71b1702b-2eb1-81d6-8002-f82a5f182088',
          format: 'css',
          output: 'app/styles/ui.css', // 👈 Path where your page components CSS file should be generated.
        },
      ],
    },
  ],
}

module.exports = config
