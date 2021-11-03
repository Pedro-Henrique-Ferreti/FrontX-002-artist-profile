import { formatSecondsToMinutes } from './index.js';

export default {
  install(app) {
    app.config.globalProperties.$fn = {
      formatSecondsToMinutes,
    };
  },
};
