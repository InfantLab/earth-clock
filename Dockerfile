FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production

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

