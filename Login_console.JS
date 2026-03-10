
    function switchTab(tab) {
      document.getElementById('formLogin').style.display    = tab === 'login'    ? 'flex' : 'none';
      document.getElementById('formRegister').style.display = tab === 'register' ? 'flex' : 'none';
      document.getElementById('tabLogin').classList.toggle('active',    tab === 'login');
      document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
      hideError();
    }

    function showError(msg) {
      const el = document.getElementById('errorMsg');
      el.textContent = msg;
      el.style.display = 'block';
    }

    function hideError() {
      document.getElementById('errorMsg').style.display = 'none';
    }

    function iniciarSesion() {
      hideError();
      const nombre = document.getElementById('loginNombre').value.trim();
      const pass   = document.getElementById('loginPass').value;

      if (!nombre) return showError('Por favor escribe tu nombre de usuario.');
      if (!pass)   return showError('Por favor escribe tu contraseña.');

      // Verificar si existe en localStorage
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '{}');
      if (usuarios[nombre] && usuarios[nombre].pass === pass) {
        localStorage.setItem('usuario', nombre);
        window.location.href = 'Index.html';
      } else if (!usuarios[nombre]) {
        showError('Usuario no encontrado. ¿Quieres registrarte?');
      } else {
        showError('Contraseña incorrecta. Intenta de nuevo.');
      }
    }

    function registrarse() {
      hideError();
      const nombre = document.getElementById('regNombre').value.trim();
      const email  = document.getElementById('regEmail').value.trim();
      const pass   = document.getElementById('regPass').value;

      if (!nombre) return showError('Por favor escribe tu nombre.');
      if (!email || !email.includes('@')) return showError('Escribe un correo válido.');
      if (pass.length < 6) return showError('La contraseña debe tener al menos 6 caracteres.');

      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '{}');
      if (usuarios[nombre]) return showError('Ese nombre de usuario ya existe.');

      usuarios[nombre] = { email, pass };
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      localStorage.setItem('usuario', nombre);
      window.location.href = 'Index.html';
    }

    // Enter para enviar
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const tab = document.getElementById('tabLogin').classList.contains('active');
        tab ? iniciarSesion() : registrarse();
      }
    });
