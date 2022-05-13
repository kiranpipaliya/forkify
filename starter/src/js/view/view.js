import icons from "../../img/icons.svg";  //parcel 2 

class View {
    _data;

    render(data) {
        this._data = data;
        this._clean();
        const markup = this._generateMarkup();
        this._parentElement.insertAdjacentHTML("beforeend", markup)
    }
    _clean() {
        this._parentElement.innerHTML = "";
    }

    renderSpiner = function () {

        const markup = `
            <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>
            `
        this._clean();
        this._parentElement.insertAdjacentHTML("afterbegin", markup)
    }

    randerError(message = this._errorMessage) {

        const markup = `
        <div class="error">
           <div>
            <svg>
              <use href="${icons}.svg#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
            `
        this._clean();
        this._parentElement.insertAdjacentHTML("afterbegin", markup)
    }

    message(message = this._message) {
        const markup = `
        <div class="message">
           <div>
            <svg>
              <use href="${icons}.svg#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
            `
        this._clean();
        this._parentElement.insertAdjacentHTML("afterbegin", markup)
    }
} export default View;