# CLAUDE.md - AI Assistant Guide for costablancahotels

## Claude Rules (MANDATORY)

**These rules must be followed for ALL tasks:**

1. **Plan First**: Think through the problem, read the codebase for relevant files, and write a plan to `tasks/todo.md`

2. **Create Checkable Todo List**: The plan should have a list of todo items that you can check off as you complete them

3. **Get Approval Before Starting**: Before you begin working, check in with the user to verify the plan

4. **Track Progress**: Work through the todo items, marking them as complete as you go

5. **Communicate Changes**: Every step of the way, give a high-level explanation of what changes you made

6. **SIMPLICITY IS KEY**: Make every task and code change as simple as possible. Avoid massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.

7. **Document Completion**: Add a review section to the `tasks/todo.md` file with a summary of the changes made and any other relevant information

8. **NO LAZINESS**: DO NOT BE LAZY. NEVER BE LAZY. If there is a bug, find the ROOT CAUSE and fix it. NO temporary fixes. You are a senior developer. NEVER be lazy.

9. **MINIMAL IMPACT**: Make all fixes and code changes as simple as humanly possible. They should only impact necessary code relevant to the task and nothing else. Impact as little code as possible. The goal is to NOT introduce any bugs. It's all about simplicity.

---

## Project Overview

**costablancahotels** is a web platform designed to serve as "Your Gateway to Costa Blanca" - a hotel discovery and information portal for the Costa Blanca region of Spain.

### Current Status
- **Phase**: Initial setup / Greenfield project
- **Codebase State**: Empty - awaiting initial development
- **Last Updated**: December 2025

## Repository Structure

```
costablancahotels/
├── README.md          # Project description and overview
├── CLAUDE.md          # This file - AI assistant guidelines
├── tasks/             # Task planning and tracking
│   └── todo.md        # Current task plan with checkable items
└── (awaiting setup)   # Project files to be added
```

### Planned Structure (To Be Implemented)
```
costablancahotels/
├── src/               # Source code
│   ├── components/    # UI components
│   ├── pages/         # Page components/routes
│   ├── services/      # API and business logic
│   ├── utils/         # Utility functions
│   └── styles/        # CSS/styling files
├── public/            # Static assets
├── tests/             # Test files
├── tasks/             # Task planning and tracking
│   └── todo.md        # Current task plan with checkable items
├── docs/              # Documentation
├── .github/           # GitHub workflows and templates
├── package.json       # Node.js dependencies
├── tsconfig.json      # TypeScript configuration (if applicable)
├── .gitignore         # Git ignore rules
├── .env.example       # Environment variables template
├── README.md          # Project documentation
└── CLAUDE.md          # AI assistant guidelines
```

## Development Guidelines

### For AI Assistants

When working on this project:

1. **Technology Selection**: If the user hasn't specified a tech stack, recommend and discuss options before implementing. Common choices for hotel platforms include:
   - Frontend: React, Next.js, Vue.js, or Astro
   - Styling: Tailwind CSS, CSS Modules, or styled-components
   - Backend: Node.js with Express, Next.js API routes, or similar
   - Database: PostgreSQL, MongoDB, or a headless CMS

2. **Code Style Conventions** (to be enforced once code exists):
   - Use consistent naming conventions (camelCase for JS/TS, kebab-case for files)
   - Write self-documenting code with meaningful variable names
   - Add JSDoc comments for complex functions
   - Keep components small and focused

3. **Git Workflow**:
   - Create feature branches from main
   - Write descriptive commit messages
   - Keep commits atomic and focused
   - Push to designated branches only

4. **Security Considerations**:
   - Never commit secrets or API keys
   - Validate user inputs
   - Use environment variables for configuration
   - Follow OWASP security guidelines

### Setting Up the Project

When initializing this project, ensure:

1. **Create essential configuration files**:
   - `package.json` with appropriate dependencies
   - `.gitignore` for Node.js projects
   - Environment configuration files

2. **Establish code quality tools**:
   - ESLint for linting
   - Prettier for code formatting
   - TypeScript for type safety (recommended)

3. **Set up testing infrastructure**:
   - Jest or Vitest for unit tests
   - React Testing Library for component tests
   - Cypress or Playwright for E2E tests (if applicable)

## Domain Context

### Costa Blanca Hotels Platform Features (Potential)
- Hotel listings and search functionality
- Hotel details with photos, amenities, and pricing
- Location-based filtering (cities, beaches, attractions)
- User reviews and ratings
- Booking integration or inquiry forms
- Multi-language support (Spanish, English at minimum)
- Responsive design for mobile users

### Key Entities
- **Hotels**: Properties with rooms, amenities, location data
- **Locations**: Cities, beaches, and attractions in Costa Blanca
- **Reviews**: User-submitted ratings and feedback
- **Bookings**: Reservation requests or integrations

## Commands and Scripts

*To be populated once package.json is created*

Expected scripts:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run test suite
npm run lint         # Run linting
npm run format       # Format code with Prettier
```

## Testing Strategy

*To be defined once testing framework is set up*

Recommended approach:
- Unit tests for utility functions and services
- Component tests for UI components
- Integration tests for API routes
- E2E tests for critical user flows (search, view hotel, inquiry)

## Environment Variables

*To be documented once .env structure is established*

Expected variables:
```
# Application
NODE_ENV=development
PORT=3000

# Database (if applicable)
DATABASE_URL=

# External APIs (if applicable)
API_KEY=

# Analytics (if applicable)
ANALYTICS_ID=
```

## Deployment

*To be configured*

Potential deployment targets:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- AWS/GCP/Azure

## Contributing

When contributing to this project:
1. Follow the established code conventions
2. Write tests for new functionality
3. Update documentation as needed
4. Keep this CLAUDE.md file updated with any structural changes

## Notes for AI Assistants

- This is a **greenfield project** - start by helping establish the foundation
- Prioritize clean architecture and maintainability
- Consider SEO requirements for a travel/hotel platform
- Accessibility (a11y) should be a priority
- Performance optimization matters for user experience
- Internationalization (i18n) may be needed for Spanish/English

## Changelog

### December 2025
- Initial repository created
- CLAUDE.md file created for AI assistant guidance
- Added mandatory Claude Rules for workflow (plan first, simplicity, no laziness)
- Added `tasks/todo.md` structure for task tracking
