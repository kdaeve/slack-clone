<a id="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kdaeve/slack-clone">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Slack Clone</h3>

  <p align="center">
    Slack Clone with Next.js, Convex, Tailwind, Lucide, Shadcn/UI, and more.
    <br />
    <a href="https://github.com/kdaeve/slack-clone"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kdaeve/slack-clone">View Demo</a>
    &middot;
    <a href="https://github.com/kdaeve/slack-clone/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/kdaeve/slack-clone/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

TBD

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Convex][Convex.com]][Convex-url]
* [![Tailwind][Tailwind.com]][Tailwind-url]
* [![Lucide][Lucide.com]][Lucide-url]
* [![Shadcn][Shadcn.com]][Shadcn-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the following installed:
* Node.js (v18 or higher)
* npm (v9 or higher) or yarn
* Git

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/kdaeve/slack-clone.git
   ```
2. Navigate to the project directory
   ```sh
   cd slack-clone
   ```
3. Install dependencies
   ```sh
   npm install
   # or
   yarn install
   ```
4. Set up environment variables
   - Create a `.env.local` file in the root directory
   - Add your environment variables (refer to `.env.example` for required variables)
   
5. Run the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```
6. Open your browser and visit `http://localhost:3000`

### Deployment

To build and start the production server:
```sh
npm run build
npm run start
# or
yarn build
yarn start
```

For more information about deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Basic Navigation
1. **Authentication**: Sign in using Google, GitHub, or email credentials
2. **Workspace Management**:
   - Create new workspaces for different teams or projects
   - Manage workspace members and permissions
   - Customize workspace preferences
3. **Channels & Communication**:
   - Create channels for different topics or teams
   - Send messages and share files
   - Mention users with @username

### Screenshots
![Workspace View](images/workspace-screenshot.png)
![Channel View](images/channel-screenshot.png)


For more detailed documentation, please refer to our [User Guide](https://github.com/kdaeve/slack-clone/wiki/User-Guide).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- FEATURES -->
## Features
- [x] Authentication
    - [x] Google login
    - [x] GitHub login
    - [x] Email login
- [x] Workspace management
    - [x] Create workspace
    - [x] Delete workspace
    - [x] Update workspace
    - [x] Channel creation
    - [ ] User invitations


<!-- ROADMAP -->
## Roadmap

- [x] Implement authentication UI
- [x] Develop authentication logic
    - [x] Google login
    - [x] GitHub login
    - [x] Email login
- [x] Create user button component
- [x] Build workspace creation
  
- [x] Develop components
   - [x] Toolbar
   - [x] Sidebar

- [x] Workspace features
    - [x] Manage workspace members
    - [x] Implement workspace header
    - [x] Configure workspace preferences
    - [x] Handle channels & members
    - [x] Create channel
    - [ ] Implement user invitations

See the [open issues](https://github.com/kdaeve/slack-clone/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/kdaeve/slack-clone/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kdaeve/slack-clone" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

TBD

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Taylor Wu - [@X](https://x.com/KDA__Akali) - email@email_client.com

Project Link: [https://github.com/kdaeve/slack-clone](https://github.com/kdaeve/slack-clone)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kdaeve/slack-clone.svg?style=for-the-badge
[contributors-url]: https://github.com/kdaeve/slack-clone/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kdaeve/slack-clone.svg?style=for-the-badge
[forks-url]: https://github.com/kdaeve/slack-clone/network/members
[stars-shield]: https://img.shields.io/github/stars/kdaeve/slack-clone.svg?style=for-the-badge
[stars-url]: https://github.com/kdaeve/slack-clone/stargazers
[issues-shield]: https://img.shields.io/github/issues/kdaeve/slack-clone.svg?style=for-the-badge
[issues-url]: https://github.com/kdaeve/slack-clone/issues
[license-shield]: https://img.shields.io/github/license/kdaeve/slack-clone.svg?style=for-the-badge
[license-url]: https://github.com/kdaeve/slack-clone/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/taylor-w-503b28234
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Convex.com]: https://img.shields.io/badge/Convex-000000?style=for-the-badge&logo=convex&logoColor=white
[Convex-url]: https://www.convex.dev/
[Tailwind.com]: https://img.shields.io/badge/Tailwind_CSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Lucide.com]: https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white
[Lucide-url]: https://lucide.dev/
[Shadcn.com]: https://img.shields.io/badge/Shadcn-000000?style=for-the-badge&logo=shadcn&logoColor=white
[Shadcn-url]: https://ui.shadcn.com/