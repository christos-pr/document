import { make } from './utils/dom';

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 */
export default class Ui {
  /**
   * @param {object} ui - document tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {DocumentConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api, config, onSelectFile, readOnly }) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      documentContainer: make('div', [ this.CSS.documentContainer ]),
      fileButton: this.createFileButton(),
      documentTitle: make('span', this.CSS.documentTitle),
      documentElement: undefined,
      // documentElement: make('div', this.CSS.documentElement),
      documentPreloader: make('div', this.CSS.documentPreloader),
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
      }),
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <document-container>
     *      <document-preloader />
     *    </document-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */
    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.documentContainer.appendChild(this.nodes.documentPreloader);
    this.nodes.wrapper.appendChild(this.nodes.documentContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      wrapper: 'document-tool',
      documentContainer: 'document-tool__document',
      documentPreloader: 'document-tool__document-preloader',
      documentTitle: 'document-tool__document-title',
      documentElement: 'document-tool__document-element',
      caption: 'document-tool__caption',
    };
  };

  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: 'empty',
      UPLOADING: 'loading',
      FILLED: 'filled',
    };
  }

  /**
   * Renders tool UI
   *
   * @param {DocumentToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(toolData) {
    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const button = make('div', [ this.CSS.button ]);

    button.innerHTML = this.config.buttonContent || `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#5c6b7a" viewBox="0 0 256 256"><path d="M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H120a8,8,0,0,0,0,16h24V88a8,8,0,0,0,8,8h48v40a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z"></path></svg> ${this.api.i18n.t('Click to select a document file...')}`;

    button.addEventListener('click', () => {
      this.onSelectFile();
    });

    return button;
  }

  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(src) {
    this.nodes.documentPreloader.style.backgroundImage = `url(${src})`;

    this.toggleStatus(Ui.status.UPLOADING);
  }

  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.documentPreloader.style.backgroundImage = '';
    this.toggleStatus(Ui.status.EMPTY);
  }

  /**
   * Shows document
   *
   * @param {object} file - document source
   * @returns {void}
   */
  fillDocument(file) {
    const attributes = {
      src: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%235c6b7a%22%20viewBox%3D%220%200%20256%20256%22%3E%3Cpath%20d%3D%22M80%2C224a8%2C8%2C0%2C0%2C1-8%2C8H56a16%2C16%2C0%2C0%2C1-16-16V184a8%2C8%2C0%2C0%2C1%2C16%2C0v32H72A8%2C8%2C0%2C0%2C1%2C80%2C224ZM213.66%2C82.34l-56-56A8%2C8%2C0%2C0%2C0%2C152%2C24H120a8%2C8%2C0%2C0%2C0%2C0%2C16h24V88a8%2C8%2C0%2C0%2C0%2C8%2C8h48v40a8%2C8%2C0%2C0%2C0%2C16%2C0V88A8%2C8%2C0%2C0%2C0%2C213.66%2C82.34ZM80%2C24H56A16%2C16%2C0%2C0%2C0%2C40%2C40V64a8%2C8%2C0%2C0%2C0%2C16%2C0V40H80a8%2C8%2C0%2C0%2C0%2C0-16ZM208%2C168a8%2C8%2C0%2C0%2C0-8%2C8v40h-8a8%2C8%2C0%2C0%2C0%2C0%2C16h8a16%2C16%2C0%2C0%2C0%2C16-16V176A8%2C8%2C0%2C0%2C0%2C208%2C168ZM48%2C152a8%2C8%2C0%2C0%2C0%2C8-8V104a8%2C8%2C0%2C0%2C0-16%2C0v40A8%2C8%2C0%2C0%2C0%2C48%2C152Zm104%2C64H112a8%2C8%2C0%2C0%2C0%2C0%2C16h40a8%2C8%2C0%2C0%2C0%2C0-16Z%22%2F%3E%3C%2Fsvg%3E',
    };

    const eventName = 'load';

    /**
     * Compose tag with defined attributes
     *
     * @type {Element}
     */
    this.nodes.documentElement = make('IMG', this.CSS.documentElement, attributes);
    this.nodes.documentTitle.innerHTML = file.title;
    /**
     * Add load event listener
     */
    this.nodes.documentElement.addEventListener(eventName, () => {
      this.toggleStatus(Ui.status.FILLED);

      /**
       * Preloader does not exists on first rendering with presaved data
       */
      if (this.nodes.documentPreloader) {
        this.nodes.documentPreloader.style.backgroundImage = '';
      }
    });
    this.nodes.documentContainer.appendChild(this.nodes.documentElement);
    this.nodes.documentContainer.appendChild(this.nodes.documentTitle);
  }

  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(text) {
    if (this.nodes.caption) {
      this.nodes.caption.innerHTML = text;
    }
  }

  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(status) {
    for (const statusType in Ui.status) {
      if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }
}
