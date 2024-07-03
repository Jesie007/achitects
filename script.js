"use strict";

// Sticky navigation
const header = document.querySelector(".header");
const navigation = document.querySelector(".navigation");
const navHeight = navigation.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navigation.classList.add("sticky");
  else navigation.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Handle form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const comment = document.getElementById("comment").value;

  if (!name || email || subject || comment) {
    alert("Please fill in all fields");
    return;
  }

  const formData = {
    name: name,
    email: email,
    subject: subject,
    comment: comment,
  };
  fetch("'file.php'", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset(); // Resets the form
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    });
});
