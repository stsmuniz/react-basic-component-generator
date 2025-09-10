#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const folderName = 'components';
const args = process.argv.slice(2);
const componentName = args[0];
const componentFolderPath = path.join(folderName, componentName);

const indexComponent = 'index.tsx';
const styleComponent = args[1] === 'styled' ? 'styles.tsx' : 'styles.module.css';
const functionsComponent = 'functions.ts';

const templateFolder = args[1] === 'styled' ? 'templates/styledComponents' : 'templates';

// Função para ler templates
const readComponentTemplate = (template) => {
  try {
    const data = fs.readFileSync(template, 'utf-8');
    console.log(`Template ${template} read successfully.`);
    return data;
  } catch (err) {
    console.error(`Error reading ${template} component template:`, err);
    throw err;
  }
};

// Função para processar templates
const processTemplate = (content, name) => {
  return content
    .replace(/changeMe/g, name)
    .replace(/ChangeMe/g, name)
    .replace(/CHANGE_ME/g, name.toUpperCase().replace(/([A-Z])/g, '_$1').slice(1));
};

// Função para criar arquivos
const createFile = (fileName) => {
  console.log(`Creating file: ${fileName}`);
  const filePath = path.join(componentFolderPath, fileName);
  
  let templateFile;
  if (fileName === functionsComponent) {
    templateFile = path.join('templates', functionsComponent);
  } else {
    templateFile = path.join(templateFolder, fileName);
  }

  try {
    const content = readComponentTemplate(templateFile);
    const processedContent = processTemplate(content, componentName);
    
    fs.writeFileSync(filePath, processedContent);
    console.log(`File '${filePath}' created successfully.`);
  } catch (error) {
    console.error(`Error creating file ${fileName}:`, error);
    throw error;
  }
};

// Função para mostrar ajuda
const showHelp = () => {
  console.log(`
📦 React Component Generator
Usage: generate-component <ComponentName> [options]

Options:
  styled          Use styled-components instead of CSS Modules
  --help, -h      Show this help message

Examples:
  generate-component Button          # Creates component with CSS Modules
  generate-component Card styled     # Creates component with styled-components
  `);
};

// Validação de entrada
if (!componentName || componentName.trim() === '-h' || componentName.trim() === '--help') {
  showHelp();
  process.exit(1);
}

// Validação do nome do componente
if (!/^[A-Z][a-zA-Z]*$/.test(componentName)) {
  console.error('❌ Component name must start with uppercase letter and contain only letters');
  process.exit(1);
}

// Criação do componente
try {
  if (!fs.existsSync(componentFolderPath)) {
    fs.mkdirSync(componentFolderPath, { recursive: true });
    console.log(`Folder '${componentFolderPath}' created successfully.`);
    
    createFile(indexComponent);
    createFile(styleComponent);
    createFile(functionsComponent);
    
    console.log(`🎉 Component ${componentName} generated successfully!`);
  } else {
    console.log(`❌ Folder '${componentFolderPath}' already exists.`);
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error creating component:', error);
  
  // Cleanup on failure
  if (fs.existsSync(componentFolderPath)) {
    fs.rmSync(componentFolderPath, { recursive: true, force: true });
    console.log(`🧹 Cleaned up: ${componentFolderPath}`);
  }
  
  process.exit(1);
}