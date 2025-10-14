# Sailor Swift

A modern full-stack authentication application built with React TypeScript, FastAPI, and PostgreSQL.

[![Tests](https://github.com/Yann-Pravo/sailor-swift/actions/workflows/test.yml/badge.svg)](https://github.com/Yann-Pravo/sailor-swift/actions/workflows/test.yml)
[![Docker Build](https://github.com/Yann-Pravo/sailor-swift/actions/workflows/docker.yml/badge.svg)](https://github.com/Yann-Pravo/sailor-swift/actions/workflows/docker.yml)
[![Backend Tests](https://img.shields.io/badge/backend%20tests-38%20passed-brightgreen)](./backend/tests)
[![Frontend Tests](https://img.shields.io/badge/frontend%20tests-48%20passed-brightgreen)](./frontend/src)
[![E2E Tests](https://img.shields.io/badge/e2e%20tests-20%20passed-brightgreen)](./frontend/tests/e2e)
[![Coverage](https://img.shields.io/badge/coverage-92%25-brightgreen)](./backend/htmlcov)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.11-blue)](https://www.python.org/)

## Features

- 🔐 **Multiple Authentication Methods**
  - Email/Password signup and login
  - Google OAuth integration
  - WalletConnect (Web3 wallet authentication)
- 🚀 **Modern Tech Stack**
  - React 19 with TypeScript
  - FastAPI with SQLAlchemy ORM
  - PostgreSQL database
  - Docker containerization
- 🎨 **Enhanced UI/UX**
  - Comprehensive component library
  - Tailwind CSS v4 for styling
  - Route protection and loading states
  - Consistent iconography with Lucide React
- 🔒 **Security First**
  - JWT access and refresh tokens
  - Bcrypt password hashing
  - Environment-based configuration
  - CORS protection
- 🧪 **Comprehensive Testing**
  - Backend unit tests with pytest (38/38 passing, 91% coverage) ✅
  - Frontend unit tests with Vitest (48/48 passing) ✅
  - E2E tests with Playwright (20/20 passing, Firefox only) ✅
  - Complete coverage for all authentication methods (email, OAuth, wallet)
  - Optimized CI/CD with browser caching
- 🚢 **Production Ready**
  - Deployed on Railway with managed PostgreSQL
  - Multi-stage Docker builds for optimization
  - Environment-based configuration
  - CORS and security hardening

## Architecture

```
sailor-swift/
├── backend/           # FastAPI application
│   ├── app/
│   │   ├── auth/      # Authentication routes and utilities
│   │   ├── models/    # SQLAlchemy database models
│   │   └── main.py    # FastAPI application entry point
│   ├── tests/         # Backend unit tests (pytest)
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/          # React TypeScript application
│   ├── src/
│   │   ├── components/ # React components and UI library
│   │   ├── pages/      # Application pages
│   │   ├── contexts/   # React context providers
│   │   ├── hooks/      # Custom React hooks
│   │   ├── services/   # API service layer
│   │   ├── test/       # Test utilities and setup
│   │   ├── lib/        # Utility functions
│   │   ├── config/     # Configuration files
│   │   └── constants/  # Application constants
│   ├── tests/         # E2E tests (Playwright)
│   └── Dockerfile
├── database/          # PostgreSQL initialization
│   └── init.sql       # Database schema and seed data
├── TESTING.md         # Testing documentation
└── docker-compose.yml # Multi-service orchestration
```

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Git

### 1. Clone the Repository

```bash
git clone <repository-url>
cd sailor-swift
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your configuration
nano .env
```

Required environment variables:

```env
ENVIRONMENT=development
JWT_SECRET_KEY=your-secret-key
POSTGRES_DB=your-database-name
POSTGRES_USER=your-database-user
POSTGRES_PASSWORD=your-secure-password
GOOGLE_CLIENT_ID=your-google-oauth-id
GOOGLE_CLIENT_SECRET=your-google-oauth-secret
VITE_GOOGLE_CLIENT_ID=your-google-oauth-id
VITE_API_URL=http://localhost:8000
WALLETCONNECT_PROJECT_ID=your-walletconnect-id
```

### 3. Start the Application

```bash
# Start database and backend
docker compose up -d

# View logs
docker compose logs -f
```

### 4. Access the Application

**Local Development:**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Database**: localhost:5432
- **Database Admin** (Adminer): http://localhost:8080

**Production (Railway):**
- **Frontend**: https://sailor-swift-production.up.railway.app
- **Backend API**: https://sailor-swift-api-production.up.railway.app
- **API Documentation**: https://sailor-swift-api-production.up.railway.app/docs

## Production Deployment

The application is deployed on Railway with the following architecture:

### Services
- **PostgreSQL Database** - Managed database with automatic backups
- **Backend API** - FastAPI service with auto-scaling
- **Frontend** - Static React app served with optimized caching

### Deployment Features
- ✅ Automatic deployments on git push
- ✅ Zero-downtime deployments
- ✅ Environment variable management
- ✅ HTTPS/SSL certificates included
- ✅ Multi-stage Docker builds for optimization
- ✅ Internal networking for database connections

### Quick Deploy to Railway

1. Fork this repository
2. Sign up at [railway.app](https://railway.app)
3. Create a new project from GitHub
4. Add PostgreSQL database
5. Configure environment variables (see `.env.example`)
6. Deploy!

For detailed deployment instructions, see the deployment guide in the repository.

## Testing

Comprehensive testing suite covering backend, frontend, and end-to-end scenarios.

### Test Coverage Summary

| Test Suite              | Tests      | Status            |
| ----------------------- | ---------- | ----------------- |
| **Backend Unit Tests**  | 38/38      | ✅ All Passing    |
| **Frontend Unit Tests** | 48/48      | ✅ All Passing    |
| **E2E Tests (Firefox)** | 20/20      | ✅ All Passing    |
| **Total**               | **106/106**| **✅ 100% Pass**  |

### Quick Test Commands

```bash
# Run all backend tests with coverage
docker compose run --rm backend pytest tests/ -v --cov

# Run all frontend unit tests
cd frontend && npm test

# Run specific test files
cd frontend && npm test -- WalletConnectButton

# Run E2E tests (requires running application)
cd frontend && npm run test:e2e

# Run E2E tests in headless mode
cd frontend && npx playwright test --project=firefox
```

### What's Tested

#### Backend (38/38 tests passing)

- ✅ User signup and login flows
- ✅ Password hashing and verification
- ✅ Google OAuth authentication
- ✅ Wallet authentication
- ✅ JWT token generation and refresh
- ✅ /auth/me endpoint with authentication
- ✅ User model and database operations

#### Frontend (48 tests)

- ✅ Authentication forms (login, signup)
- ✅ UI components (Button, inputs, etc.)
- ✅ Wallet connection component
- ✅ Google OAuth integration
- ✅ Route protection logic
- ✅ API service layer
- ✅ Form validation

#### E2E Tests (20/20 tests passing)

- ✅ Complete authentication flows (email/password)
- ✅ Session persistence and logout
- ✅ Route protection and redirects
- ✅ Form validation and error handling
- ✅ Loading states during authentication
- ✅ Network error handling
- ✅ User profile display
- ✅ Duplicate email prevention
- ✅ Optimized for Firefox (fast CI execution with browser caching)

For detailed testing instructions and strategies, see [TESTING.md](./TESTING.md).

## API Endpoints

### Authentication

| Method | Endpoint        | Description                 |
| ------ | --------------- | --------------------------- |
| POST   | `/auth/signup`  | Register new user           |
| POST   | `/auth/login`   | User login                  |
| POST   | `/auth/google`  | Google OAuth authentication |
| POST   | `/auth/wallet`  | Web3 wallet authentication  |
| POST   | `/auth/refresh` | Refresh access token        |
| POST   | `/auth/logout`  | User logout                 |
| GET    | `/auth/me`      | Get current user profile    |

### Example Requests

**Signup:**

```bash
curl -X POST http://localhost:8000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword",
    "username": "johndoe",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

**Login:**

```bash
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword"
  }'
```

## Development

### Running Individual Services

```bash
# Database only
docker compose up -d database

# Backend only (requires database)
docker compose up -d database backend

# View specific service logs
docker compose logs backend
```

### Database Management

Connect to PostgreSQL using any database client:

- **Host**: localhost
- **Port**: 5432
- **Database**: (from your .env)
- **Username**: (from your .env)
- **Password**: (from your .env)

### Project Commands

```bash
# Stop all services
docker compose down

# Rebuild services
docker compose up -d --build

# View all containers
docker compose ps

# Execute commands in containers
docker compose exec backend bash
docker compose exec database psql -U <username> -d <database>
```

## Technology Stack

### Backend

- **FastAPI**: Modern Python web framework
- **SQLAlchemy**: Database ORM
- **Pydantic**: Data validation
- **JWT**: Token-based authentication
- **Bcrypt**: Password hashing
- **PostgreSQL**: Database

### Frontend

- **React 19**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Tailwind CSS v4**: Styling
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **Lucide React**: Icons
- **Class Variance Authority**: Component variants

### Testing

- **pytest**: Backend unit testing
- **Vitest**: Frontend unit testing with React Testing Library
- **Playwright**: End-to-end testing across multiple browsers
- **React Testing Library**: Component testing utilities

### Infrastructure

- **Docker**: Containerization
- **Docker Compose**: Multi-service orchestration
- **PostgreSQL**: Database persistence

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure quality

   ```bash
   # Backend tests
   cd backend && python -m pytest

   # Frontend tests
   cd frontend && npm test
   ```

5. Submit a pull request

## Environment Variables

| Variable                   | Description                       | Required |
| -------------------------- | --------------------------------- | -------- |
| `ENVIRONMENT`              | Application environment           | Yes      |
| `JWT_SECRET_KEY`           | JWT token signing key             | Yes      |
| `POSTGRES_DB`              | Database name                     | Yes      |
| `POSTGRES_USER`            | Database username                 | Yes      |
| `POSTGRES_PASSWORD`        | Database password                 | Yes      |
| `GOOGLE_CLIENT_ID`         | Google OAuth client ID (backend)  | No\*     |
| `GOOGLE_CLIENT_SECRET`     | Google OAuth secret (backend)     | No\*     |
| `VITE_GOOGLE_CLIENT_ID`    | Google OAuth client ID (frontend) | No\*     |
| `VITE_API_URL`             | Backend API URL                   | No\*\*   |
| `WALLETCONNECT_PROJECT_ID` | WalletConnect project ID          | No\*     |

\*Required for respective authentication methods
\*\*Defaults to http://localhost:8000

## Security

- Environment variables are never committed (see `.gitignore`)
- Passwords are hashed using bcrypt 4.0.1 (compatibility tested)
- JWT tokens with automatic refresh mechanism
- CORS configured for frontend domain
- Database uses non-root user
- Route protection with authentication guards
- Google OAuth token verification
- Secure cookie-based token storage

## License

[Add your license here]

## Support

[Add support information here]
