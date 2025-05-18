const guestBtn = document.getElementById('guestBtn');
  const guestDropdown = document.getElementById('guestDropdown');

  guestBtn.addEventListener('click', () => {
    guestDropdown.classList.toggle('d-none');
  });

  function updateGuest(type, change) {
    const countEl = document.getElementById(`${type}Count`);
    let count = parseInt(countEl.textContent);
    count = Math.max(0, count + change);
    countEl.textContent = count;
    updateGuestSummary();
  }

  function updateGuestSummary() {
    const adults = document.getElementById('adultsCount').textContent;
    const children = document.getElementById('childrenCount').textContent;
    const rooms = document.getElementById('roomsCount').textContent;
    document.getElementById('guestSummary').textContent = `${adults} Adult${adults > 1 ? 's' : ''}, ${children} Children, ${rooms} Room${rooms > 1 ? 's' : ''}`;
  }

  // Date range picker using flatpickr
  flatpickr("#bookingDate", {
    mode: "range",
    minDate: "today",
    dateFormat: "d/m/Y",
    defaultDate: [
      new Date(),
      new Date(new Date().setDate(new Date().getDate() + 1)) // tomorrow
    ]
  });
//hotel list

const listItemsPerPage = 20;

// Sample realistic data
const allHotels = [
  "Omega Hotel, Colombo", "Sunrise Hotel, Kandy", "Palm Beach Hotel, Negombo", "Hilltop Inn, Nuwara Eliya",
  "City Plaza, Jaffna", "Lakeside Resort, Anuradhapura", "Sea Breeze Hotel, Galle", "Coral Bay, Trincomalee",
  "Skyline Hotel, Colombo", "Golden Sands, Bentota", "Green Leaf, Ella", "Blue Lagoon, Kalutara",
  "Royal Palace, Colombo", "Peace Inn, Matara", "Mountain View, Haputale", "Harbor View, Hambantota",
  "Sunset Retreat, Arugam Bay", "Central Grand, Colombo", "Forest Edge, Badulla", "White Rose, Polonnaruwa",
  "Omega Hotel, Colombo", "Sunrise Hotel, Kandy", "Palm Beach Hotel, Negombo", "Hilltop Inn, Nuwara Eliya",
  "City Plaza, Jaffna", "Lakeside Resort, Anuradhapura", "Sea Breeze Hotel, Galle", "Coral Bay, Trincomalee",
  "Skyline Hotel, Colombo", "Golden Sands, Bentota", "Green Leaf, Ella", "Blue Lagoon, Kalutara",
  "Royal Palace, Colombo", "Peace Inn, Matara", "Mountain View, Haputale", "Harbor View, Hambantota",
  "Sunset Retreat, Arugam Bay", "Central Grand, Colombo", "Forest Edge, Badulla", "White Rose, Polonnaruwa"
];

const allVillas = [
  "Hilltop Villa, Kandy", "Ocean View Villa, Galle", "Coconut Grove, Tangalle", "Mountain Breeze Villa, Nuwara Eliya",
  "Blue Horizon, Trincomalee", "Lotus Villa, Hikkaduwa", "Golden Palm, Matara", "Riverside Villa, Ratnapura",
  "Serenity Villa, Ella", "Tropical Haven, Kalutara", "Sunset Villa, Arugam Bay", "Hidden Nest, Bandarawela",
  "Coral Cove, Jaffna", "Bay Breeze, Batticaloa", "Jungle Retreat, Sinharaja", "Hill Crest, Haputale",
  "Whispering Pines, Knuckles", "Sapphire Villa, Anuradhapura", "Lagoon Edge, Negombo", "Palm Shade, Kurunegala",
  "Hilltop Villa, Kandy", "Ocean View Villa, Galle", "Coconut Grove, Tangalle", "Mountain Breeze Villa, Nuwara Eliya",
  "Blue Horizon, Trincomalee", "Lotus Villa, Hikkaduwa", "Golden Palm, Matara", "Riverside Villa, Ratnapura",
  "Serenity Villa, Ella", "Tropical Haven, Kalutara", "Sunset Villa, Arugam Bay", "Hidden Nest, Bandarawela",
  "Coral Cove, Jaffna", "Bay Breeze, Batticaloa", "Jungle Retreat, Sinharaja", "Hill Crest, Haputale",
  "Whispering Pines, Knuckles", "Sapphire Villa, Anuradhapura", "Lagoon Edge, Negombo", "Palm Shade, Kurunegala"
];

const allRestaurants = [
  "Omega Restaurant, Colombo", "Spice Garden, Kandy", "Taste of Lanka, Jaffna", "Golden Fork, Nuwara Eliya",
  "Savor Street, Negombo", "Ocean Dine, Galle", "Curry Leaf, Trincomalee", "Bamboo Bistro, Matara",
  "Lanka Tandoor, Colombo", "Flavors, Batticaloa", "Heritage Kitchen, Anuradhapura", "Bay Grill, Arugam Bay",
  "The Rice Bowl, Ella", "Green Table, Kurunegala", "South Coast Dine, Hambantota", "Urban Eats, Kalutara",
  "The Pepper Pot, Ratnapura", "Spicy Hut, Badulla", "Palm Cuisine, Polonnaruwa", "Midtown Café, Bandarawela",
  "Omega Restaurant, Colombo", "Spice Garden, Kandy", "Taste of Lanka, Jaffna", "Golden Fork, Nuwara Eliya",
  "Savor Street, Negombo", "Ocean Dine, Galle", "Curry Leaf, Trincomalee", "Bamboo Bistro, Matara",
  "Lanka Tandoor, Colombo", "Flavors, Batticaloa", "Heritage Kitchen, Anuradhapura", "Bay Grill, Arugam Bay",
  "The Rice Bowl, Ella", "Green Table, Kurunegala", "South Coast Dine, Hambantota", "Urban Eats, Kalutara",
  "The Pepper Pot, Ratnapura", "Spicy Hut, Badulla", "Palm Cuisine, Polonnaruwa", "Midtown Café, Bandarawela"
];

const allApartments = [
  "Sunrise Apartments, Colombo", "Lakeview Flats, Kandy", "City Heights, Jaffna", "Oceanfront Apartments, Galle",
  "Sky Towers, Negombo", "Green Valley, Nuwara Eliya", "Urban Nest, Matara", "Hillside Residency, Ella",
  "Palm Apartments, Kalutara", "Coastal View, Arugam Bay", "Crescent Court, Trincomalee", "Ridge Apartments, Haputale",
  "Sunset Heights, Batticaloa", "Peaceful Living, Anuradhapura", "Golden Park, Hambantota", "Central Plaza, Kurunegala",
  "Tropical Suites, Badulla", "Beachfront Flats, Bentota", "Modern Loft, Polonnaruwa", "Heritage Residences, Ratnapura",
  "Sunrise Apartments, Colombo", "Lakeview Flats, Kandy", "City Heights, Jaffna", "Oceanfront Apartments, Galle",
  "Sky Towers, Negombo", "Green Valley, Nuwara Eliya", "Urban Nest, Matara", "Hillside Residency, Ella",
  "Palm Apartments, Kalutara", "Coastal View, Arugam Bay", "Crescent Court, Trincomalee", "Ridge Apartments, Haputale",
  "Sunset Heights, Batticaloa", "Peaceful Living, Anuradhapura", "Golden Park, Hambantota", "Central Plaza, Kurunegala",
  "Tropical Suites, Badulla", "Beachfront Flats, Bentota", "Modern Loft, Polonnaruwa", "Heritage Residences, Ratnapura"
];

const dataMap = {
    hotels: allHotels,
    villas: allVillas,
    restaurants: allRestaurants,
    apartments: allApartments,
  };
  
  function renderList(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
  
    items.forEach(item => {
      const col = document.createElement("div");
      col.className = "col-md-3";
  
      const card = document.createElement("div");
      card.className = "border p-2 rounded bg-light text-center shadow-sm";
      card.textContent = item;
  
      col.appendChild(card);
      container.appendChild(col);
    });
  }
  
  function setupTab(category, listId) {
    const data = dataMap[category];
    const showMoreBtn = document.getElementById(`${category}ShowMoreBtn`);
    const showLessBtn = document.getElementById(`${category}ShowLessBtn`);
  
    function showInitial() {
      const initial = data.slice(0, listItemsPerPage);
      renderList(listId, initial);
      showMoreBtn.style.display =  "inline-block" ;
      showLessBtn.style.display = "none";
    }
  
    function showAll() {
      renderList(listId, data);
      showMoreBtn.style.display = "none";
      showLessBtn.style.display = "inline-block";
    }
  
    if (showMoreBtn && showLessBtn) {
      showMoreBtn.addEventListener("click", showAll);
      showLessBtn.addEventListener("click", showInitial);
    }
  
    showInitial();
  }
  
  setupTab("hotels", "hotelList");
  setupTab("villas", "villaList");
  setupTab("restaurants", "restaurantList");
  setupTab("apartments", "apartmentList");

 
