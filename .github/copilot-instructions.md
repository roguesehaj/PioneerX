# PioneerX AI Coding Instructions

## Project Overview
PioneerX is a React/TypeScript landing page for an AI-powered startup ecosystem platform. The project uses a modern tech stack with Vite, shadcn/ui components, and a comprehensive design system focused on futuristic startup aesthetics.

## Architecture & Tech Stack

### Core Technologies
- **Framework**: React 18 + TypeScript + Vite
- **Routing**: React Router DOM (simple SPA structure)
- **State**: React Query for server state, React hooks for local state
- **Styling**: Tailwind CSS with extensive custom design system
- **Components**: shadcn/ui with custom variants and heavy customization
- **Build**: Vite with SWC for fast compilation

### Project Structure
```
src/
├── components/
│   ├── layout/           # App-level layout components (Header, Footer)
│   ├── sections/         # Page sections (HeroSection, FeaturesSection)
│   └── ui/              # shadcn/ui components with custom variants
├── pages/               # Route components (Index, NotFound)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (cn function for class merging)
└── assets/              # Static assets
```

## Design System & Styling

### Custom Theme Architecture
The project uses a sophisticated design system defined in `src/index.css`:
- **Color palette**: Futuristic startup theme with gradient-heavy design
- **Custom CSS variables**: Extensive use of HSL color variables for theming
- **Brand gradients**: `--gradient-primary`, `--gradient-hero`, `--gradient-tech`, `--gradient-success`
- **Animation system**: Custom keyframes and utility classes for smooth interactions

### Component Patterns
1. **Button variants**: Extensive custom variants in `button.tsx` including `hero`, `tech`, `success`, `premium` with glow effects
2. **Gradient backgrounds**: Use utility classes like `bg-gradient-hero`, `bg-gradient-tech`
3. **Interactive animations**: `hover:scale-105`, `glow-primary`, `animate-pulse-glow`
4. **Glass morphism**: `backdrop-blur-xl` with `bg-background/80` patterns

### Styling Conventions
- Use `cn()` utility (from `@/lib/utils`) for conditional class merging
- Prefer custom CSS variables over hardcoded colors
- Always include hover states with scale transforms
- Use semantic color names (`--primary`, `--success`, `--tech`) over generic ones

## Component Development

### shadcn/ui Customization
- All components are heavily customized from shadcn/ui defaults
- Button component has 9+ custom variants with animation and glow effects
- Always use `cva` (class-variance-authority) for variant management
- Import paths use `@/` alias for `src/` directory

### Animation Philosophy
- Smooth transitions with `transition-all duration-300`
- Scale on hover: `hover:scale-105` is standard
- Glow effects for premium/tech elements
- Custom keyframes in CSS for floating animations

## Development Workflow

### Available Commands
```bash
npm run dev          # Development server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint checking
npm run preview      # Preview production build
```

### ESLint Configuration
- TypeScript ESLint with React plugins
- `@typescript-eslint/no-unused-vars` disabled
- React hooks and refresh rules enabled

### Key Dependencies
- **UI Framework**: Radix UI primitives with custom styling
- **Animations**: Tailwind CSS animate + custom keyframes
- **Icons**: Lucide React (consistent throughout)
- **Forms**: React Hook Form + Zod validation (when needed)
- **State Management**: TanStack Query for server state

## Code Patterns

### Import Conventions
```typescript
// Always use alias imports
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Prefer named exports over default for utilities
```

### Component Structure
```typescript
// Standard component pattern
export function ComponentName() {
  return (
    <div className="custom-class bg-gradient-hero">
      <Button variant="tech" size="lg">
        Action
      </Button>
    </div>
  );
}
```

### Styling Best Practices
- Use semantic color variables: `text-primary`, `bg-card`, `border-card-border`
- Apply consistent spacing: `gap-4`, `px-6`, `py-4` patterns
- Include responsive design: `md:flex`, `lg:text-xl`
- Add interactive states: `hover:text-foreground`, `focus-visible:ring-2`

## Critical Files
- `src/index.css`: Complete design system and custom CSS variables
- `src/components/ui/button.tsx`: Button variants showcase custom pattern
- `components.json`: shadcn/ui configuration with path aliases
- `tailwind.config.ts`: Extended theme with custom animations and colors

## Notes for AI Agents
- This is a landing page project, not a full application (no backend integration yet)
- Heavy focus on visual polish and smooth animations
- Component library is fully customized - don't suggest vanilla shadcn/ui patterns
- Always maintain the futuristic startup aesthetic when adding features
- TypeScript is configured with relaxed rules (`noImplicitAny: false`)