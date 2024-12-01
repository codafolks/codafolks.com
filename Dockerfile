# Stage 1: Build the Vite app
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy project files
COPY . .

# Build the project
RUN bun run build

# Stage 2: Serve the built files
FROM oven/bun:latest

WORKDIR /app

# Copy built files and server script
COPY --from=builder /app/dist ./dist
COPY server.js .

EXPOSE 3009

CMD ["bun", "server.js"]
