const FETCH_PROJECTS_DATA = 'Portfolio/Projects/FETCH_PROJECTSS_DATA';
const initialState = { status: 'Not Fetched', data: [] };

export const fetchProjectsData = (data) => ({
  type: FETCH_PROJECTS_DATA,
  data,
});

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_DATA:
      return { data: action.data, status: 'success' };

    default:
      return state;
  }
};

export default projectsReducer;
