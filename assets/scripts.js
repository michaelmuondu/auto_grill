/**
 * Auto Grill Real-time Client Engine Core
 * Architecture: Pure Functional Standard Vanilla Modern ES6+ JavaScript.
 */

// 1. Mock Database Array for 4K Disches Dataset
const dishesData = [
    { id: 1, name: "Prime Ngara T-Bone Steak", price: 1850, category: "beef", isChef: true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80", desc: "400g prime aged beef charbroiled over dynamic hickory coals." },
    { id: 2, name: "Flame-Kissed Quarter Chicken", price: 850, category: "chicken", isChef: false, img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80", desc: "Local kienyeji profile basted with our custom high-ignition piri-piri sauce." },
    { id: 3, name: "Auto-Grill Smoked Ribs Stack", price: 2400, category: "beef", isChef: true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80", desc: "Fall-off-the-bone tender rack, glaze-finished on fire live grids." },
    { id: 4, name: "Nairobi Flame-Grilled Choma Platter", price: 3200, category: "beef", isChef: false, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80", desc: "Assorted platter containing premium local cuts, served hot off the pits." }
];

// Live Local Table Availability Mock Matrix State
let tableState = [
    { id: "T1", status: "available" }, { id: "T2", status: "booked" },
    { id: "T3", status: "available" }, { id: "T4", status: "available" },
    { id: "T5", status: "booked" }, { id: "T6", status: "available" },
    { id: "T7", status: "available" }, { id: "T8", status: "booked" }
];

// Application Working Memory Structures
let cart = [];
let userLoyaltyPoints = 350; // Dynamic initialization placeholder state

document.addEventListener("DOMContentLoaded", () => {
    initThemeControl();
    initMenuRenderer(dishesData);
    initSearchEngine();
    initAICravingGenerator();
    initTableMap();
    initCartSystem();
    initAdminControl();
    updateLoyaltyDisplay();
});

// FEATURE: Dark/Light Theme Custom Toggle System Engine
function initThemeControl() {
    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", newTheme);
        toggleBtn.innerHTML = newTheme === "dark" ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    });
}

// FEATURE: High Dynamic Array Data Menu Grid Injector
function initMenuRenderer(data) {
    const grid = document.getElementById("menu-grid");
    grid.innerHTML = "";
    
    data.forEach(dish => {
        const card = document.createElement("div");
        card.className = `menu-card`;
        card.setAttribute('data-category', dish.category);
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                ${dish.isChef ? `<span class="chef-badge">Chef Choice</span>` : ''}
                <img src="${dish.img}" alt="${dish.name}" loading="lazy">
            </div>
            <div class="card-details">
                <div>
                    <h4>${dish.name}</h4>
                    <p>${dish.desc}</p>
                </div>
                <div class="card-footer-meta">
                    <span class="price">KES ${dish.price.toLocaleString()}</span>
                    <button class="btn btn-primary btn-sm" onclick="addToCart(${dish.id})">Add Cut</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Handle Filter Tabs Changes Trigger Operations
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            const filter = e.target.getAttribute("data-filter");
            
            if(filter === "all") initMenuRenderer(dishesData);
            else if(filter === "chef") initMenuRenderer(dishesData.filter(d => d.isChef));
            else initMenuRenderer(dishesData.filter(d => d.category === filter));
        });
    });
}

// FEATURE: Instant Character Array Search Query Filter Parser
function initSearchEngine() {
    const searchInput = document.getElementById("menu-search");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = dishesData.filter(dish => 
            dish.name.toLowerCase().includes(query) || 
            dish.desc.toLowerCase().includes(query)
        );
        initMenuRenderer(filtered);
    });
}

// FEATURE: Smart Rule-Engine Pseudo AI Recommendation Engine Block
function initAICravingGenerator() {
    const phrases = [
        "Based on the chilly afternoon weather in Ngara, Chef recommends our high-ignition Smoky Rib Stack alongside a warm hot toddy!",
        "Popular crave alert near you: 38 people ordered the Flame-Kissed Quarter Chicken within Nairobi in the last hour.",
        "Your account preference profile indicates a high affinity for rare cuts. Check out Prime Ngara T-Bone Steak."
    ];
    const targetElement = document.getElementById("ai-suggestion");
    // Dynamic random slice selection
    targetElement.innerText = phrases[Math.floor(Math.random() * phrases.length)];
}

// FEATURE: Live Floor Layout Interactive Grid Node Mapper UI
function initTableMap() {
    const container = document.getElementById("map-grid");
    container.innerHTML = "";
    
    tableState.forEach(table => {
        const node = document.createElement("div");
        node.className = `table-node ${table.status}`;
        node.innerText = table.id;
        
        if (table.status === "available") {
            node.addEventListener("click", () => {
                document.querySelectorAll(".table-node").forEach(n => n.classList.remove("selected"));
                node.classList.add("selected");
                document.getElementById("selected-table").value = `Table Unit: ${table.id}`;
            });
        }
        container.appendChild(node);
    });

    // Form Intercept Handling Block
    document.getElementById("booking-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const selected = document.getElementById("selected-table").value;
        alert(`Success! Space Confirmed: ${selected}. Auto Grill awaits you.`);
    });
}

// FEATURE: Multi-Dimensional Cart Memory Engine & Integrations Container
function initCartSystem() {
    const drawer = document.getElementById("cart-drawer");
    document.getElementById("cart-btn").addEventListener("click", () => drawer.classList.add("open"));
    document.getElementById("close-cart").addEventListener("click", () => drawer.classList.remove("open"));

    // Online Mobile API Hook: Simulated M-Pesa API Payload Pipeline
    document.getElementById("mpesa-btn").addEventListener("click", () => {
        if(cart.length === 0) return alert("Your cart drawer is empty.");
        const phone = prompt("Enter your Safaricom Mobile number for STK Push validation (e.g. 07XXXXXXXX):");
        if(phone) {
            alert(`M-Pesa STK Push sequence initiated to ${phone}. Check your phone to input pin entry passcode confirmation for processing.`);
            triggerLiveOrderTracker();
        }
    });

    // Social Endpoint Bridge Hook: Dynamic Content API String Assembly for WhatsApp
    document.getElementById("whatsapp-btn").addEventListener("click", () => {
        if(cart.length === 0) return alert("Your cart drawer is empty.");
        let itemString = cart.map(i => `* ${i.name} (x${i.qty})`).join("%0A");
        let totalVal = document.getElementById("cart-total").innerText;
        let whatsappUrl = `https://wa.me/254700000000?text=*NEW%20AUTO%20GRILL%20ORDER*:%0A${itemString}%0A%0A*Total:*%20${totalVal}%0A%0A_Please%20prepare%20my%20order%20for%20pickup._`;
        window.open(whatsappUrl, '_blank');
    });
}

window.addToCart = function(id) {
    const item = dishesData.find(d => d.id === id);
    const existing = cart.find(c => c.id === id);
    if(existing) { existing.qty++; } else { cart.push({...item, qty: 1}); }
    
    userLoyaltyPoints += 15; // Earn points per purchase action dynamically
    updateLoyaltyDisplay();
    renderCartContents();
};

function renderCartContents() {
    const list = document.getElementById("cart-items");
    list.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    cart.forEach(item => {
        total += (item.price * item.qty);
        totalItems += item.qty;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div><strong>${item.name}</strong> <br><small>KES ${item.price} x ${item.qty}</small></div>
            <div>KES ${(item.price * item.qty).toLocaleString()}</div>
        `;
        list.appendChild(div);
    });

    document.getElementById("cart-total").innerText = `KES ${total.toLocaleString()}`;
    document.querySelector(".cart-count").innerText = totalItems;
}

// FEATURE: Reward Engine Account System Value Syncer
function updateLoyaltyDisplay() {
    document.getElementById("loyalty-badge").innerText = `${userLoyaltyPoints} Pts`;
}

// FEATURE: Tracking Execution Pipeline Workflow State Simulation
function triggerLiveOrderTracker() {
    const tracker = document.getElementById("order-tracker");
    tracker.classList.remove("hidden");
    
    setTimeout(() => document.getElementById("step-2").classList.add("active"), 4000);
    setTimeout(() => document.getElementById("step-3").classList.add("active"), 8000);
}

// FEATURE: Admin Dashboard Control Engine Toggle Management Systems
function initAdminControl() {
    const panel = document.getElementById("admin-panel");
    document.getElementById("admin-toggle").addEventListener("click", (e) => {
        e.preventDefault();
        // Dynamically compute runtime analytical metrics counts for dashboard data bindings
        document.getElementById("admin-tables-count").innerText = `${tableState.filter(t => t.status==='booked').length} / ${tableState.length}`;
        panel.classList.remove("hidden");
    });
    document.getElementById("close-admin").addEventListener("click", () => panel.classList.add("hidden"));
}
// search bar
// FEATURE: Instant Character Array Search Query Filter Parser
function initSearchEngine() {
    const searchInput = document.getElementById("menu-search");
    
    // Safety check to ensure the element exists in the DOM before binding
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        // If the search bar is cleared, render all dishes instantly
        if (query === "") {
            initMenuRenderer(dishesData);
            return;
        }

        // Filter dishes matching name or description matching the string query
        const filtered = dishesData.filter(dish => 
            dish.name.toLowerCase().includes(query) || 
            dish.desc.toLowerCase().includes(query) ||
            dish.category.toLowerCase().includes(query)
        );
        
        // Pass the subset back to the rendering machine to repaint the UI
        initMenuRenderer(filtered);
        
        // Dynamic UX feedback if no plates match the query string
        const grid = document.getElementById("menu-grid");
        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
                    <i class="fa-solid fa-fire-burner" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-orange);"></i>
                    <p>No sizzling dishes match "${e.target.value}". Try searching 'Beef', 'T-Bone', or 'Chicken'.</p>
                </div>
            `;
        }
    });
}



