# Oliver Szavuj Portfolio Website

## Overview

This is a personal portfolio website for Oliver Szavuj, an aerospace engineering graduate student at Stanford University. The site showcases his educational background, professional experience, technical skills, and research interests in aircraft design, aerodynamics, and flight test engineering. Built as a single-page application with smooth scrolling navigation, the portfolio features a modern, tech-forward design inspired by Linear, GitHub, and Vercel aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React Single Page Application (SPA)**
- Built with React 18 using TypeScript for type safety
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (single route application with scroll navigation)
- Component-based architecture with reusable UI components from shadcn/ui

**Styling System**
- Tailwind CSS for utility-first styling with custom configuration
- Custom design tokens defined in CSS variables for theming (colors, spacing, shadows)
- Component-specific styles using CSS-in-JS for animations (clouds, particles)
- Responsive design with mobile-first approach using Tailwind breakpoints

**State Management**
- React Query (TanStack Query) for server state management and caching
- Local component state using React hooks (useState, useEffect, useRef)
- Custom hooks for reusable logic (use-toast, use-mobile)
- No global state management needed due to simple data flow

**UI Component Library**
- Radix UI primitives for accessible, unstyled components (dialogs, popovers, menus, etc.)
- shadcn/ui components built on top of Radix UI with Tailwind styling
- Custom components for portfolio sections (Hero, About, Education, Experience, etc.)
- Form handling with React Hook Form and Zod validation

**Design Features**
- Particle background animation using Canvas API
- Smooth scroll navigation with intersection observer for active section tracking
- Typewriter effect for hero text
- Card-based layout with hover effects and animations
- Glassmorphic navigation bar with backdrop blur

### Backend Architecture

**Express.js Server**
- Minimal Express server serving as API backend and static file server
- Development mode uses Vite middleware for HMR
- Production mode serves pre-built static assets
- Middleware for JSON parsing, URL encoding, and request logging

**Storage Layer**
- In-memory storage implementation (MemStorage class) for user data
- Abstracted storage interface (IStorage) for future database integration
- Currently minimal user management (getUser, getUserByUsername, createUser)

**Database Schema**
- Drizzle ORM configured for PostgreSQL with Neon serverless driver
- Schema defined with users table (id, username, password)
- Zod schemas for type-safe validation derived from Drizzle schemas
- Migration system configured but not actively used (in-memory storage currently active)

**API Design**
- RESTful API structure with /api prefix for routes
- Route registration system in server/routes.ts
- Storage abstraction allows switching from in-memory to database persistence

### External Dependencies

**Core Frameworks**
- React 18.x - UI framework
- Express 4.x - Backend server
- Vite 5.x - Build tool and dev server
- TypeScript 5.x - Type system

**Database & ORM**
- Drizzle ORM - Type-safe ORM for PostgreSQL
- @neondatabase/serverless - Serverless PostgreSQL driver
- Drizzle Kit - Schema management and migrations

**UI Libraries**
- Radix UI - Headless component primitives
- Tailwind CSS - Utility-first CSS framework
- shadcn/ui - Pre-built accessible components
- Lucide React - Icon library

**State & Forms**
- @tanstack/react-query - Server state management
- React Hook Form - Form handling
- Zod - Schema validation
- @hookform/resolvers - Form validation integration

**Development Tools**
- tsx - TypeScript execution for development
- esbuild - Production bundler for server code
- PostCSS & Autoprefixer - CSS processing
- Replit plugins - Dev tooling for Replit environment

**Third-Party Integrations**
- Google Fonts - Custom typography (Inter, JetBrains Mono, Space Grotesk)
- None currently for external APIs or services

**Session Management**
- connect-pg-simple - PostgreSQL session store (configured but not actively used)
- Prepared for future authentication implementation