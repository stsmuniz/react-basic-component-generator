# React Component Generator

A powerful CLI tool to generate React components with support for both CSS Modules and Styled Components. This generator helps streamline your React development workflow by creating consistent, well-structured component files.

## Features

- 🚀 Generate React components with a single command
- 🎨 Support for both CSS Modules and Styled Components
- 📁 Creates organized folder structure
- 📝 TypeScript-ready templates
- 🔧 Customizable template system
- 🛠️ Includes utility functions file
- ✅ Consistent code style across components

## Installation

### Global Installation (Recommended)

```bash
npm install -g react-component-generator
```

### Local Installation

```bash
npm install --save-dev react-component-generator
```

## Usage

### Basic Usage

```bash
# Generate component with CSS Modules (default)
generate-component ComponentName

# Generate component with Styled Components
generate-component ComponentName styled
```

### Using with npx

```bash
# Without installing
npx react-component-generator ComponentName

# With Styled Components
npx react-component-generator ComponentName styled
```

### Local Installation Usage

If installed locally, add a script to your package.json:

```json
{
  "scripts": {
    "generate": "generate-component"
  }
}
```

Then run:

```bash
npm run generate ComponentName
```

## Generated Structure

### With CSS Modules (Default)

```
components/
└── ComponentName/
    ├── index.tsx
    ├── styles.module.css
    └── functions.ts
```

### With Styled Components

```
components/
└── ComponentName/
    ├── index.tsx
    ├── styles.tsx
    └── functions.ts
```

## Templates

### CSS Modules Template

**index.tsx**

```tsx
import styles from "./styles.module.css";
import { HelloWorld } from "./functions";

export const ComponentName = () => {
  return (
    <div className={styles.container}>
      <HelloWorld />
    </div>
  );
};
```

**styles.module.css**

```css
.container {
  display: flex;
  justify-items: center;
  align-items: center;
}
```

**functions.ts**

```ts
export const HelloWorld: string = () => {
  return "Hello World";
};
```

### Styled Components Template

**index.tsx**

```tsx
import React from "react";
import { ComponentName } from "./styles";

export function ComponentName() {
  return <ComponentName></ComponentName>;
}
```

**styles.tsx**

```tsx
import styled from "styled-components";

export const ComponentName = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
```

## Customization

You can customize the templates by modifying the files in the `templates` directory:

1. Clone the repository
2. Modify the template files in the `templates` folder
3. Install your customized version globally

## API Reference

### Command Line Options

```
generate-component <ComponentName> [styled]

Arguments:
  ComponentName   Name of the component to generate (PascalCase recommended)
  styled          Optional flag to use Styled Components instead of CSS Modules
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development

To set up the development environment:

1. Clone the repository

```bash
git clone https://github.com/stsmuniz/react-component-generator.git
cd react-component-generator
```

2. Install dependencies

```bash
npm install
```

3. Link for local development

```bash
npm link
```

## Testing

To test the generator:

```bash
# Test CSS Modules generation
node generate-component.js TestComponent

# Test Styled Components generation
node generate-component.js TestComponent styled

# Test error handling
node generate-component.js
```

## License

This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details.

## Author

**Salustiano Muniz**

- GitHub: [@stsmuniz](https://github.com/stsmuniz)
- Repository: [https://github.com/stsmuniz/react-component-generator](https://github.com/stsmuniz/react-component-generator)

## Support

If you encounter any issues or have questions, please file an issue on the [GitHub issue tracker](https://github.com/stsmuniz/react-component-generator/issues).

## Changelog

### v1.0.0

- Initial release
- Support for CSS Modules and Styled Components
- Basic template structure
- Command-line interface

## Roadmap

- [ ] Add TypeScript types generation
- [ ] Support for different testing frameworks (Jest, Testing Library)
- [ ] Option to generate storybook stories
- [ ] Custom template path configuration
- [ ] Interactive mode with prompts

## Acknowledgments

- Inspired by the need for consistent component structure in React projects
- Thanks to the React community for best practices and patterns
