const { series } = require('nps-utils');

module.exports = {
  scripts: {
    default: 'nps serve',
    /**
     * Serves the current app and watches for changes to restart it
     */
    serve: {
      inspector: {
        script: series('nps banner.serve', 'nodemon'),
        description:
          'Serves the current app and watches for changes to restart it, you may attach inspector to it.',
      },
      script: series('nps banner.serve', 'nodemon'),
      description: 'Serves the current app and watches for changes to restart it',
    },
    banner: {
      serve: banner('serve'),
    },
  },
};

function banner(name) {
  return {
    hiddenFromHelp: true,
    silent: true,
    description: `Shows ${name} banners to the console`,
    script: runFast(`./commands/banner.ts ${name}`),
  };
}

function runFast(path) {
  return `ts-node --transpile-only ${path}`;
}
