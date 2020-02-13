module.exports = {
  name: 'studio-light',
  displayName: 'Studio Light',
  theme: {
    foreground: {
      default: '#555',
    },
    background: {
      success: '#3d9c62',
      notice: '#bb9700',
      warning: '#d6803e',
      danger: '#da5b56',
      info: '#003052',
      surprise: '#8467c3',
    },
    styles: {
      link: {
        foreground: {
          default: '#68a9a2',
        },
      },
      editor: {
        background: {
          surprise: '{{ background.info }}',
          info: '{{ background.surprise }}',
        },
      },
      sidebar: {
        foreground: {
          default: '#fff',
        },
        background: {
          default: '#003C66',
          success: '#74d49c',
          notice: '#ffdb02',
          warning: '#ffac49',
          danger: '#ff7575',
          surprise: '#bfa3f9',
          info: '#75ddff',
        },
        highlight: {
          default: 'rgba(133, 157, 176)',
          xxs: 'rgba(133, 157, 176, 0.05)',
          xs: 'rgba(133, 157, 176, 0.1)',
          sm: 'rgba(133, 157, 176, 0.2)',
          md: 'rgba(133, 157, 176, 0.3)',
          lg: 'rgba(133, 157, 176, 0.5)',
          xl: 'rgba(133, 157, 176, 0.8)',
        },
      },
      activityBar: {
        foreground: {
          default: '#fff',
        },
        background: {
          default: '#003052',
        },
        highlight: {
          default: 'rgba(23, 130, 207, 1)',
          xxs: 'rgba(23, 130, 207, 0.05)',
          xs: 'rgba(23, 130, 207, 0.1)',
          sm: 'rgba(23, 130, 207, 0.2)',
          md: 'rgba(23, 130, 207, 0.3)',
          lg: 'rgba(23, 130, 207, 0.5)',
          xl: 'rgba(23, 130, 207, 0.8)',
        },
      },
      dialog: {
        background: {
          info: '#005B9E',
        },
      },
      pane: {
        background: {
          surprise: '{{ background.info }}',
          info: '{{ background.surprise }}',
        },
      },
      paneHeader: {
        background: {
          default: '#f0f9ff',
        },
      },
      sidebarHeader: {
        foreground: {
          default: '#fff',
        },
      },
      transparentOverlay: {
        background: {
          default: 'rgba(230,240,250,0.8)',
        },
        foreground: {
          default: '#555',
        },
      },
    },
  },
};