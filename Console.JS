
/* ===== PROTECCIÓN DE SESIÓN ===== */
const usuarioGuardado = localStorage.getItem("usuario");

if (!usuarioGuardado) {
  window.location.href = "login.html";
}

const app = {
  usuario: { nombre: usuarioGuardado },
  cursosCompletados: 0,
  totalCursos: 3,
  saldo: 0
};

function cerrarSesion(){
  localStorage.removeItem("usuario");
  window.location.href = "login.html";
}


/* ===== INICIALIZACIÓN ===== */
document.getElementById("nombreUsuario").textContent = app.usuario.nombre;

/* ===== FINANZAS ===== */
function agregarIngreso(){
  const monto = parseFloat(prompt("Monto del ingreso:"));
  if (isNaN(monto) || monto <= 0) return;
  app.saldo += monto;
  actualizarSaldo();
}

function agregarGasto(){
  const monto = parseFloat(prompt("Monto del gasto:"));
  if (isNaN(monto) || monto <= 0) return;
  app.saldo -= monto;
  actualizarSaldo();
}

function actualizarSaldo(){
  document.getElementById("saldo").textContent = "RD$ " + app.saldo.toFixed(2);
}

/* ===== SIMULADOR ===== */
function simularRapido(){
  const nombre = document.getElementById("simNombre").value;
  const precio = parseFloat(document.getElementById("simPrecio").value);
  const costo = parseFloat(document.getElementById("simCosto").value);

  if (!nombre || isNaN(precio) || isNaN(costo)) {
    alert("Completa todos los campos");
    return;
  }

  const ganancia = precio - costo;
  const porc = ((ganancia / precio) * 100).toFixed(2);

  const box = document.getElementById("simResultado");
  box.style.display = "block";
  box.innerHTML = `
    Producto: ${nombre}<br>
    Ganancia: RD$ ${ganancia}<br>
    % Ganancia: ${porc}%
  `;
}

 /* ===== SETTINGS PANEL ===== */
  function openSettings() {
    document.getElementById('settingsPanel').classList.add('open');
    document.getElementById('settingsOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    actualizarPanelProgreso();
  }
  function closeSettings() {
    document.getElementById('settingsPanel').classList.remove('open');
    document.getElementById('settingsOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ===== DARK MODE ===== */
  function toggleDark(cb) {
    const theme = cb.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Restaurar tema guardado
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.addEventListener('DOMContentLoaded', () => {
    const cb = document.getElementById('darkToggle');
    if (cb) cb.checked = savedTheme === 'dark';
  });

  /* ===== PROGRESO (panel) ===== */
  function actualizarPanelProgreso() {
    const completados = app.cursosCompletados;
    const total = app.totalCursos;
    const porc = Math.round((completados / total) * 100);

    document.getElementById('settingsProgBar').style.width = porc + '%';
    document.getElementById('settingsProgText').textContent = completados + ' de ' + total + ' cursos';
    document.getElementById('settingsProgPorc').textContent = porc + '%';
    document.getElementById('progresoValor').textContent = porc + '%';

    for (let i = 0; i < total; i++) {
      const badge = document.getElementById('badge' + i);
      if (i < completados) {
        badge.classList.remove('pending');
        badge.classList.add('done');
        badge.textContent = '✓';
      } else {
        badge.classList.remove('done');
        badge.classList.add('pending');
        badge.textContent = (i + 1);
      }
    }
  }

  function simularAvance() {
    if (app.cursosCompletados < app.totalCursos) {
      app.cursosCompletados++;
      actualizarPanelProgreso();
    }
  }

  /* ===== NOMBRE EN HEADER Y PANEL ===== */
  document.addEventListener('DOMContentLoaded', () => {
    const nombre = localStorage.getItem('usuario') || 'Usuario';
    const inicial = nombre.charAt(0).toUpperCase();

    const elNombre = document.getElementById('nombreUsuario');
    const elAvatar = document.getElementById('headerAvatar');
    const elPanel  = document.getElementById('panelNombreUsuario');

    if (elNombre) elNombre.textContent = nombre;
    if (elAvatar) elAvatar.textContent = inicial;
    if (elPanel)  elPanel.textContent  = nombre;

    // Restaurar toggle dark
    const cb = document.getElementById('darkToggle');
    if (cb) cb.checked = (localStorage.getItem('theme') === 'dark');

    actualizarPanelProgreso();
  });

  /* ===== MODALS ===== */
  function openModal(id) { document.getElementById(id).classList.add('open'); }
  function closeModal(id) { document.getElementById(id).classList.remove('open'); }

  