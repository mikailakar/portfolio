import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  imageUrl: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  skills: Skill[] = [
    { name: '.NET', imageUrl: 'assets/images/skills/dotnet.svg' },
    { name: 'Angular', imageUrl: 'assets/images/skills/angular.svg' },
    { name: 'Unity', imageUrl: 'assets/images/skills/unity.svg' },
    { name: 'C#', imageUrl: 'assets/images/skills/csharp.svg' },
    { name: 'MSSQL', imageUrl: 'assets/images/skills/mssql.svg' },
    { name: 'Python', imageUrl: 'assets/images/skills/python.svg' },
    { name: 'Docker', imageUrl: 'assets/images/skills/docker.svg' },
    { name: 'Kubernetes', imageUrl: 'assets/images/skills/kubernetes.svg' },
    { name: 'Redis', imageUrl: 'assets/images/skills/redis.svg' },
    { name: 'MongoDB', imageUrl: 'assets/images/skills/mongodb.svg' },
    { name: 'Node.js', imageUrl: 'assets/images/skills/nodejs.svg' },
    { name: 'TypeScript', imageUrl: 'assets/images/skills/typescript.svg' },
    { name: 'HTML5', imageUrl: 'assets/images/skills/html5.svg' },
    { name: 'CSS3', imageUrl: 'assets/images/skills/css3.svg' },
    { name: 'Bootstrap', imageUrl: 'assets/images/skills/bootstrap.svg' },
    { name: 'Git', imageUrl: 'assets/images/skills/git.svg' },
    { name: 'Postman', imageUrl: 'assets/images/skills/postman.svg' },
    { name: 'Matlab', imageUrl: 'assets/images/skills/matlab.svg' },
    { name: 'Photoshop', imageUrl: 'assets/images/skills/photoshop.svg' },
    { name: 'Blender', imageUrl: 'assets/images/skills/blender.svg' },
  ];

  projects: Project[] = [
    {
      title: '.NET 8 Web API',
      description: 'Back-End API built with ASP.NET Core for managing users and roles, featuring user authentication, role-based access control, JWT token generation, and CRUD operations for user data. The project is structured with interfaces and their respective implementations, making it easy to extend and maintain.',
      url: 'https://github.com/mikailakar/Backend-Project',
      imageUrl: ''
    },
    {
      title: 'Angular Dictionary Application',
      description: 'A dictionary application built using Angular that queries an external dictionary API to fetch word definitions, synonyms, and pronunciations. Users can also save words to their favorites.',
      url: 'https://github.com/mikailakar/Frontend-Project',
      imageUrl: 'assets/images/projects/angular_dictionary.png'
    },
    {
      title: 'Circuity',
      description: 'A PC game developed in Unity that allows players to build electronic circuits in a 3D environment.',
      url: 'https://mickakr.itch.io/circuity',
      imageUrl: 'assets/images/projects/circuity.png'
    },
    {
      title: 'Trickshot (Alpha)',
      description: 'A mobile arcade game where the objective is to get a ball into a cup, navigating through various obstacles.',
      url: 'https://play.google.com/store/apps/details?id=com.Micka.Trickshot',
      imageUrl: 'assets/images/projects/trickshot.png'
    },
    {
      title: 'Angular API Frontend',
      description: 'An Angular frontend for the Backend Project. The frontend connects with the ASP.NET Core backend to provide a full-stack application that handles user management, authentication, and JWT token decoding.',
      url: 'https://github.com/mikailakar/Fullstack-Project',
      imageUrl: 'assets/images/projects/angular_api_frontend.png'
    },
    {
      title: 'Angular CI/CD',
      description: 'Continuous Integration and Continuous Deployment (CI/CD) for an Angular application. It includes GitHub Actions for automated testing and deployment to Vercel.',
      url: 'https://github.com/mikailakar/ci-cd-angular',
      imageUrl: ''
    },
    {
      title: 'Kubernetes Load Balancer',
      description: 'Microservice application built with Spring Boot. It provides an endpoint to check the status of the service and is deployed in a Kubernetes cluster. This service interacts with other microservices and is designed to be simple and efficient.',
      url: 'https://github.com/mikailakar/LoadBalancer',
      imageUrl: ''
    },
    {
      title: '.NET 8 Micro Services',
      description: 'Microservices-based architecture implemented using .NET 8 and Entity Framework Core. The solution consists of three micro-services: UserService, ProductService, and OrderService. MainService handle interactions between these services using Ocelot API Gateway where each is responsible for its own domain.',
      url: 'https://github.com/mikailakar/MicroServices',
      imageUrl: ''
    },
    {
      title: '.NET 8 Two-Phase Commit',
      description: 'This project demonstrates the implementation of the Two-Phase Commit (2PC) protocol in .NET 8. The Two-Phase Commit protocol is a distributed algorithm used to ensure that all participants in a distributed transaction either commit or roll back their changes, maintaining the atomicity of the transaction.',
      url: 'https://github.com/mikailakar/TwoPhaseCommit',
      imageUrl: ''
    },
  ];
}