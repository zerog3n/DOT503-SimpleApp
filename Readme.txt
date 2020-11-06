# DOT503 SimpleApp - Instructions to build and run

# Author: James Haworth

# Prerequisites:
 - Git installed
 - Docker installed


# --- Instructions: Using Docker ---

# Step 1: Clone the respository
git clone https://github.com/zerog3n/DOT503-SimpleApp.git
cd DOT503-SimpleApp

# Step 2: Build the image
docker build --tag simpleapp:1.0 .

# Step 3: Run the image
docker run --publish 9000:9000 --detach --name simpleapp simpleapp:1.0

# --- Optional: Using Docker ---

# Stop the image
docker stop simpleapp

# Remove the image
docker rm --force simpleapp


# --- Instructions: Using Node.js/NPM ---

# Step 1: Clone the respository
git clone https://github.com/zerog3n/DOT503-SimpleApp.git
cd DOT503-SimpleApp

# Step 2: Install dependencies
npm installed

# Step 3: Build the app
npm run build

# Step 4: Run the test suites
npm run test

# Step 5: Start the app
npm run Start


