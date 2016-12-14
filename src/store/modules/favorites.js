const PREFIX_PROJECT = 'p';
const PREFIX_TASK = 't';

export default {
  actions: {
    ITEM_EDITED: ({ dispatch, getters }, { category, item }) => {
      if (category !== 'favorites') return;
      const newItem = Object.assign({}, item);
      const itemType = newItem.id.charAt(0);
      switch (itemType) {
        case PREFIX_PROJECT:
          newItem.id = newItem.id.substring(1, newItem.id.length);
          dispatch('ITEM_EDITED', { category: 'projects', item: newItem });
          break;
        case PREFIX_TASK:
          newItem.id = newItem.id.substring(1, newItem.id.length);
          dispatch('ITEM_EDITED', { category: 'tasks', item: newItem });
          return;
        default:
          return;
      }
    },
  },

  getters: {
    favorites: (state, getters) => {
      const list = [];
      const projects = getters.projects;
      const tasks = getters.tasks;
      projects.forEach((project) => {
        if (project.favorited) {
          const favoritedProject = Object.assign({}, project);
          favoritedProject.id = `${PREFIX_PROJECT}${favoritedProject.id}`;
          list.push(favoritedProject);
        }
      });
      tasks.forEach((task) => {
        if (task.favorited) {
          const favoritedTask = Object.assign({}, task);
          favoritedTask.id = `${PREFIX_TASK}${favoritedTask.id}`;
          list.push(favoritedTask);
        }
      });
      return list;
    },
  },

  mutations: {
  },

  state: {
  },

};
