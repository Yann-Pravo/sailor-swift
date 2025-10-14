# Production Dockerfile for Frontend
# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

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
RUN addgroup -g 1000 appuser && adduser -D -u 1000 -G appuser appuser
RUN chown -R appuser:appuser /app
USER appuser

# Expose port (Railway will set $PORT)
EXPOSE 3000

# Serve the built application
CMD serve -s dist -l ${PORT:-3000}
