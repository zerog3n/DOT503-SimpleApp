# DOT503 SimpleApp - Instructions to build and run

# Prerequisites:
 - Git installed
 - Docker installed

# Instructions

# Step 1: Clone the respository
git clone https://github.com/zerog3n/DOT503-SimpleApp.git
cd DOT503-SimpleApp

# Step 2: Build the image
docker build --tag simpleapp:1.0 .

# Step 3: Run the image
docker run --publish 9000:9000 --detach --name simpleapp simpleapp:1.0


# Optional

# Stop the image
docker stop simpleapp

# Remove the image
docker rm --force simpleapp

