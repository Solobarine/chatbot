# Use official Ruby image
FROM ruby:3.2

# Set working directory
WORKDIR /app

# Copy Gemfile and Gemfile.lock first
COPY Gemfile Gemfile.lock ./

# Copy all application files
COPY . .

# Copy environment file
COPY .env .env

# Expose Rails port
EXPOSE 5000

# Run bundle install, migrate db, and start server in development mode
CMD ["sh", "-c", "RAILS_ENV=production bin/rails db:migrate && RAILS_ENV=production bin/rails assets:precompile && RAILS_ENV=production bin/rails server -b 0.0.0.0 -p 5000"]
