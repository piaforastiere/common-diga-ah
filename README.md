# Common DIGA-AH Component Library

This repository contains a collection of reusable React components built with TypeScript and styled with Styled-components. Integrate ready-to-use components into your React projects with ease, ensuring code consistency and saving development time.

## Features

- Written in TypeScript for type-safe components.
- Styled with Styled-components for easy theming and component customization.
- Tooling setup with ESLint and Prettier for code quality and consistency.
- Includes common React UI components like date pickers and phone number input fields.

## Prerequisites

Before installing the library into your project, ensure you have the following installed:

- Node.js (preferably the latest stable version)
- npm (comes with Node.js)

Make sure that your project meets the `peerDependencies` requirements:

- `react` >= 16.11.0

## Installing `common-diga-ah`

To install the library using npm, run the following command in your project directory:

```sh
npm install common-diga-ah --save
```

Remember that this library is not published on npm and the above command will not work unless it is published. You should use it as if this package were available on npm.

## Linking Library Locally

If you want to link the library locally to test the components within a React and TypeScript application, follow these steps:

1. **Build the Library**

   Navigate to the root directory of the `common-diga-ah` library and run the following command to generate the build artifacts:

   ```sh
   npm run build
   ```

2. **Link the Library**

   While still in the root directory of the library, create a global symlink for the package:

   ```sh
   npm link
   ```

3. **Link to Your Project**

   In your React application directory, link the global symlink to your local project.

   ```sh
   npm link common-diga-ah
   ```

   Now your local changes in the `common-diga-ah` library will be reflected in your React and TypeScript application.

## Available Scripts

The following npm scripts are available to help with the development:

- `npm run test`: Run the tests (currently no tests are specified).
- `npm run build`: Transpile TypeScript to JavaScript in the `build` folder.
- `npm run lint`: Run ESLint to identify and report on patterns in the code.
- `npm run lint:fix`: Fix many of the lint issues automatically.
- `npm run format`: Format the code using Prettier for a consistent coding style.

## Usage

Import the components you need from the built library and use them within your React components:

```jsx
import React from 'react';
import { YourComponent } from 'common-diga-ah';

const App = () => {
  return (
    <div>
      <YourComponent />
    </div>
  );
};

export default App;
```

Replace `YourComponent` with the actual component name from the library.

## Dependencies

Here is a list of direct dependencies that may be useful to know about:

- `@fontsource/plus-jakarta-sans`: Typography library.
- `dayjs`: Lightweight time formatter.
- `react-icons`: Popular icon library for React.
- `react-phone-number-input`: A phone number input component.

Make sure these are installed and accessible in your application if they are required in the consuming application for the complete functionality.

## Contributing

If you want to contribute to this project, you are welcome to submit pull requests, report bugs or suggest features.

Ensure you follow the set coding standards by using ESLint and Prettier and test your components before submitting a pull request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.