# What is DevOps :
DevOps is the combination of two words that is Development(writing code) and Operations(deploying and maintaining system).
<br>
DevOps is a set of practices, tools, and culture that enables faster and more reliable software delivery by improving collaboration between development and operations teams.
<br>
In simple word we can say that DevOps is a culture and practices that bridges the gap between software development and IT operations.
<br>
The main goal of DevOps is fast delivery of software with high quality.

# Why devops is Needed:
Before DevOps, companies followed a separate team model:
<br>
Developers -> Write code
Operations -> Deploy & maintain
<br>
The issues in this model is:
<br>
1. Lack of communication
<br>
2.Slow software delivery
<br>
3. High failure rate 
<br>
4. Manual work
<br>
5. Difficult scaling
<br>
So, DevOps is Needed to solve the above problem
<br>
DevOps introduces automation + collaboration + continuous processes.
<br>
1. Faster Software Delivery
<br>
2. Automation
<br>
3. Continuous Testing
<br>
4. Faster Bug Fixing
<br>
5. Scalability & Flexibility
<br>

<b>Real-World Example to Understand why DevOps is Needed:</b>
<br>

```bash
Without DevOps:

Imagine you build an e-commerce website:

* Deploy manually

* Takes 2 weeks

* If bug -> whole system down

With DevOps:

Push code to GitHub

Automatically:
    * Tested
    * Built
    * Deployed

Time taken: minutes

If bug:

    * Rollback instantly
```

# DevOps Lifecycle :

<img src="https://devopedia.org/images/article/54/7602.1513404277.png">
<br>

<b>1. Plan -></b> The Plan phase is the first stage of the DevOps lifecycle where teams define what to build, why to build it, and how to build it.
<br> 
It mainly focus on Understanding requirements , Setting goals and desing the work flow.
<br>

<b>2.Code -> </b> The Code phase is where developers write, manage, and store the application code using version control systems.
<br>

<b>3. Build -></b> The Build phase Convert source code into executable application.
<br>

<b>4.Test -></b> The Test phase is where the application is automatically and manually tested to find bugs and ensure it works correctly before release.
<br>

<b>5. Release -></b> The Release phase is where the application is prepared and finalized for deployment after successful testing.
<br>

<b>6. Deploy -></b> The Deploy phase is where the application is released to production servers so users can access it.
<br>

<b>7. Operate -> </b> The Operate phase is where the application is actively running and maintained in production.
<br>

<b>8.Monitor -> </b> The Monitor phase involves tracking the application' s performance, health, and issues in real time.This is the last phase in devops lifecycle.


# Infrastructure as Code :
Infrastructure as Code (IaC) is a software engineering practice in which IT infrastructure—such as servers, networks, databases, and configurations—is defined, provisioned, and managed using machine-readable code files, rather than through manual processes or interactive configuration tools.
<br>
These code files are version-controlled, reusable, and automatically executed to create and maintain infrastructure in a consistent, repeatable, and scalable way.
<br>
<b>In Simple Words we can say that Infrastructure as Code is  Managing infrastructure using code just like software development</b>

<b>Another definition</b>
<br>
Infrastructure as Code (IaC) is the management and provisioning of infrastructure (servers, networks, databases) through machine-readable definition files rather than manual configuration. It enables automation, consistency, and speed in software development by treating infrastructure as software, allowing for version control, testing, and CI/CD pipelines.
<br>
In simple way to Understand what acctually IaC are:

```bash
Instead of:

Logging into a cloud console
Clicking buttons to create servers

You:

Write code (scripts/config files)
Run it -> infrastructure is created automatically

```

<b>Features of infrastructure as code :</b>

```bash
1. Automation:

No manual setup -> everything runs automatically

2. Consistency:

Same code = same infrastructure every time (no mistakes)

3. Version Control:

Store infra code in Git -> track changes like software code

4. Reusability

Reuse code to create multiple environments (dev, test, prod)

```

<b>Real-Life Flow </b>

```bash
1. Developer writes IaC code

2. Pushes to GitHub

3. CI/CD pipeline runs

4. Infrastructure is created/updated automatically
```

# Popular Infrastructure as Code (IaC) Tools:

```bash
1. Provisioning:

Terraform (most popular, cloud-agnostic), AWS CloudFormation, Azure ARM Templates, Google Cloud Deployment Manager.
2. Configuration Management: Ansible, Chef, Puppet.

3. Server Templating: Docker, Packer, Vagrant

```

# What is Terraform ? 
Terraform is an open-source infrastructure as code (IaC) tool that is developed by HashiCorp. This tool is used to build, manage and automate infrastructure using code.It replaces manual cloud setup with automated, code-driven provisioning, making deployments faster and more reliable. By defining infrastructure in files, teams can easily version, reuse, and collaborate using tools like Git.
<br>
It supports multi-cloud environments like AWS, Azure, Google Cloud Platform.
<br>

<b>In simple words Terraform is a tool where you write code to create servers, databases, networks, etc. instead of doing it manually.</b>
<br>

<b>Why Terraform is Used :</b>
<br>
Instead of manually setting up resources on platforms like Amazon Web Services or Microsoft Azure, Terraform helps you:

```bash
1. Automation:
No need to click buttons again and again
One command can create full infrastructure

2. Consistency:
Same code -> same infrastructure every time
Avoid human errors

3. Multi-Cloud Support
Works with AWS, Azure, Google Cloud Platform etc.

4. Version Control
Infrastructure code can be stored in Git
Track changes easily

5. Faster Deployment
Spin up servers in minutes

```
<b>Simple Example in which i create a sever on AWS where the server name is MyServer</b>

```bash
terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"   ----> Which cloud Provider you use.
            version = "5.54.1"
        }
    }
}

provider "aws" {
    region = "eu-north-1"
}

resource "aws_instance" "myserver" {
    ami           = "ami-0c94855ba95c71c99"  ----> Which AMI you want to use.
    instance_type = "t2.micro"             ----> Which instance type you want to use.

    tsags = {
        Name = "MyServer"
    }
}

```
# Some important Commands that is used in Terraform

```bash

1. terraform init 

This command does this:--
Initializes your Terraform project
Downloads required plugins/providers (like AWS, Azure)
Prepares your working directory

2. terraform plan 

This command does this:--
Connects to providers (e.g., Amazon Web Services)
Downloads required files into .terraform/ folder

3. terraform apply

This command does this:--
Shows what Terraform will do before actually doing it

4. terraform destroy

This command does this:--
Actually creates/updates infrastructure


simple flow :

terraform init   # Step 1: Setup
terraform plan   # Step 2: Preview
terraform apply  # Step 3: Execute

```

# How Terraform works 

```bash

1. Write Configuration File

You define your infrastructure in a .tf file.

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "my_server" {
  ami           = "ami-123456"
  instance_type = "t2.micro"
}


2. Initialize Project (terraform init)

terraform init

3. Preview Changes (terraform plan)

terraform plan

4. Apply Changes (terraform apply)

terraform apply

5. Update Infrastructure
If you change your .tf file:

terraform plan
terraform apply

6. Destroy Infrastructure (Cleanup)
Deletes all resources created by Terraform

terraform destroy




Simple Flow :

Code -> Plan -> Apply -> Manage -> Update -> Destroy
```








