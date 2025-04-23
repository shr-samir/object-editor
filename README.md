# Object Editor App

## Overview

A React application that allows users to customize an object's properties using URL parameters.

The app demonstrates the use of useSearchParams and react-router-dom. The app allows users to interact with a visual object and update its properties (size, color, and corner radius) both in the UI and through URL query parameters.

## Key Functionality

- Real-time object property updates and interaction both in the UI and through URL query parameters
- Uses React Router's useSearchParams for state management
- Uses different input controls (like range, dropdown, button-based selection) for real-time interaction
- Implements responsive Tailwind CSS design
- Maintains state persistence through URL parameters


## Installation

1. Clone the repository
```bash
git clone git@github.com:shr-samir/object-editor.git
cd object-editor
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```