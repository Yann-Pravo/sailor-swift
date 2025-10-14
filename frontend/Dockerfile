# Production Dockerfile for Frontend
# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Declare build arguments for Vite environment variables
ARG VITE_API_URL
ARG VITE_GOOGLE_CLIENT_ID
ARG VITE_WALLETCONNECT_PROJECT_ID

# Set them as environment variables for the build
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID
ENV VITE_WALLETCONNECT_PROJECT_ID=$VITE_WALLETCONNECT_PROJECT_ID

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve with lightweight server
FROM node:20-alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Install serve to run the built app
RUN npm install -g serve

# Create non-root user for security
RUN addgroup -S appuser && adduser -S -G appuser appuser
RUN chown -R appuser:appuser /app
USER appuser

# Expose port (Railway will set $PORT)
EXPOSE 3000

# Serve the built application
CMD serve -s dist -l ${PORT:-3000}
