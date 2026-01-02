import React, { useState } from "react";
import { connect } from "react-redux";
import {
  nextPage,
  backPage,
  saveProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocial
} from "../actions";
import "./../styles/App.css";

const App = (props) => {
  const {
    page,
    education,
    skills,
    projects,
    social,
    profile,
    nextPage,
    backPage,
    saveProfile,
    addEducation,
    deleteEducation,
    addSkill,
    deleteSkill,
    addProject,
    deleteProject,
    addSocial
  } = props;

  const [localProfile, setLocalProfile] = useState({});
  const [localEducation, setLocalEducation] = useState({});
  const [skill, setSkill] = useState("");
  const [project, setProject] = useState({
    projectName: "",
    techStack: "",
    description: ""
  });
  const [localSocial, setLocalSocial] = useState("");

  return (
    <div>
      <h1>RESUME GENERATOR</h1>

      {/* PAGE 0 – PROFILE */}
      {page === 0 && (
        <div>
          <h2>Add your profile details</h2>

          <input name="fname" value={localProfile.fname || ""} onChange={e => setLocalProfile({ ...localProfile, fname: e.target.value })} />
          <input name="lname" value={localProfile.lname || ""} onChange={e => setLocalProfile({ ...localProfile, lname: e.target.value })} />
          <input name="phone" value={localProfile.phone || ""} onChange={e => setLocalProfile({ ...localProfile, phone: e.target.value })} />
          <input name="address" value={localProfile.address || ""} onChange={e => setLocalProfile({ ...localProfile, address: e.target.value })} />
          <input name="url" value={localProfile.url || ""} onChange={e => setLocalProfile({ ...localProfile, url: e.target.value })} />

          <button id="save_continue" onClick={() => {
            saveProfile(localProfile);
            nextPage();
          }}>
            Save & Continue
          </button>
        </div>
      )}

      {/* PAGE 1 – EDUCATION */}
      {page === 1 && (
        <div>
          <h2>Add your Education Details</h2>

          <input name="courseName" value={localEducation.courseName || ""} onChange={e => setLocalEducation({ ...localEducation, courseName: e.target.value })} />
          <input name="completionYear" value={localEducation.completionYear || ""} onChange={e => setLocalEducation({ ...localEducation, completionYear: e.target.value })} />
          <input name="college" value={localEducation.college || ""} onChange={e => setLocalEducation({ ...localEducation, college: e.target.value })} />
          <input name="percentage" value={localEducation.percentage || ""} onChange={e => setLocalEducation({ ...localEducation, percentage: e.target.value })} />

          <button
            id="add_education"
            onClick={() => {
              addEducation(localEducation);
              setLocalEducation({});
            }}
          >
            Add Education
          </button>

          <div>
            {education.map((edu, index) => (
              <div key={index} className="entry-item">
                <span>{edu.courseName} - {edu.college}</span>
                <button
                  id={`delete_education_${index}`}
                  onClick={() => deleteEducation(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <span id="education_count">{education.length}</span>
        </div>
      )}

      {/* PAGE 2 – SKILLS */}
      {page === 2 && (
        <div id="skills_container">
          <h2>Skills</h2>

          <input
            name="skill"
            value={skill}
            onChange={e => setSkill(e.target.value)}
          />

          <button
            id="add_skill"
            onClick={() => {
              addSkill(skill);
              setSkill("");
            }}
          >
            Add
          </button>

          <div>
            {skills.map((s, index) => (
              <div key={index} className="entry-item">
                {index + 1}. {s}
                <button
                  id={`delete_skill_${index}`}
                  onClick={() => deleteSkill(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <span id="skills_count">{skills.length}</span>
        </div>
      )}

      {/* PAGE 3 – PROJECTS */}
      {page === 3 && (
        <div id="projects_container">
          <h2>Add your Mini Projects</h2>

          <input
            name="projectName"
            value={project.projectName}
            onChange={e => setProject({ ...project, projectName: e.target.value })}
          />
          <input
            name="techStack"
            value={project.techStack}
            onChange={e => setProject({ ...project, techStack: e.target.value })}
          />
          <textarea
            name="description"
            value={project.description}
            onChange={e => setProject({ ...project, description: e.target.value })}
          />

          <button
            id="add_project"
            onClick={() => {
              addProject(project);
              setProject({ projectName: "", techStack: "", description: "" });
            }}
          >
            Add
          </button>

          <div>
            {projects.map((proj, index) => (
              <div key={index} className="entry-item">
                {index + 1}. {proj.projectName}
                <button
                  id={`delete_project_${index}`}
                  onClick={() => deleteProject(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <span id="projects_count">{projects.length}</span>
        </div>
      )}

      {/* PAGE 4 – SOCIAL */}
      {page === 4 && (
        <div id="social_container">
          <h2>Social Media Links</h2>

          <input
            name="Social"
            value={localSocial}
            onChange={e => setLocalSocial(e.target.value)}
          />

          <button
            id="add_social"
            onClick={() => {
              addSocial(localSocial);
              setLocalSocial("");
            }}
          >
            Add
          </button>

          <div>
            {social.map((link, index) => (
              <div key={index}>
                {index + 1}. {link}
              </div>
            ))}
          </div>

          <span id="social_count">{social.length}</span>
        </div>
      )}

      {/* PAGE 5 – FINAL RESUME */}
      {page === 5 && (
        <div className="resume-container">
          <h2>Final Resume</h2>
          <div className="resume">
            <h1>{profile.fname} {profile.lname}</h1>
          </div>
        </div>
      )}

      {/* NAVIGATION */}
      <div className="makeStyles-footer-15">
        {page > 0 && <button id="back" onClick={backPage}>Back</button>}
        {page < 5 && <button id="next" onClick={nextPage}>Next</button>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
  education: state.education,
  skills: state.skills,
  projects: state.projects,
  social: state.social,
  profile: state.profile
});

const mapDispatchToProps = {
  nextPage,
  backPage,
  saveProfile,
  addEducation,
  deleteEducation,
  addSkill,
  deleteSkill,
  addProject,
  deleteProject,
  addSocial
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
