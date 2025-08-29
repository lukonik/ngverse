# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

NgVerse is an Angular workspace containing two main projects:

### Core Library (`projects/ngverse/`)

- **Angular library**: Component library with 30+ UI components, directives, and services
- **Copy-paste approach**: Components designed to be copied into user projects rather than installed as dependency
- **Component structure**: Each UI component in `projects/ngverse/src/lib/ui/` follows consistent patterns
- **Schematics**: Angular schematics available for generating components (`ui`, `pipe`, `animation`)

### Documentation Site (`projects/docs/`)

- **Angular SSR application**: Documentation and showcase site at https://lukonik.github.io/ngverse/
- **Component examples**: Live examples for each UI component in `projects/docs/src/app/examples/`
- **Documentation pages**: Component documentation in `projects/docs/src/app/features/`

## Development Commands

### Building and Testing

````

### Quality Checks

```bash

# Test ngVerse
npm run test:offline

# Full library check (lint + format + test + build)
npm run check:ngverse

# Full docs check (build + lint + format)
npm run check:docs

# Watch schema tests
npm run schema:test-watch
````

## Component Architecture

### UI Components Pattern

Each component follows this structure:

- Main component file (e.g., `button.component.ts`)
- Optional sub-components for complex components
- CSS styling with custom properties for theming
- Comprehensive test coverage (`.spec.ts` files)
- Uses Angular's OnPush change detection strategy

### Key Architectural Decisions

- **Standalone components**: All components use Angular standalone architecture
- **CSS custom properties**: Theming via CSS variables
- **Service-based overlays**: Dialog, drawer, toast use Angular services for programmatic control
- **Directive-based utilities**: Outside click, context menu, etc. implemented as directives

## Code Style and Conventions

### Development Philosophy

**IMPORTANT**: This project follows modern Angular 20+ patterns and coding standards. See `instructions.md` for comprehensive guidelines including:

- Signals-first approach for state management
- Standalone components and modern APIs
- Performance optimization strategies
- Template and component best practices

### Tailwind CSS Guidelines

- **CSS Files**: Always add `@reference "tailwindcss"` at the top of CSS files when using Tailwind classes with `@apply` directives
- **IDE Support**: This provides better intellisense and autocomplete for Tailwind classes

### Component Documentation Guidelines

When creating Preview and Examples for NgVerse components:

- **Preview**: Create a preview showing the default behavior of the component
- **Examples**: Create common usage examples for the component
- **Reference**: Use `@projects/docs/src/app/features/button-page/` as a reference for structure and implementation

### Angular Schematics Configuration

- Components: CSS styling, OnPush change detection, skipTests for docs
- Docs project prefix: `doc`
- Library project prefix: `app`

### Component Categories (from sidebar navigation)

- **Form**: Input, Form Field, Multi Select, OTP Input, Select, Checkbox, Radio Button, Textarea, Switch
- **Panel**: Accordion, Alert, Card, Tab
- **Button**: Button
- **Overlay**: Dialog, Drawer, Popover, Toast, Tooltip
- **Menu**: Context Menu
- **Data**: Pagination, Table
- **Misc**: Dark Mode, Divider, Loader, Progress Bar, Skeleton, Badge
- **Icon**: Font Icon, Icon

## Testing and Quality

- **Karma + Jasmine**: Unit testing framework
- **ESLint**: Code linting with Angular-specific rules
- **Prettier**: Code formatting with Tailwind CSS plugin
- **Husky + lint-staged**: Pre-commit hooks for formatting
- **ChromeHeadless**: Headless browser testing for CI

## Build and Release

- **ng-packagr**: Library building
- **Semantic Release**: Automated versioning and publishing
- **Copyfiles**: Asset copying during build
- **Sitemap generation**: SEO optimization for docs site

## MCP Integration

The project includes MCP (Model Context Protocol) configuration in `mcp.json`:

- **Angular CLI MCP Server**: Provides Angular-specific tooling and context via `@angular/cli mcp`
- Enables enhanced Angular development capabilities through MCP integration

## Creating New NgVerse Components

When asked to create a new NgVerse component, follow this complete workflow:

### 1. Git Workflow

- **Checkout latest main branch**: Ensure you're working from the most recent codebase
- **Create feature branch**: Name branch after the component (e.g., `feature/dropdown-component`)

### 2. Component Development

- **Create component in NgVerse**: Implement in `projects/ngverse/src/lib/ui/[component-name]/`
- **Sub-components**: Create sub-components if necessary for complex components
- **Follow patterns**: Use existing components as reference for structure and conventions
- **Reference implementation**: Use `@projects/ngverse/src/lib/ui/button/` as structural reference

### 3. Documentation Development

- **Create docs page**: Add component page in `projects/docs/src/app/features/[component]-page/`
- **Preview component**: Create preview showing default behavior
- **Examples**: Create multiple usage examples demonstrating component variants
- **API documentation**: Add comprehensive `apiInfo` with inputs, outputs, descriptions
- **Source tree**: Configure `sourceTree` showing component file structure
- **Reference documentation**: Use `@projects/docs/src/app/features/button-page/` as documentation page reference
- **Reference examples**: Use `@projects/docs/src/app/examples/button/` as examples structure reference

### 4. Testing

- **Unit tests**: Add comprehensive unit tests for NgVerse component (`.spec.ts`)
- **No docs tests**: Skip testing docs project components (examples, previews, pages)
- **Test coverage**: Ensure all component functionality is tested

### 5. Quality Assurance

- **Run quality checks**: Execute `npm run check:ngverse` and `npm run check:docs`
- **Run tests**: Execute `npm run test:offline` to ensure all tests pass
- **Fix issues**: Address any linting, formatting, or test failures

### 6. Git Completion

- **Commit changes**: Use conventional commit messages describing the component addition
- **Push branch**: Push feature branch to remote repository
- **Create PR**: Open pull request with comprehensive description of the new component

### Example Workflow Commands

```bash
# 1. Checkout and create branch
git checkout main
git pull origin main
git checkout -b feature/dropdown-component

# 2-4. Development work (component, docs, tests)

# 5. Quality checks
npm run check:ngverse
npm run check:docs
npm run test:offline

# 6. Git completion
git add .
git commit -m "feat: add dropdown component with examples and documentation"
git push origin feature/dropdown-component
# Create PR via GitHub UI or gh CLI
```

## Commit Standards

- Follow Conventional Commit standard for commit messages
