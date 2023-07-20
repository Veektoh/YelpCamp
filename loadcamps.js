const campsArray = [
    {
      "id": 1,
      "campName": "Mount Ulap",
      "pricePerNight": 175,
      "description": "Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near tuba, benguet, Philippines that offers the chance to see a wildlife and is rated as moderate. The trait is primary used for hiking.",
      "imgUrl": "images/Camp Images/High Quality Images/Onay Beach.jpg",
      "postedBy": "Andrew Mike",
      "comments": [
        {
          "commenter": "Adam Jones",
          "commentTime": "13h ago",
          "comment": "Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!"
        }
      ]
    },
    {
      "id": 2,
      "campName": "Forest Retreat",
      "pricePerNight": 120,
      "description": "Escape to the tranquility of the forest retreat. Enjoy nature at its best with beautiful hiking trails and cozy cabins.",
      "imgUrl": "images/Camp Images/High Quality Images/Buloy Springs.jpg",
      "postedBy": "Emily Smith",
      "comments": [
        {
          "commenter": "John Doe",
          "commentTime": "2d ago",
          "comment": "Great place to relax and unwind. The cabins were comfortable, and the surroundings were breathtaking."
        },
        {
          "commenter": "Sophia Lee",
          "commentTime": "1d ago",
          "comment": "Loved the hiking trails! The views from the top were stunning."
        },
        {
          "commenter": "Lucas Johnson",
          "commentTime": "12h ago",
          "comment": "The cabins were clean and comfortable. Can't wait to visit again!"
        }
      ]
    },
    {
      "id": 3,
      "campName": "Lakeview Campground",
      "pricePerNight": 90,
      "description": "Experience the serenity of the lakeview campground. Perfect for fishing, kayaking, and stargazing.",
      "imgUrl": "images/Camp Images/High Quality Images/Calagus Islands.jpg",
      "postedBy": "Michael Johnson",
      "comments": [
        {
          "commenter": "Olivia White",
          "commentTime": "4d ago",
          "comment": "The fishing experience was excellent! Caught some big ones during my stay."
        },
        {
          "commenter": "James Brown",
          "commentTime": "3d ago",
          "comment": "Stunning night sky! The stars were so clear and beautiful."
        },
        {
          "commenter": "Emily Wilson",
          "commentTime": "1d ago",
          "comment": "Loved the peaceful ambiance by the lake! Perfect for a relaxing weekend."
        },
        {
          "commenter": "Ethan Brown",
          "commentTime": "2d ago",
          "comment": "The stargazing experience was incredible! Saw some shooting stars too."
        }
      ]
    },
    {
      "id": 4,
      "campName": "Coastal Adventure",
      "pricePerNight": 200,
      "description": "Embrace the coastal adventure with water sports and beachfront camping. Experience the thrill of surfing and snorkeling.",
      "imgUrl": "images/Camp Images/High Quality Images/Latik Riverside.jpg",
      "postedBy": "Sophie Anderson",
      "comments": [
        {
          "commenter": "Liam Wilson",
          "commentTime": "5d ago",
          "comment": "The surfing lessons were fantastic! It was my first time surfing, and I had a blast."
        },
        {
          "commenter": "Emma Davis",
          "commentTime": "6d ago",
          "comment": "Snorkeling was so much fun! Got to see some colorful fish and coral reefs."
        }
      ]
    },
    {
      "id": 5,
      "campName": "Mountain Top Retreat",
      "pricePerNight": 150,
      "description": "Find peace and tranquility at the mountain top retreat. Unwind amidst the stunning landscapes and enjoy the fresh air.",
      "imgUrl": "images/Camp Images/High Quality Images/Mount Ulap.png",
      "postedBy": "William Wilson",
      "comments": [
        {
          "commenter": "Ava Moore",
          "commentTime": "7d ago",
          "comment": "The hike to the top was challenging but totally worth it! The sunrise view was breathtaking."
        },
        {
          "commenter": "Noah Clark",
          "commentTime": "8d ago",
          "comment": "The cabins were cozy, and the staff was friendly. A perfect getaway!"
        }
      ]
    },
    {
      "id": 6,
      "campName": "River Adventure Camp",
      "pricePerNight": 80,
      "description": "Experience the thrill of a river adventure camp. Enjoy rafting, fishing, and campfire nights.",
      "imgUrl": "images/Camp Images/High Quality Images/Seven Sisters Waterfall.jpg",
      "postedBy": "Ella Taylor",
      "comments": [
        {
          "commenter": "Oliver Martin",
          "commentTime": "9d ago",
          "comment": "Rafting was an unforgettable experience! The river was wild, and we had so much fun."
        },
        {
          "commenter": "Mia Lewis",
          "commentTime": "10d ago",
          "comment": "Fishing by the river was relaxing. Caught some fish for dinner!"
        },
        {
          "commenter": "Ethan Smith",
          "commentTime": "8d ago",
          "comment": "The campfire nights were delightful! Toasted marshmallows and great company."
        },
        {
          "commenter": "Sophie Johnson",
          "commentTime": "7d ago",
          "comment": "The rafting guides were fantastic! They made the experience safe and enjoyable."
        }
      ]
    }
  ];
  
  function loadCamps() {
    const campgroundCardWrapper = document.querySelector('#campground-card-wrapper-div');
    campsArray.forEach(camp => {
        const campgroundCard = document.createElement('div');
        campgroundCard.classList.add('campground-card-div');
        campgroundCard.innerHTML +=
        `  <div class="campground-card-img-div">
                <img src="${camp.imgUrl}" alt="${camp.campName}">
            </div>
            <div class="campground-card-details-div">
                <h3>${camp.campName}</h3>
                <p>${camp.description}</p>
            </div>
            <button class="secondary-btn">View Campground</button>
        `;
        campgroundCardWrapper.appendChild(campgroundCard);
    });
  }
  
  function loadCampPage(camp) {
    localStorage.setItem('selectedCamp', JSON.stringify(camp));
    window.location.href = 'camp.html';
  }
  // Event delegation for "View Campground" buttons
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('secondary-btn')) {
        const parentCard = target.closest('.campground-card-div');
        const campName = parentCard.querySelector('h3').innerText;
        const selectedCamp = campsArray.find(camp => camp.campName === campName);
        if (selectedCamp) {
            loadCampPage(selectedCamp);
        }
    }
  });
  loadCamps();