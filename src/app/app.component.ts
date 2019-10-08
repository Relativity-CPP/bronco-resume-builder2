import { Component } from '@angular/core';

import { Experience } from './experience/experience';
import { Project } from './projects/project';
import { Skill } from './skills/skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  experiences: Experience[] = [];
  projects: Project[] = [];
  skills: Skill[] = [];

  onExperienceAdded(experience: Experience) {
    this.experiences.push(experience);
    alert('There are ' + this.experiences.length + ' jobs');
  }
  onProjectAdded(project: Project) {
    this.projects.push(project);
    alert('There are ' + this.projects.length + ' projects');
  }
  onSkillAdded(skill: Skill) {
    this.skills.push(skill);
    alert('There are ' + this.skills.length + ' skills');
  }
}
