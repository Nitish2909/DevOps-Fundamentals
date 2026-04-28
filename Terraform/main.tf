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





