function func() {
  window.location.href = "index.html";
}

function populateResourcesSection() {
  const resourceList = document.getElementById("resource-list");
  const resourcesData = [
    {
      title: "Blood Donation Guide",
      description:
        "Learn about the blood donation process, eligibility criteria, and tips for a successful donation.",
    },
    {
      title: "Volunteer Opportunities",
      description:
        "Join us as a volunteer and contribute to our mission of saving lives through blood donation.",
    },
    // Add more here
  ];
  resourcesData.forEach((resourceItem) => {
    const resourceCard = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${resourceItem.title}</h5>
                    <p class="card-text">${resourceItem.description}</p>
                </div>
            </div>
        `;
    resourceList.innerHTML += resourceCard;
  });
}

function populateNewsSection() {
  const newsList = document.getElementById("news-list");
  const newsData = [
    {
      title: "Blood Donation Drive",
      date: "June 1, 2024",
      content:
        "Blood Nepal is organizing a blood donation drive on June 15, 2024, from 9:00 AM to 5:00 PM. Your participation can save lives!",
    },
    {
      title: "Blood Donation Camp in Kathmandu",
      date: "May 20, 2024",
      content:
        "Join us at the Blood Donation Camp in Kathmandu on May 25, 2024. Help us make a difference in the community.",
    },
    // we can add the contents here below
  ];
  newsData.forEach((newsItem) => {
    const newsCard = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${newsItem.title}</h5>
                    <p class="card-text">${newsItem.date}</p>
                    <p class="card-text">${newsItem.content}</p>
                </div>
            </div>
        `;
    newsList.innerHTML += newsCard;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  populateResourcesSection();
  populateNewsSection();
});
