function _createModal(optiopns) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span>modal-title</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>
                    Lorem ipsum dolor sit.
                </p>
                <p>
                    Lorem ipsum dolor sit.
                </p>

            </div>
            <div class="modal-xfooter">
                <button>ok</button>
                <button>cancel</button>

            </div>

        </div>
    </div>`);
    return modal
}

$.modal = function (optiopns) {
    const $modal = _createModal(options);
    return {
        open() { },
        close() { },
        destroy() { }
    }
}