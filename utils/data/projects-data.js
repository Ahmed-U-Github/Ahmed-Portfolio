import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'DataLake Gaming - IGT [Agilisium]',
        description: "Managed and automated AWS infrastructure across environments using Terraform. Established CI/CD pipelines in Jenkins, integrating with GitHub and AWS. Created Private Link and Transit Gateway setups for seamless connectivity to Snowflake. Collaborated with development teams on deployment automation and with IGT stakeholders to troubleshoot firewall, DNS, and VPN configurations. Ensured security compliance through access control management and audits. Implemented monitoring systems to proactively address infrastructure issues.",
        tools: ['AWS', 'PrivateLink', 'Jenkins', 'Terraform', 'GitHub', 'Snowflake', 'CDataSync', 'Airflow', 'Azure'],
        role: 'Senior DevOps Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'BioTechnology - Neogene [Agilisium]',
        description: "Managed AWS infrastructure across multiple environments using Terraform, developing infrastructure for four applications with CloudFront and S3 for frontend distribution. Architected backend services using API Gateway, AWS Lambda, and RDS. Integrated AWS WAF for traffic monitoring and protection, implementing strict security group policies. Automated provisioning for consistent deployment, optimized application performance with caching strategies, and collaborated with developers to ensure cloud security and compliance best practices.",
        tools: ['AWS', 'Terraform', 'GitHub', 'AWS WAF', 'AWS Lambda', 'AWS API', 'RDS', 'AWS SSM'],
        role: 'Senior DevOps Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Cost Optimization - Internal [Agilisium]',
        description: "Worked on a cost optimization project managing access levels, user permissions, SCP policies, and CUR breakdowns. Automated the retrieval of missing tags across resources, implemented S3 bucket details fetching, and automated daily cost report generation sent via SES email. Developed Lambda functions in Python for EC2 instance shutdowns on weekends and restarts on weekdays, and similarly automated ECS running task shutdowns and restarts using tagging strategies for efficient resource management.",
        tools: ['AWS', 'User Management', 'IAM', 'Cost Report', 'Python', 'ECS', 'RDS', 'EC2', 'S3', 'LAMBDA'],
        role: 'Senior DevOps Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 4,
        name: 'Data to Insights R&D - [Agilisium]',
        description: "Designed and deployed an AWS ECS cluster to host frontend and backend services for three applications, configuring an Elastic Load Balancer (ELB) for efficient traffic distribution and high availability. Implemented CI/CD pipelines with AWS Code Pipeline to automate builds, tests, and deployments. Set up Apache Airflow for orchestrating workflows and integrated HashiCorp Vault for secure management of application secrets. Collaborated with cross-functional teams to optimize ECS performance, ensuring scalable and cost-effective operations.",
        tools: ['AWS', 'ECS', 'ELB', 'AWS Code Pipeline', 'Airflow', 'HashiCorp Vault', 'Terraform'],
        role: 'Senior DevOps Engineer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'Visual Collaboration - Bluescape [Encore IT Services]',
        description: "Owned multiple AWS accounts and implemented cross-account monitoring. Actively contributed to design discussions and engaged in data formatting and cleansing before importing into RDS. Created AWS Lambda and S3 event triggers, troubleshooting critical production issues. Continuously monitored cluster health and managed incidents using PagerDuty, including event rules and on-call schedules. Extracted data from MySQL, MongoDB, and Redis using scripts and queries, and set up Prometheus and Grafana with Helm for Kubernetes clusters.",
        tools: ['AWS', 'Jenkins', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Argo CD', 'RDS', 'PagerDuty'],
        role: 'Senior DevOps Engineer',
        code: '',
        demo: '',
        image: ayla,
    }
];

// Do not remove any property.
// Leave it blank instead as shown below
// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },

