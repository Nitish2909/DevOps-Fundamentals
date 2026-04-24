# what is CI CD Pipeline ?
CI/CD stands for Continuous Integration and Continuous Delivery/Deployment, a practice that automates the process of building, testing, and releasing software.
<br>
A CI/CD Pipeline is a set of automated steps that help developers build, test, and deploy applications quickly and reliably.
<br>

<b>CI (Continuous Integration)</b>: Developers frequently merge code into a shared repository, where it is automatically built and tested.

<b>CD (Continuous Delivery/Deployment)</b>: After testing, the application is automatically prepared and deployed to production or staging.
<br>
In Simple words we can say that CI/CD Automating the process from writing code -> testing -> deployment

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
