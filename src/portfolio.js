const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'James Nyaundi',
  role: 'DevOps Engineer and Frontend Engineer',
  description:
    '“DevOps is not a goal, but a never-ending process of continual improvement” (Jez Humble)',
  resume: 'https://docs.google.com/document/d/1KG9M5GMmG_xxcx5pXJhWM7upBkJlNuwX/edit?pli=1',
  social: {
    linkedin: 'https://www.linkedin.com/in/james-nyaundi-2229611b3/',
    github: 'https://github.com/Nyaundi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'Languages: Proficient -> Javascript, Bash and C: Familiar with -> Python',
  'Cloud: AWS, Azure, Upcloud and Google',
  'Infrastructure as Code: Terraform, CloudFormation',
  'Containerization: Docker',
  'Orchestration: Kubernetes',
  'Operating Systems: Linux: CentOs, Ubuntu, Fedora, Kali Linux, Windows Servers, windows and Macos',
  'Monitoring: Prometheus, Grafana',
  'Automation: Jenkins, Ansible, Docker, Git, Terraform, Jira',
  'Web Technologies: HTML5, CSS3, SCSS, SASS',
  'Other: Problem solving, Data structures and algorithms'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jamesnyambati260@gmail.com',
}

export { header, about, projects, skills, contact }
