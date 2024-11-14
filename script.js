const loadImg = document.getElementById("loadImg");
const loadImg2 = document.getElementById("loadImg2");
const key = "hg5H3J3diPRT2pecN3Z0qIfTvu6prtj1c4cASCrVEr81pW4veklDte5r";
const url1 = `https://api.pexels.com/v1/search?query=nature`;
const url2 = `https://api.pexels.com/v1/search?query=boat`;

const remove = function (e) {
  e.target.closest(".col_md_4").remove();
};
const handleClick = function () {
  fetch(url, {
    method: "GET",
    headers: {
      authorization: key
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `non siamo riusciti a completare la richiesta. Dettagli: ${response.statusText}`
        );
      }
    })
    .then((responseObj) => {
      console.log(responseObj);
      const cardContainer = document.getElementById("cardContainer");
      cardContainer.innerHTML = "";
      responseObj.photos.forEach((element) => {
        const imgUrl = element.src.original;
        const imgID = element.id;
        const imgAuthor = element.photographer;
        const imgAuthorLink = element.photographer_url;
        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML = `
              <div class="card mb-4 shadow-sm">
              <a style="text-decoration:none" href="./details.html?src=${imgUrl}&author=${imgAuthor}&link=${imgAuthorLink}">
                        
                        
                <img
                  src=${imgUrl}
                  class="bd-placeholder-img card-img-top w-100 "
                  style="height:10rem"
                />
                </a>
                <div class="card-body">
                <a style="text-decoration:none" href="./details.html?src=${imgUrl}&author=${imgAuthor}&link=${imgAuthorLink}">

                  <h5 class="card-title">Lorem Ipsum</h5>
                  </a>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        id="viewBtn"
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button" id="hideBtn"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${imgID}</small>
                  </div>
                </div>
              </div>
            `;
        cardContainer.appendChild(div);
        const hideBtn = div.querySelector("#hideBtn");
        hideBtn.addEventListener("click", function (e) {
          e.target.closest(".col-md-4").remove();
        });
      });
    });
};

loadImg.onclick = function () {
  url = url1;
  handleClick();
};

loadImg2.onclick = function () {
  url = url2;
  handleClick();
};

const form = document.getElementById("form");
form.onsubmit = function (e) {
  e.preventDefault();
  const searchWord = document.getElementById("searchWord").value;
  url = `https://api.pexels.com/v1/search?query=${searchWord}`;
  handleClick();
};
