class footerOfWebsite extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer class="footer">
    <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
    </div>
        



    <footer class=" text-center text-lg-start" style="color:#f5f5dc;background-color:#e2725b">
        <div class="container py-4" style="color:#f5f5dc;background-color:#e0644c">
            <div class="row" style="color:#f5f5dc;background-color:#e0644c" >
                 <!-- About Section -->
                 <div class="col-md-4 mb-4" style="color:#f5f5dc;">
                    <h5 class="text-uppercase fw-bold">About Us:</h5>
                    <p>Established in 2024, Blood Nepal addresses the urgent need for a reliable and equitable blood donation system. Recognizing the increasing demand for blood and the lack of a centralized platform, Blood Nepal connects donors with recipients, organizes donation camps, and raises awareness. Committed to fairness and improving health services, it has significantly impacted Nepal's blood donation landscape.</p>
                </div>
                <!-- Contact Section -->
                <div class="col-md-4 mb-4" style="color:#f5f5dc;">
                    <h5 class="text-uppercase fw-bold">Contact Us:</h5>
                    <p>Address: Baluwatar, Kathmandu</p>
                    <p>Phone No: +977-9812345678</p>
                    <p>Email: info@bloodnepal.com</p>
                </div>
               
                <!-- Services Section -->
                <div class="col-md-4 mb-4" style="color:#f5f5dc;">
                <div class="input-group mb-3">
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
                <div class="input-group">
  <span class="input-group-text" style="background-color:#f5f5dc; color:#e2725b">Message</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
                </div>
                <button class="btn" style="background-color:#f5f5dc; color:#e2725b" type="submit">Submit form</button>
            </div>
            
        </div>


        <!-- Info Section -->
        <div class="py-3" style="color:#f5f5dc;background-color:#e0644c" >
            <div class="container text-center"  style="olor:#f5f5dc;background-color:#e0644c";>
                <p class="mb-1"  style="color:#f5f5dc;background-color:#e0644c";>
                    © 2023 Blood Nepal. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
</footer>`
    }
}
customElements.define('website-footer', footerOfWebsite);
