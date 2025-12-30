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
  const { page, state, nextPage, backPage, saveProfile, addEducation, deleteEducation, addSkill, deleteSkill, addProject, deleteProject, addSocial } = props;

  const [profile, setProfile] = useState({});
  const [education, setEducation] = useState({});
  const [skill, setSkill] = useState("");
  const [project, setProject] = useState({ projectName: "", techStack: "", description: "" });
  const [social, setSocial] = useState("");

  return (
    <div>
      <h1>RESUME GENERATOR</h1>

      {page === 0 && (
        <div>
          <h2>Add your profile details</h2>

          <input name="fname" value={profile.fname || ""} onChange={e => setProfile({ ...profile, fname: e.target.value })} />
          <input name="lname" value={profile.lname || ""} onChange={e => setProfile({ ...profile, lname: e.target.value })} />
          <input name="phone" value={profile.phone || ""} onChange={e => setProfile({ ...profile, phone: e.target.value })} />
          <input name="address" value={profile.address || ""} onChange={e => setProfile({ ...profile, address: e.target.value })} />
          <input name="url" value={profile.url || ""} onChange={e => setProfile({ ...profile, url: e.target.value })} />

          <button id="save_continue" onClick={() => {
            saveProfile(profile);
            nextPage();
          }}>Save & Continue</button>
        </div>
      )}

      {page === 1 && (
        <div>
          <h2>Add your Education Details</h2>

          <input name="courseName" value={education.courseName || ""} onChange={e => setEducation({ ...education, courseName: e.target.value })} />
          <input name="completionYear" value={education.completionYear || ""} onChange={e => setEducation({ ...education, completionYear: e.target.value })} />
          <input name="college" value={education.college || ""} onChange={e => setEducation({ ...education, college: e.target.value })} />
          <input name="percentage" value={education.percentage || ""} onChange={e => setEducation({ ...education, percentage: e.target.value })} />

          <button id="add_education" onClick={() => {
            addEducation(education);
            setEducation({});
          }}>Add Education</button>

          <div>
            {state.education.map((edu, index) => (
              <div key={index} className="entry-item">
                <span>{edu.courseName} - {edu.college}</span>
                <button id={`delete_education_${index}`} onClick={() => deleteEducation(index)}>Delete</button>
              </div>
            ))}
          </div>

          <span id="education_count">{state.education.length}</span>
        </div>
      )}

      {page === 2 && (
        <div>
          <h2>Skills</h2>

          <input name="skill" value={skill} onChange={e => setSkill(e.target.value)} />

          <button id="add_skill" onClick={() => {
            addSkill(skill);
            setSkill("");
          }}>Add Skill</button>

          <div>
            {state.skills.map((s, index) => (
              <div key={index} className="entry-item">
                <span>{s}</span>
                <button id={`delete_skill_${index}`} onClick={() => deleteSkill(index)}>Delete</button>
              </div>
            ))}
          </div>

          <span id="skills_count">{state.skills.length}</span>
        </div>
      )}

      {page === 3 && (
        <div>
          <h2>Add your Mini Projects</h2>

          <input name="projectName" value={project.projectName} onChange={e => setProject({ ...project, projectName: e.target.value })} />
          <input name="techStack" value={project.techStack} onChange={e => setProject({ ...project, techStack: e.target.value })} />
          <textarea name="description" value={project.description} onChange={e => setProject({ ...project, description: e.target.value })} />

          <button id="add_project" onClick={() => {
            addProject(project);
            setProject({ projectName: "", techStack: "", description: "" });
          }}>Add Project</button>

          <div>
            {state.projects.map((proj, index) => (
              <div key={index} className="entry-item">
                <span>{proj.projectName} - {proj.techStack}</span>
                <button id={`delete_project_${index}`} onClick={() => deleteProject(index)}>Delete</button>
              </div>
            ))}
          </div>

          <span id="projects_count">{state.projects.length}</span>
        </div>
      )}

      {page === 4 && (
        <div>
          <h2>Social Media Links</h2>

          <input name="Social" value={social} onChange={e => setSocial(e.target.value)} />

          <button id="add_social" onClick={() => {
            addSocial(social);
            setSocial("");
          }}>Add Link</button>

          <span id="social_count">{state.social.length}</span>
        </div>
      )}

      {page === 5 && (
        <div className="resume-container">
          <h2>Final Resume</h2>
          <div className="resume">
            <header className="resume-header">
              <h1>{state.profile.fname} {state.profile.lname}</h1>
              <div className="contact-info">
                {state.profile.phone && <p>Phone: {state.profile.phone}</p>}
                {state.profile.address && <p>Address: {state.profile.address}</p>}
                {state.profile.url && <p>Website: {state.profile.url}</p>}
              </div>
            </header>

            {state.education.length > 0 && (
              <section className="resume-section">
                <h3>Education</h3>
                {state.education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <h4>{edu.courseName}</h4>
                    {edu.college && <p>{edu.college}</p>}
                    {edu.completionYear && <p>Year: {edu.completionYear}</p>}
                    {edu.percentage && <p>Percentage: {edu.percentage}%</p>}
                  </div>
                ))}
              </section>
            )}

            {state.skills.length > 0 && (
              <section className="resume-section">
                <h3>Skills</h3>
                <ul className="skills-list">
                  {state.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </section>
            )}

            {state.projects.length > 0 && (
              <section className="resume-section">
                <h3>Projects</h3>
                {state.projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <h4>{project.projectName}</h4>
                    {project.techStack && <p><strong>Tech Stack:</strong> {project.techStack}</p>}
                    {project.description && <p>{project.description}</p>}
                  </div>
                ))}
              </section>
            )}

            {state.social.length > 0 && (
              <section className="resume-section">
                <h3>Social Media Links</h3>
                <ul className="social-list">
                  {state.social.map((link, index) => (
                    <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      )}

      <div className="makeStyles-footer-15">
        {page > 0 && <button id="back" className="MuiButton-contained" onClick={() => backPage()}>Back</button>}
        {page < 5 && <button id="next" className="MuiButton-contained" onClick={() => nextPage()}>Next</button>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
  state: state
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
