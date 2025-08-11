# Personal Portfolio Website

This is a personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my projects, skills, and provides a way for visitors to contact me. The project is bootstrapped with Vite for a fast development experience and uses shadcn/ui for the component library.

## Features

*   **Responsive Design:** The website is fully responsive and works on all devices.
*   **Component-Based Architecture:** Built with React, the project follows a component-based architecture for easy maintenance and scalability.
*   **Styled with Tailwind CSS:** The UI is styled with Tailwind CSS, a utility-first CSS framework.
*   **UI Components by shadcn/ui:** The project uses shadcn/ui for a set of accessible and customizable components.
*   **Backend with Supabase:** Supabase is used for backend services, potentially including a database for project information or a contact form.
*   **Fast Development with Vite:** The project is set up with Vite for a fast and efficient development workflow.

## Technologies Used

*   **Frontend:**
    *   [React](https://reactjs.org/)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   [Vite](https://vitejs.dev/)
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [shadcn/ui](https://ui.shadcn.com/)
*   **Backend:**
    *   [Supabase](https://supabase.io/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm (or yarn/pnpm/bun) installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command:

```sh
npm run dev
```

This will start the development server, and you can view the application at `http://localhost:5173` (the default Vite port).

## Project Structure

The project follows a standard React project structure:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Portfolio.tsx
│   │   └── Skills.tsx
│   ├── hooks/
│   ├── integrations/
│   │   └── supabase/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── supabase/
├── package.json
└── README.md
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.