const initialState = {
  page: 0,
  profile: {},
  education: [],
  skills: [],
  projects: [],
  social: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "NEXT":
      return { ...state, page: state.page + 1 };

    case "BACK":
      return { ...state, page: state.page - 1 };

    case "SAVE_PROFILE":
      return { ...state, profile: action.payload };

    case "ADD_EDU":
      return { ...state, education: [...state.education, action.payload] };

    case "DEL_EDU":
      return {
        ...state,
        education: state.education.filter((_, i) => i !== action.payload)
      };

    case "ADD_SKILL":
      return { ...state, skills: [...state.skills, action.payload] };

    case "DEL_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_, i) => i !== action.payload)
      };

    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };

    case "DEL_PROJECT":
      return {
        ...state,
        projects: state.projects.filter((_, i) => i !== action.payload)
      };

    case "ADD_SOCIAL":
      return { ...state, social: [...state.social, action.payload] };

    default:
      return state;
  }
}
