FROM node:22-alpine

WORKDIR /app

# Build args (CapRover passes these automatically)
ARG BASE_PATH
ARG CAPROVER_GIT_COMMIT_SHA

ENV NODE_ENV=production
ENV BASE_PATH=${BASE_PATH}
LABEL org.opencontainers.image.revision=${CAPROVER_GIT_COMMIT_SHA}

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy application files
COPY . .

# Create data directory if it doesn't exist
RUN mkdir -p public/data/weather/current

# Make start script executable
RUN chmod +x start.sh

# Expose port (CapRover will set PORT env var)
EXPOSE 80

# Use start script to run both services
CMD ["sh", "start.sh"]

