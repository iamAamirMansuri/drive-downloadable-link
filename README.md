# Google Drive Downloadable Link

[![npm version](https://img.shields.io/npm/v/drive-downloadable-link)](https://www.npmjs.com/package/drive-downloadable-link)
[![npm downloads](https://img.shields.io/npm/dt/drive-downloadable-link)](https://www.npmjs.com/package/drive-downloadable-link)
[![GitHub license](https://img.shields.io/github/license/iamAamirMansuri/drive-downloadable-link)](https://github.com/iamAamirMansuri/drive-downloadable-link/blob/master/LICENSE)

Effortlessly generate direct downloadable links from Google Drive shareable links.

## Installation

Install the package using npm:

```bash
npm install drive-downloadable-link
```

## Usage

Convert Google Drive shareable links into direct downloadable links in just a few steps:

1. Import the `getDownloadableLink` function.
2. Provide a Google Drive shareable link as an argument.
3. Get a direct downloadable link for easy file downloads.

Example:

```javascript
import { getDownloadableLink } from "drive-downloadable-link";

const googleDriveShareableLink =
  "https://drive.google.com/file/d/1mji3dJdO_yOjcg7mlhmSBOf2rwM7XJ5h/view?usp=sharing";
const directDownloadLink = getDownloadableLink(googleDriveShareableLink);

console.log("Direct Downloadable Link:", directDownloadLink);
```

Note: Ensure the link provided is in the format `https://drive.google.com/file/d/...`.

## License

This project is licensed under the [ISC License](LICENSE).

## Issues and Contributions

Found a bug or have a question? Open an issue on [GitHub](https://github.com/iamAamirMansuri/drive-downloadable-link/issues) and let's discuss.

If you're interested in contributing, we welcome your pull requests! Check out our [contribution guidelines](CONTRIBUTING.md) for more information.
