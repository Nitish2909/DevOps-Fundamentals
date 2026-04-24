# what is CI CD Pipeline ?
CI/CD stands for Continuous Integration and Continuous Delivery/Deployment, a practice that automates the process of building, testing, and releasing software.
<br>
A CI/CD Pipeline is a set of automated steps that help developers build, test, and deploy applications quickly and reliably.
<br>

<b>CI (Continuous Integration)</b>: Developers frequently merge code into a shared repository, where it is automatically built and tested.

<b>CD (Continuous Delivery/Deployment)</b>: After testing, the application is automatically prepared and deployed to production or staging.
<br>
In Simple words we can say that CI/CD pipeline is an automated process where code is automatically tested and deployed after a developer pushes it, reducing manual work and increasing speed

<img src="https://substackcdn.com/image/fetch/$s_!dgbK!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f968b06-e00e-4e5e-8c8e-17150bea1054_3777x2859.png" alt="">

<b>Need of CI/CD Pipeline :</b>

```bash
Reduces manual work

Detects bugs early

Speeds up software delivery

Ensures consistent deployment

```

<b>Phases of CI/CD Pipeline</b>

```bash

1. Source Stage:
Developers write code and push it to a repository like GitHub.
Trigger starts pipeline automatically.

2. Build Stage:
Code is compiled and dependencies are installed.
Example: npm install, npm run build

3. Test Stage
Automated tests run (unit testing, integration testing).
Ensures code is working correctly.

4. Integration Stage (CI)
Code changes are merged with the main branch.
Conflicts and errors are detected early

5. Deployment Stage (CD)
Application is deployed to server or cloud platform like Render or AWS.
Can be:
Continuous Delivery: Manual approval needed
Continuous Deployment: Fully automatic

```
<b>Popular CI/CD Tools</b>

```bash
GitHub Actions 

Jenkins

GitLab CI/CD

CircleCI

```
<b>Simple Example of GitHub Actions Workflow </b>

```bash
# Workflow name (this will appear in GitHub Actions UI)
name: Node CI/CD

# Trigger: when this workflow should run
on:
  push:
    branches: [ "main" ]   # Runs when code is pushed to main branch

# Jobs define what tasks will run
jobs:
  build:                   # Job name (you can name anything)
    runs-on: ubuntu-latest # Uses a Linux virtual machine to run tasks

    # Steps are executed one by one
    steps:

      # Step 1: Get your code from repository
      - uses: actions/checkout@v3
      # This downloads your GitHub repo code into the runner

      # Step 2: Install project dependencies
      - name: Install Dependencies
        run: npm install
      # Installs all packages from package.json

      # Step 3: Run tests
      - name: Run Tests
        run: npm test
      # Executes test scripts to check code quality

      # Step 4: Build Docker image
      - name: Build Docker Image
        run: docker build -t my-app .
      # Creates a Docker image named "my-app" using Dockerfile

      # Step 5: Deploy step (dummy example)
      - name: Deploy
        run: echo "Deploying to server..."
      # This is just a placeholder (real deployment would use server/cloud)


```