// set state default
const defaultState = {
  theme: "light",
  fontSize: "medium",
  layout: "list",
  firstVisit: true
};

// ambil state dari local storage jika ada
let state = JSON.parse(
  localStorage.getItem("userPreference")
) || defaultState;

// simpan state ke local storage
function saveState() {
  localStorage.setItem(
    "userPreference",
    JSON.stringify(state)
  );
}

// apply state ke DOM
function applyState() {
  document.body.className = `${state.theme} ${state.fontSize}`;
  document.getElementById("content").className = state.layout;
}

// inisialisasi state awal
function initUI() {
  document.getElementById("themeSelect").value = state.theme;
  document.getElementById("fontSelect").value = state.fontSize;
  document.getElementById("layoutSelect").value = state.layout;
}

// event jika ada perubahan tema
// document.getElementById("themeSelect").onchange = e => {
document.getElementById("themeSelect").onchange = e => {
  state.theme = e.target.value;
  saveState();
  applyState();
};

// event jika ada perubahan ukuran font
document.getElementById("fontSelect").onchange = e => {
  state.fontSize = e.target.value;
  saveState();
  applyState();
};

// event jika ada perubahan layout
document.getElementById("layoutSelect").onchange = e => {
  state.layout = e.target.value;
  saveState();
  applyState();
};

// tampilkan salam jika kunjungan pertama
if (state.firstVisit) {
  alert("Selamat datang! Preferensi Anda akan disimpan.");
  state.firstVisit = false;
  saveState();
}

// terapkan state awal
applyState();

// terapkan pilhan pada UI
initUI();