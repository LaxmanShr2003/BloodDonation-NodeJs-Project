class headerOfWebsite extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <nav class="navbar navbar-expand-lg navbar-dark m-0 p-1 cursor-pointer" style="background-color:#e2725b;color:white" >
                <img src="logoz.png" class="image2" style="margin-right:2%" onclick="func()">
                    <div class="collapse navbar-collapse cursor-pointer d-flex" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item fs-5 p-3 cursor-pointer" style="cursor: pointer;"><a href="about.html">About</a></li>
                            <li class="nav-item dropdown fs-5">
                                <a class="nav-link dropdown-toggle p-3 cursor-pointer" style="color: white;" href="#"
                                    id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu cursor-pointer fs-5 p-3" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item cursor-pointer" href="donate.html">Donate Blood</a></li>
                                    <li><a class="dropdown-item cursor-pointer" href="./request.html">Request for Blood</a></li>
                                    <li>
                                        <hr class="dropdown-divider cursor-pointer">
                                    </li>
                                    <li><a class="dropdown-item cursor-pointer" href="emergency">Emergency Service</a></li>
                                </ul>
                            </li>
                            <li class="nav-item fs-5 p-3 cursor-pointer" style="cursor: pointer;"><a  href="./news.html">News and Resources</a></li>
                            <li class="nav-item fs-5 p-3" style="cursor: pointer;"><a href="gallery.html">Community</a></li>
                        </ul>
                        <ul class="navbar-nav" style="margin-left:auto;">
                            <li class="nav-item fs-5 p-3 ad-flex justify-content-end"
                                style="align-items:end;justify-content: end ;cursor: pointer;color:black">
                                <a href="notification.html"> <i class="bi bi-bell-fill"></i></a>
                            </li>
                            <a class="nav-item fs-6 p-3 align-items-end" style="cursor: pointer;margin-right: 0;" href="login.html"><img src="https://cdn1.iconfinder.com/data/icons/avatar-1-2/512/Add_User1-512.png" class="image1"></a>
                        </ul>
                    </div>
                </nav>`;
  }
}
customElements.define("website-header", headerOfWebsite);
