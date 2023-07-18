const frm = document.querySelector("#reg-form");
frm.addEventListener('submit', function (e) {
    e.preventDefault();
    cardMake();
});
const allcrd = document.querySelector(".all-cards");

const cardMake = () => {
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const website = document.getElementById("website-input").value;
    // const image = document.getElementById("image-input").value;
    const gender = document.querySelector("#gender").value;
    const skills = selectedSkills();
    const card = document.createElement("div");
    // console.log(image);
    // console.log(name, email, website, image, gender, skills);

    if (gender === "Male") {
        card.innerHTML = ` <div class="entry">
      <div class="imge">
          <div class="Usericon">
              <svg xmlns="http://www.w3.org/2000/svg" id="user" height="35px" viewBox="0 0 24 24">
                  <path fill="#FF5858"
                      d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z">
                  </path>
              </svg>
          </div>
          <div class="UserName"></div>
      </div>

      <div class="Description">
          <div class="f2">

              <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24">
                  <path fill="#FF5858"
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z">
                  </path>
              </svg>

              <div style="margin-left:10px;">${name}</div>

          </div>
          <div class="f2">
              <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 512 512">
                  <path fill="#FF5858"
                      d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>

              <div style="margin-left:10px;">${email}</div>
          </div>
          <div class="f2">
              <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24">
                  <path fill="#FF5858"
                      d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.6418 20 15.1681 19.5054 16.4381 18.6571L17.5476 20.3214C15.9602 21.3818 14.0523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6038 15.4659C14.6942 16.4115 13.4158 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1258 7 14.1647 7.37209 15.0005 8H17V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z">
                  </path>
              </svg>
              <div style="margin-left:10px;">${website}</div>
          </div>
          <div class="f2">
              <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24">
                  <path fill="#FF5858"
                      d="M15.0491 8.53666L18.5858 5H14V3H22V11H20V6.41421L16.4633 9.95088C17.4274 11.2127 18 12.7895 18 14.5C18 18.6421 14.6421 22 10.5 22C6.35786 22 3 18.6421 3 14.5C3 10.3579 6.35786 7 10.5 7C12.2105 7 13.7873 7.57264 15.0491 8.53666ZM10.5 20C13.5376 20 16 17.5376 16 14.5C16 11.4624 13.5376 9 10.5 9C7.46243 9 5 11.4624 5 14.5C5 17.5376 7.46243 20 10.5 20Z">
                  </path>
              </svg>
              <div style="margin-left:10px;">${gender}</div>
          </div>
          <div class="f2">
              <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24">
                  <path fill="#FF5858"
                      d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z">
                  </path>
              </svg>
              <div  style="margin-left:10px;">${skills.join(', ')}</div>
          </div>
      </div>
  </div>
  </div>
  </div>`;
    }
    if (gender === "Female") {
        card.innerHTML = ` <div class="entry">
        <div class="imge">
            <div class="Usericon">
                <svg xmlns="http://www.w3.org/2000/svg" id="user" height="35px" viewBox="0 0 24 24">
                    <path fill="#FF5858"
                        d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z">
                    </path>
                </svg>
            </div>
            <div class="UserName"></div>
        </div>

        <div class="Description">
            <div class="f2">

                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24">
                    <path fill="#FF5858"
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z">
                    </path>
                </svg>

                <div style="margin-left:10px;">${name}</div>

            </div>
            <div class="f2">
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 512 512">
                    <path fill="#FF5858"
                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>

                <div style="margin-left:10px;">${email}</div>
            </div>
            <div class="f2">
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24">
                    <path fill="#FF5858"
                        d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.6418 20 15.1681 19.5054 16.4381 18.6571L17.5476 20.3214C15.9602 21.3818 14.0523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6038 15.4659C14.6942 16.4115 13.4158 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1258 7 14.1647 7.37209 15.0005 8H17V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z">
                    </path>
                </svg>
                <div style="margin-left:10px;">${website}</div>
            </div>
            <div class="f2">
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24">
                    <path fill="#FF5858"
                        d="M11 15.9339C7.33064 15.445 4.5 12.3031 4.5 8.5C4.5 4.35786 7.85786 1 12 1C16.1421 1 19.5 4.35786 19.5 8.5C19.5 12.3031 16.6694 15.445 13 15.9339V18H18V20H13V24H11V20H6V18H11V15.9339ZM12 14C15.0376 14 17.5 11.5376 17.5 8.5C17.5 5.46243 15.0376 3 12 3C8.96243 3 6.5 5.46243 6.5 8.5C6.5 11.5376 8.96243 14 12 14Z">
                    </path>
                </svg>
                <div style="margin-left:10px;">${gender}</div>
            </div>
            <div class="f2">
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24">
                    <path fill="#FF5858"
                        d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z">
                    </path>
                </svg>
                <div style="margin-left:10px;">${skills.join(', ')}</div>
            </div>
        </div>
    </div>`;
    }
    allcrd.appendChild(card);

}
const selectedSkills = () => {
    const allSkills = document.getElementsByName("skills");
    gotSkills = [];
    allSkills.forEach(x => {
        if (x.checked == true) {
            gotSkills.push(x.value);
        }
    })
    // console.log(gotSkills);
    return gotSkills;
}






