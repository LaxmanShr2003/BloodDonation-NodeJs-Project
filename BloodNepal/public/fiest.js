class headerOfWebsite extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-light m-1 p-1 cursor-pointer">
        <a class="navbar-brand fs-4 cursor-pointer" style="color: black;" href="#">Geo-Health Hack</a>
        <button class="navbar-toggler cursor-pointer" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav cursor-pointer" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon cursor-pointer"></span>
        </button>
        <div class="collapse navbar-collapse cursor-pointer d-flex" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item fs-5 p-3 cursor-pointer">About</li>
                <li class="nav-item dropdown fs-5">
                    <a class="nav-link dropdown-toggle p-3 cursor-pointer" style="color: black;" href="#"
                        id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul class="dropdown-menu cursor-pointer" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item cursor-pointer" href="#">Action</a></li>
                        <li><a class="dropdown-item cursor-pointer" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider cursor-pointer">
                        </li>
                        <li><a class="dropdown-item cursor-pointer" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item fs-5 p-3 cursor-pointer">News and Resources</li>
                <li class="nav-item fs-5 p-3" style="cursor: pointer;">Community</li>
            </ul>
            <ul class="navbar-nav" style="margin-left:auto;">
                <li class="nav-item fs-5 p-3 ad-flex justify-content-end"
                    style="align-items:end;justify-content: end ;cursor: pointer;">
                    <i class="bi bi-bell-fill"></i>
                </li>
                <a class="nav-item fs-6 p-3 align-items-end" style="cursor: pointer;margin-right: 0;" href="#"><img
                        src="https://cdn1.iconfinder.com/data/icons/avatar-1-2/512/Add_User1-512.png"
                        class="image1"></a>
            </ul>
        </div>
    </nav>`
    }
}




// <website-header></website-header>


// <!-- script here -->
// <script type="text/javascript" src="fiest.js"></script>customElements.define('website-header', headerOfWebsite);