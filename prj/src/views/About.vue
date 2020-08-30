<template>
  <div class="about">
    <section id="about-part" class="bg-light sort-center pt-5" data-spy="scroll">
            <div class="h1 bg-dark p-4 text-white w-100 text-center text-shadow-2-gray">
                About
            </div>
            <div class="card ml-auto mr-auto mt-4 p-4" style="width: 18rem; align-items: center;">
                <img
                    src="../../image/profile.jpg"
                    class="card-img-top w-75 m-atuo"
                    alt="Profile photo"
                    style="border-radius: 100%; width: 15rem; height: 11rem;"
                />
                <div class="card-body text-center">
                    <h3 class="card-title">Inbae Kang</h3>
                    <p class="card-text">
                        IoT Developer<br/>
                        (Web + Embedded)
                    </p>
                </div>
            </div>
            <div class="mt-5 text-center">
                안녕하세요. 언제나 달려가는 개발자 강인배입니다.<br/>
                함께 일하고 싶으시다면 언제든 연락주세요.
            </div>
            <ul class="list-group list-group-flush w-50 m-auto">
                <li class="list-group-item bg-light">
                    <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="#006cff" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                      </svg>
                      <span class="ml-3">010-2776-3521</span>
                </li>
                <li class="list-group-item bg-light">
                    <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-mailbox2" fill="#006cff" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm1 1.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1zM4.585 7.157C4.836 7.264 5 7.334 5 7a1 1 0 0 0-2 0c0 .334.164.264.415.157C3.58 7.087 3.782 7 4 7c.218 0 .42.086.585.157z"/>
                      </svg>
                      <span class="ml-3">cleverdevk@gmail.com</span>
                </li>
                <li class="list-group-item bg-light">
                    <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="#006cff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                      </svg>
                      <span class="ml-3">서울특별시 관악구 남부순환로226길 20</span>
                </li>
                <li class="list-group-item bg-light">
                    <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-link-45deg" fill="#006cff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M5.712 6.96l.167-.167a1.99 1.99 0 0 1 .896-.518 1.99 1.99 0 0 1 .518-.896l.167-.167A3.004 3.004 0 0 0 6 5.499c-.22.46-.316.963-.288 1.46z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
                        <path d="M10 9.5a2.99 2.99 0 0 0 .288-1.46l-.167.167a1.99 1.99 0 0 1-.896.518 1.99 1.99 0 0 1-.518.896l-.167.167A3.004 3.004 0 0 0 10 9.501z"/>
                      </svg>
                      <a class="ml-3" href="https://github.com/cleverdevk" style="color: black;">https://github.com/cleverdevk</a>
                </li>
            </ul>
        </section>
  </div>
</template>
