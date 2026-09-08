// ============================================================
// UTILIDADES
// ============================================================
const getData = (key, fallback) => JSON.parse(localStorage.getItem(key)) ?? fallback;
const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const MESA_COMPACT_THRESHOLD = 8;
const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-');

// ============================================================
// DATOS PRECARGADOS (Excel)
// ============================================================
const RAW_NOVIO = [
["Rodrigo Vecino","Novio"],["Juan V","Familia"],["Irene V","Familia"],["Papa","Familia"],["Mama","Familia"],["Soto","Familia"],["Carlos","Familia"],["Araceli","Familia"],["Maria","Familia"],["Mari Pili","Familia"],["Alicia","Familia"],["Abuelo","Familia"],["Natalia","Familia"],["David","Familia"],["Andrea","Familia"],["N. Andrea","Familia"],["Alex","Familia"],["N. Alex","Familia"],["Luis","Familia"],["Pati","Familia"],["Lucas","Familia"],["Carmen","Familia"],["Tia Loli","Familia"],
["Victor","Casi Familia"],["Carmen Sr","Casi Familia"],["Pablo","Casi Familia"],["N. Pablo","Casi Familia"],["Carmen","Casi Familia"],["N. Carmen","Casi Familia"],["Juan Luján","Casi Familia"],["Isa","Casi Familia"],["Gabri","Casi Familia"],["Angel","Casi Familia"],["Irene","Casi Familia"],
["Ana de Quinto","Zacapa"],["David Villarias","Zacapa"],["Santi","Zacapa"],["N. Santi","Zacapa"],["Nacho","Zacapa"],["Alvaro","Zacapa"],["Mercedes Moraleda","Zacapa"],["Mariano","Zacapa"],["Iñigo Sr","Zacapa"],["Iñigo Z","Zacapa"],["N. Iñigo Z","Zacapa"],["Blanca Z","Zacapa"],["Lucia Z","Zacapa"],["Manolo Serrano","Zacapa"],["Ines Arregui","Zacapa"],["N. Ines","Zacapa"],["Ines S","Zacapa"],["Iñigo S","Zacapa"],["Pilar Guerra","Zacapa"],["Blasco","Zacapa"],["Pilar G","Zacapa"],["Silvia Blasco","Zacapa"],["Alberto Blasco","Zacapa"],["Miguel Blasco","Zacapa"],["Mas Blasco","Zacapa"],
["Filip","Chavales"],["Lulu","Chavales"],["Jimenez","Chavales"],["Juanito","Chavales"],["Blanca","Chavales"],["Julen","Chavales"],["N. Julen","Chavales"],["Rober","Chavales"],["Maria","Chavales"],["Nacho","Chavales"],["Cristina","Chavales"],["Navarro","Chavales"],["Serrano","Chavales"],["Tito","Chavales"],["Lucia","Chavales"],["Warrior","Chavales"],["Carla","Chavales"],["Torre","Chavales"],["N. Torre","Chavales"],["Manu","Chavales"],["N. Manu","Chavales"],
["Flavia","Cabañas"],["Lola","Cabañas"],["Maria R","Cabañas"],["Palo L","Cabañas"],["Rita","Cabañas"],["Palo F","Cabañas"],["Rorro","Cabañas"],["Almu","Cabañas"],["Maria F","Cabañas"],["Joaquin","Cabañas"],["Joaquin Jr","Cabañas"],["Rafa F","Cabañas"],["Gon","Cabañas"],["Mar","Cabañas"],["Rosa","Cabañas"],["Anton","Cabañas"],["Carlota","Cabañas"],["Leti","Cabañas"],["Andres","Cabañas"],["Ines","Cabañas"],["Dimas","Cabañas"],["Loreto","Cabañas"],["Isa Escriva","Cabañas"],["Sergio","Cabañas"],["Meres","Cabañas"],
["Pino","ICAI"],["N. Pino","ICAI"],["Andy","ICAI"],["N. Andy","ICAI"],["Ramos","ICAI"],["Membi","ICAI"],["Chillo","ICAI"],["N. Chillo","ICAI"],
["Julio","Trabajo"],["Ale","Trabajo"],["Gon Jr","Trabajo"],["Ali Jr","Trabajo"],["Jose","Trabajo"],
["Moreu","Compromiso"],["N. Moreu","Compromiso"],["Virginia","Compromiso"],["Joaquín","Compromiso"],["Arturo Canalda","Compromiso"],["Ana Moreu","Compromiso"],["Fernando Oso","Compromiso"],["Esther","Compromiso"],["Borja","Compromiso"],["Lucia","Compromiso"],["Acho","Compromiso"],["N. Acho","Compromiso"],["Pastor","Compromiso"],["Patricia","Compromiso"],["Cari","Compromiso"],["Chema","Compromiso"],["Miriam","Compromiso"]
];
const RAW_NOVIA = [
["Gema Castillo","Novia"],["Fidel Padre","Familia"],["Gema Madre","Familia"],["Fidel Hijo","Familia"],["Pa","Familia"],["Nana","Familia"],["Pedro","Familia"],["Eva Sr","Familia"],["Eva","Familia"],["Javi","Familia"],["Pedro Javier","Familia"],["Juanma","Familia"],["Chari","Familia"],["Ismael","Familia"],["Jaime","Familia"],["Marina","Familia"],["Fernando","Familia"],["Juani","Familia"],["Tita Mari","Familia"],["Tito Gonzalo","Familia"],["Gonzalo","Familia"],["Tania","Familia"],["Marco","Familia"],["Maria","Familia"],["Mina","Familia"],["Sergio","Familia"],["Angel","Familia"],["Rodrigo","Familia"],["Francis","Familia"],["Angela","Familia"],["Hijo 1","Familia"],["Hijo 2","Familia"],["Hijo 3","Familia"],["Ziro","Familia"],["M. Ziro","Familia"],["F. Castellon","Familia"],["F. Castellon","Familia"],["F. Castellon","Familia"],["F. Castellon","Familia"],["F. Castellon","Familia"],["F. Castellon","Familia"],["Nieto","Familia"],["Manolo","Familia"],["Nico","Familia"],["Javi","Familia"],["Helena","Familia"],["Lucia","Familia"],["Francisco","Familia"],["Lea","Familia"],
["Fatima","Amigas"],["Maria","Amigas"],["Kiko","Amigas"],["Angy","Amigas"],["Lola","Amigas"],["Carlota","Amigas"],["Lucia D","Amigas"],["N. Lucia","Amigas"],["Sole","Amigas"],["Bea","Amigas"],["N. Bea","Amigas"],["Marta Mata","Amigas"],["Natalia","Amigas"],["N. Natalia","Amigas"],["Paloma","Amigas"],["N. Paloma","Amigas"],["Somoano","Amigas"],["Sara","Amigas"],["N. Sara","Amigas"],["Sendin","Amigas"],["N. Sendin","Amigas"],["Angeles","Amigas"],["Dani","Amigas"],
["Cynthia","Trabajo"],["N. Cynthia","Trabajo"],["Diego","Trabajo"],["N. Diego","Trabajo"],["Jeison","Trabajo"],["N. Jeison","Trabajo"],["Mar","Trabajo"],["Enrique","Trabajo"],["N. Enrique","Trabajo"],["N. Mar","Trabajo"],["Mario","Trabajo"],["N. Mario","Trabajo"],["Marta","Trabajo"],["N. Marta","Trabajo"],["Sara","Trabajo"],["N. Sara","Trabajo"],["Ceci","Trabajo"],["Manu","Trabajo"],["N. Manu","Trabajo"],["Siyu","Trabajo"],["N. Siyu","Trabajo"],["H. Siyu","Trabajo"],["H. Siyu 2","Trabajo"],["Victor","Trabajo"],["Edu","Trabajo"],["N. Edu","Trabajo"],["Raquel","Trabajo"],["Dani","Trabajo"],["N. Dani","Trabajo"],
["Cati","Compromiso"],["Manu","Compromiso"],["Juan Carlos","Compromiso"],["Ortega","Compromiso"],["Rosa","Compromiso"],
["Conchi","Familia"],["Eduardo","Familia"],["Hijo 1","Familia"],["Hijo 2","Familia"],["Mari Jose","Familia"],["Pancha","Familia"],
["Hilario","Cazorla"],["N. Hilario","Cazorla"],["Eresma","Cazorla"],
["Paco","Familia"],["Antoñita","Familia"],["Tio Tomas","Familia"],["Luis Angel","Familia"],["N. Luis Angel","Familia"]
];

function buildGuestList(raw, lado) {
  return raw.map(([nombre, categoria]) => ({
    id: uid(), nombre, categoria, tipo: 'adulto', alergias: '', regalo: '',
    enviada: false, asiste: 'pendiente', mesa: null, seat: null, lado
  }));
}

const DEFAULT_GASTOS = [
  { concepto:'Evento', detalle:'Finca', coste:6000 },{ concepto:'Evento', detalle:'Iglesia', coste:500 },
  { concepto:'Evento', detalle:'Fotógrafo', coste:5000 },{ concepto:'Evento', detalle:'Floristería', coste:2000 },
  { concepto:'Evento', detalle:'Alianzas', coste:1000 },{ concepto:'Evento', detalle:'Ilustraciones', coste:800 },
  { concepto:'Evento', detalle:'Ramo novia', coste:150 },{ concepto:'Evento', detalle:'Autobuses', coste:1500 },
  { concepto:'Evento', detalle:'Coche clásico', coste:500 },{ concepto:'Evento', detalle:'Invitaciones', coste:400 },
  { concepto:'Fiesta', detalle:'DJ', coste:7000 },{ concepto:'Fiesta', detalle:'Barra libre', coste:5000 },
  { concepto:'Fiesta', detalle:'Puros', coste:400 },{ concepto:'Fiesta', detalle:'Grupo flamenco', coste:900 },
  { concepto:'Vestido y Maquillaje', detalle:'Novio', coste:1000 },{ concepto:'Vestido y Maquillaje', detalle:'Novia', coste:5000 },
  { concepto:'Regalos', detalle:'Padres', coste:1000 },{ concepto:'Regalos', detalle:'Invitados', coste:2500 },
  { concepto:'Viaje de novios', detalle:'Viaje', coste:10000 },{ concepto:'Comida', detalle:'Puesto pulpo', coste:900 },
  { concepto:'Comida', detalle:'Frisante', coste:300 },{ concepto:'Comida', detalle:'Estrella Galicia', coste:300 },
].map(g => ({ ...g, id: uid(), pagado: false }));

const DEFAULT_PRECIOS = {
  'Familia': 400, 'Casi Familia': 250, 'Chavales': 250, 'Zacapa': 220, 'Compromiso': 220,
  'Amigas': 200, 'Amigos': 200, 'Trabajo': 200, 'Cabañas': 200, 'ICAI': 200, 'Cazorla': 200,
  'Novio': 0, 'Novia': 0, 'Otros': 200
};

const TAREAS_CONFIG = [
  ["Documentos boda","alta"],["Vestido novia","alta"],["Traje novio","alta"],["Catering","alta"],
  ["Alianzas","alta"],["Elegir menú","alta"],["Invitaciones","alta"],["Fotógrafo","alta"],["Distribución de mesas","alta"],
  ["Elección música (Iglesia)","media"],["Elección música (DJ)","media"],["Floristería","media"],["Grupo flamenco","media"],
  ["Autobuses","media"],["Hoteles","media"],["Ramo novia","media"],["Maquillaje","media"],["Elegir lecturas ceremonia","media"],
  ["Padrinos, testigos y damas de honor","media"],["Luna de miel","media"],
  ["Regalos","baja"],["Regalos padres","baja"],["Coche clásico","baja"],
];
const DEFAULT_TAREAS = TAREAS_CONFIG.map(([texto, prioridad]) => ({ id: uid(), texto, prioridad, hecho: false }));

const DEFAULT_MUSICA = {
  dj: ["Ferrol - última", "Mujer de Verde"].map(texto => ({ id: uid(), texto })),
  iglesia: ["Ave María Latín - despedida", "Himno del Centenario FMCF (Violín) - salida"].map(texto => ({ id: uid(), texto })),
  flamenco: []
};

const DEFAULT_TIMELINE = [
  { id: uid(), hora: '12:00', evento: 'Llegada invitados a la iglesia' },
  { id: uid(), hora: '12:30', evento: 'Ceremonia' },
  { id: uid(), hora: '14:00', evento: 'Cóctel de bienvenida' },
  { id: uid(), hora: '16:00', evento: 'Banquete' },
  { id: uid(), hora: '20:00', evento: 'Apertura de barra libre y DJ' },
];

const CONCEPTOS_GASTO = [
  { key:'Comida', icon:'🍽️' },
  { key:'Evento', icon:'🎪' },
  { key:'Fiesta', icon:'🎉' },
  { key:'Vestido y Maquillaje', icon:'👗' },
  { key:'Regalos', icon:'🎁' },
  { key:'Viaje de novios', icon:'✈️' },
];

// ============================================================
// CARGA DE DATOS
// ============================================================
let guestsNovio = getData('boda_novio', null) ?? buildGuestList(RAW_NOVIO, 'novio');
let guestsNovia = getData('boda_novia', null) ?? buildGuestList(RAW_NOVIA, 'novia');
let tareas = getData('boda_tareas', null) ?? DEFAULT_TAREAS;
let gastos = getData('boda_gastos', null) ?? DEFAULT_GASTOS;
let precios = getData('boda_precios', null) ?? DEFAULT_PRECIOS;
let notas = getData('boda_notas', '');
let musica = getData('boda_musica', null) ?? DEFAULT_MUSICA;
let mesas = getData('boda_mesas', []);
let catering = getData('boda_catering', null) ?? { precioPersona: 170, pagado: false };
let timeline = getData('boda_timeline', null) ?? DEFAULT_TIMELINE;
let mesaExpanded = getData('boda_mesa_expanded', {});

guestsNovio.forEach(g => { if (!g.lado) g.lado='novio'; if (!g.tipo) g.tipo='adulto'; if (g.alergias===undefined) g.alergias=''; if (g.regalo===undefined) g.regalo=''; if (g.seat===undefined) g.seat=null; });
guestsNovia.forEach(g => { if (!g.lado) g.lado='novia'; if (!g.tipo) g.tipo='adulto'; if (g.alergias===undefined) g.alergias=''; if (g.regalo===undefined) g.regalo=''; if (g.seat===undefined) g.seat=null; });
gastos.forEach(g => { if (g.pagado === undefined) g.pagado = false; });
if (catering.pagado === undefined) catering.pagado = false;

function persistAll() {
  setData('boda_novio', guestsNovio); setData('boda_novia', guestsNovia);
  setData('boda_tareas', tareas); setData('boda_gastos', gastos);
  setData('boda_precios', precios); setData('boda_musica', musica);
  setData('boda_mesas', mesas); setData('boda_catering', catering);
  setData('boda_timeline', timeline); setData('boda_mesa_expanded', mesaExpanded);
}
persistAll();

// ============================================================
// MODO OSCURO
// ============================================================
if (getData('boda_darkmode', false)) document.body.classList.add('dark');
document.getElementById('btn-darkmode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  setData('boda_darkmode', document.body.classList.contains('dark'));
});

// ============================================================
// NAVEGACIÓN
// ============================================================
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
    if (btn.dataset.tab === 'mesas') refreshMesasViews();
    if (btn.dataset.tab === 'inicio') renderDashboard();
    document.querySelector('.sidebar').classList.remove('open');
  });
});
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('open');
});

// ============================================================
// CUENTA ATRÁS
// ============================================================
function updateCountdown() {
  const target = new Date('2027-10-16T00:00:00');
  let diff = Math.max(0, target - new Date());
  document.getElementById('cd-days').textContent = Math.floor(diff / 86400000);
  document.getElementById('cd-hours').textContent = Math.floor((diff / 3600000) % 24);
  document.getElementById('cd-mins').textContent = Math.floor((diff / 60000) % 60);
}
updateCountdown();
setInterval(updateCountdown, 30000);

// ============================================================
// INVITADOS
// ============================================================
function getAllGuests() { return [...guestsNovio, ...guestsNovia]; }

function renderGuests(side) {
  const list = side === 'novio' ? guestsNovio : guestsNovia;
  const tbody = document.getElementById(`tbody-${side}`);
  tbody.innerHTML = '';
  const categorias = ['Familia','Casi Familia','Amigas','Amigos','Trabajo','ICAI','Cazorla','Compromiso','Cabañas','Chavales','Zacapa','Novio','Novia','Otros'];

  list.forEach(g => {
    const tr = document.createElement('tr');
    tr.dataset.nombre = g.nombre.toLowerCase();
    tr.dataset.categoria = g.categoria.toLowerCase();
    tr.innerHTML = `
      <td><input type="text" class="table-input name-input" value="${g.nombre}" data-id="${g.id}" data-side="${side}"></td>
      <td><select class="table-select categoria-input" data-id="${g.id}" data-side="${side}">
        ${categorias.map(c => `<option ${c === g.categoria ? 'selected' : ''}>${c}</option>`).join('')}
      </select></td>
      <td><select class="table-select tipo-select ${g.tipo}" data-id="${g.id}" data-side="${side}">
        <option value="adulto" ${g.tipo === 'adulto' ? 'selected' : ''}>Adulto</option>
        <option value="junior" ${g.tipo === 'junior' ? 'selected' : ''}>Junior</option>
      </select></td>
      <td><input type="text" class="table-input alergias-input" value="${g.alergias}" placeholder="-" data-id="${g.id}" data-side="${side}"></td>
      <td><input type="text" class="table-input regalo-input" value="${g.regalo}" placeholder="-" data-id="${g.id}" data-side="${side}"></td>
      <td><input type="checkbox" ${g.enviada ? 'checked' : ''} data-id="${g.id}" data-side="${side}" class="chk-enviada"></td>
      <td><select class="table-select asistencia ${g.asiste}" data-id="${g.id}" data-side="${side}">
        <option value="pendiente" ${g.asiste === 'pendiente' ? 'selected' : ''}>Pendiente</option>
        <option value="si" ${g.asiste === 'si' ? 'selected' : ''}>Sí asiste</option>
        <option value="no" ${g.asiste === 'no' ? 'selected' : ''}>No asiste</option>
      </select></td>
      <td><button class="btn-delete" data-id="${g.id}" data-side="${side}">🗑️</button></td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.name-input').forEach(inp => inp.addEventListener('input', e => {
    const arr = e.target.dataset.side === 'novio' ? guestsNovio : guestsNovia;
    arr.find(x => x.id === e.target.dataset.id).nombre = e.target.value;
    e.target.closest('tr').dataset.nombre = e.target.value.toLowerCase();
    saveGuests();
  }));
  tbody.querySelectorAll('.alergias-input').forEach(inp => inp.addEventListener('input', e => {
    const arr = e.target.dataset.side === 'novio' ? guestsNovio : guestsNovia;
    arr.find(x => x.id === e.target.dataset.id).alergias = e.target.value;
    saveGuests();
  }));
  tbody.querySelectorAll('.regalo-input').forEach(inp => inp.addEventListener('input', e => {
    const arr = e.target.dataset.side === 'novio' ? guestsNovio : guestsNovia;
    arr.find(x => x.id === e.target.dataset.id).regalo = e.target.value;
    saveGuests();
  }));
  tbody.querySelectorAll('.categoria-input').forEach(sel => sel.addEventListener('change', e => {
    const s = e.target.dataset.side;
    const arr = s === 'novio' ? guestsNovio : guestsNovia;
    arr.find(x => x.id === e.target.dataset.id).categoria = e.target.value;
    e.target.closest('tr').dataset.categoria = e.target.value.toLowerCase();
    saveGuests(); renderCategorySummary(s);
  }));
  tbody.querySelectorAll('.tipo-select').forEach(sel => sel.addEventListener('change', e => {
    const s = e.target.dataset.side;
    const arr = s === 'novio' ? guestsNovio : guestsNovia;
    arr.find(x => x.id === e.target.dataset.id).tipo = e.target.value;
    saveGuests(); renderGuests(s); renderCatering();
  }));
  tbody.querySelectorAll('.chk-enviada').forEach(chk => chk.addEventListener('change', e => {
    const arr = e.target.dataset.side === 'novio' ? guestsNovio : guestsNovia;
    arr.find(x => x.id === e.target.dataset.id).enviada = e.target.checked;
    saveGuests();
  }));
  tbody.querySelectorAll('.asistencia').forEach(sel => sel.addEventListener('change', e => {
    const s = e.target.dataset.side;
    const arr = s === 'novio' ? guestsNovio : guestsNovia;
    arr.find(x => x.id === e.target.dataset.id).asiste = e.target.value;
    saveGuests(); renderGuests(s); renderCatering();
  }));
  tbody.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', e => {
    const s = e.target.dataset.side;
    const arr = s === 'novio' ? guestsNovio : guestsNovia;
    const idx = arr.findIndex(x => x.id === e.target.dataset.id);
    if (idx > -1) arr.splice(idx, 1);
    saveGuests(); renderGuests(s); renderCatering();
  }));

  document.getElementById(`count-${side}`).textContent = list.length;
  renderCategorySummary(side);
  updateGuestSummary();
}

function renderCategorySummary(side) {
  const list = side === 'novio' ? guestsNovio : guestsNovia;
  const tbody = document.getElementById(`resumen-${side}`);
  if (!tbody) return;
  const resumen = {};
  list.forEach(g => {
    if (!resumen[g.categoria]) resumen[g.categoria] = { total: 0, adultos: 0, juniors: 0 };
    resumen[g.categoria].total++;
    if (g.tipo === 'junior') resumen[g.categoria].juniors++; else resumen[g.categoria].adultos++;
  });
  const ordenadas = Object.keys(resumen).sort((a, b) => resumen[b].total - resumen[a].total);
  tbody.innerHTML = ordenadas.map(cat => `
    <tr><td><span class="category-tag">${cat}</span></td><td>${resumen[cat].total}</td><td>${resumen[cat].adultos}</td><td>${resumen[cat].juniors}</td></tr>
  `).join('') || '<tr><td colspan="4" style="color:#aaa;">Sin invitados</td></tr>';
  tbody.innerHTML += `<tr style="font-weight:700; background:var(--azul-100);"><td>TOTAL</td><td>${list.length}</td><td>${list.filter(g=>g.tipo!=='junior').length}</td><td>${list.filter(g=>g.tipo==='junior').length}</td></tr>`;
}

function saveGuests() {
  setData('boda_novio', guestsNovio); setData('boda_novia', guestsNovia);
  updateGuestSummary(); renderDashboard();
}
function updateGuestSummary() {
  const all = getAllGuests();
  document.getElementById('total-invitados').textContent = all.length;
  document.getElementById('total-adultos').textContent = all.filter(g => g.tipo === 'adulto').length;
  document.getElementById('total-juniors').textContent = all.filter(g => g.tipo === 'junior').length;
  document.getElementById('total-enviadas').textContent = all.filter(g => g.enviada).length;
  document.getElementById('total-confirmados').textContent = all.filter(g => g.asiste === 'si').length;
  document.getElementById('total-pendientes').textContent = all.filter(g => g.asiste === 'pendiente').length;
}

document.querySelectorAll('.add-form[data-side]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const side = form.dataset.side;
    const nombre = form.querySelector('.input-nombre').value.trim();
    const categoria = form.querySelector('.input-categoria').value;
    const tipo = form.querySelector('.input-tipo').value;
    if (!nombre) return;
    const nuevo = { id: uid(), nombre, categoria, tipo, alergias: '', regalo: '', enviada: false, asiste: 'pendiente', mesa: null, seat: null, lado: side };
    (side === 'novio' ? guestsNovio : guestsNovia).push(nuevo);
    saveGuests(); renderGuests(side); renderCatering();
    form.querySelector('.input-nombre').value = '';
  });
});

document.getElementById('buscador-invitados').addEventListener('input', e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('#tbody-novio tr, #tbody-novia tr').forEach(tr => {
    const match = tr.dataset.nombre.includes(q) || tr.dataset.categoria.includes(q);
    tr.classList.toggle('row-hidden', !match);
  });
});

document.getElementById('btn-export-csv').addEventListener('click', () => {
  const all = [
    ...guestsNovio.map(g => ({ ...g, ladoTxt: 'Novio' })),
    ...guestsNovia.map(g => ({ ...g, ladoTxt: 'Novia' }))
  ];
  const headers = ['Nombre','Lado','Categoría','Tipo','Alergias','Regalo','Invitación enviada','Asistencia'];
  const rows = all.map(g => [g.nombre, g.ladoTxt, g.categoria, g.tipo, g.alergias, g.regalo, g.enviada ? 'Sí' : 'No', g.asiste]);
  let csv = headers.join(';') + '\n' + rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(';')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'invitados-boda.csv'; a.click();
  URL.revokeObjectURL(url);
});

// ============================================================
// TAREAS Y ANOTACIONES
// ============================================================
function renderTasks() {
  const ul = document.getElementById('lista-tareas');
  ul.innerHTML = '';
  const grupos = [
    { key: 'alta', label: '🔴 Prioridad Alta', cls: 'divider-alta' },
    { key: 'media', label: '🟡 Prioridad Media', cls: 'divider-media' },
    { key: 'baja', label: '🟢 Prioridad Baja', cls: 'divider-baja' },
  ];

  grupos.forEach(grp => {
    const items = tareas.filter(t => t.prioridad === grp.key);
    const divider = document.createElement('li');
    divider.className = `priority-divider ${grp.cls}`;
    divider.innerHTML = `<span>${grp.label}</span><span class="divider-count">${items.length}</span>`;
    ul.appendChild(divider);

    if (items.length === 0) {
      const empty = document.createElement('li');
      empty.className = 'priority-empty';
      empty.textContent = 'Sin tareas en esta prioridad';
      ul.appendChild(empty);
      return;
    }

    items.forEach(t => {
      const li = document.createElement('li');
      li.className = 'task-item' + (t.hecho ? ' done' : '');
      li.innerHTML = `
        <input type="checkbox" ${t.hecho ? 'checked' : ''} data-id="${t.id}" class="chk-tarea">
        <input type="text" class="table-input task-text-input" value="${t.texto}" data-id="${t.id}">
        <select class="priority-select" data-id="${t.id}">
          <option value="baja" ${t.prioridad === 'baja' ? 'selected' : ''}>Baja</option>
          <option value="media" ${t.prioridad === 'media' ? 'selected' : ''}>Media</option>
          <option value="alta" ${t.prioridad === 'alta' ? 'selected' : ''}>Alta</option>
        </select>
        <button class="btn-delete" data-id="${t.id}">🗑️</button>`;
      ul.appendChild(li);
    });
  });

  ul.querySelectorAll('.chk-tarea').forEach(chk => chk.addEventListener('change', e => {
    tareas.find(t => t.id === e.target.dataset.id).hecho = e.target.checked;
    setData('boda_tareas', tareas); renderTasks(); renderDashboard();
  }));
  ul.querySelectorAll('.task-text-input').forEach(inp => inp.addEventListener('input', e => {
    tareas.find(t => t.id === e.target.dataset.id).texto = e.target.value;
    setData('boda_tareas', tareas); renderDashboard();
  }));
  ul.querySelectorAll('.priority-select').forEach(sel => sel.addEventListener('change', e => {
    tareas.find(t => t.id === e.target.dataset.id).prioridad = e.target.value;
    setData('boda_tareas', tareas); renderTasks(); renderDashboard();
  }));
  ul.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', e => {
    tareas = tareas.filter(t => t.id !== e.target.dataset.id);
    setData('boda_tareas', tareas); renderTasks(); renderDashboard();
  }));
}
document.getElementById('form-tarea').addEventListener('submit', e => {
  e.preventDefault();
  const texto = document.getElementById('input-tarea').value.trim();
  const prioridad = document.getElementById('input-prioridad').value;
  if (!texto) return;
  tareas.push({ id: uid(), texto, prioridad, hecho: false });
  setData('boda_tareas', tareas); renderTasks(); renderDashboard();
  document.getElementById('input-tarea').value = '';
});
const notasEl = document.getElementById('anotaciones');
notasEl.value = notas;
notasEl.addEventListener('input', () => { setData('boda_notas', notasEl.value); renderDashboard(); });

// ============================================================
// MÚSICA
// ============================================================
function renderMusicList(tipo) {
  const ul = document.getElementById(`list-${tipo}`);
  ul.innerHTML = '';
  musica[tipo].forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="text" value="${item.texto}" data-id="${item.id}" data-tipo="${tipo}"><button class="btn-delete" data-id="${item.id}" data-tipo="${tipo}">🗑️</button>`;
    ul.appendChild(li);
  });
  ul.querySelectorAll('input').forEach(inp => inp.addEventListener('input', e => {
    const t = e.target.dataset.tipo;
    musica[t].find(x => x.id === e.target.dataset.id).texto = e.target.value;
    setData('boda_musica', musica);
  }));
  ul.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', e => {
    const t = e.target.dataset.tipo;
    musica[t] = musica[t].filter(x => x.id !== e.target.dataset.id);
    setData('boda_musica', musica); renderMusicList(t);
  }));
}
document.querySelectorAll('.music-form').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const tipo = form.dataset.list;
  const input = form.querySelector('input');
  const texto = input.value.trim();
  if (!texto) return;
  musica[tipo].push({ id: uid(), texto });
  setData('boda_musica', musica); renderMusicList(tipo); input.value = '';
}));

document.getElementById('btn-pdf-musica').addEventListener('click', exportMusicaPDF);

function exportMusicaPDF() {
  const secciones = [['dj','🎧 Canciones DJ'],['iglesia','⛪ Canciones Iglesia'],['flamenco','💃 Grupo Flamenco']];
  let body = `<h1>🎵 Planificación Musical</h1><p class="meta">Rodrigo &amp; Gema · 16 de octubre de 2027</p>`;
  secciones.forEach(([key, label]) => {
    body += `<h2>${label}</h2>`;
    if (musica[key].length === 0) {
      body += '<p class="empty">Sin canciones añadidas.</p>';
    } else {
      body += '<table><thead><tr><th style="width:50px;">#</th><th>Canción / Momento</th></tr></thead><tbody>';
      musica[key].forEach((item, i) => body += `<tr><td>${i + 1}</td><td>${item.texto}</td></tr>`);
      body += '</tbody></table>';
    }
  });
  openPdfWindow('Música — Rodrigo & Gema', body);
}

// ============================================================
// MESAS: FILTROS
// ============================================================
let mesaFiltros = { lado: 'todos', categoria: 'todas', busqueda: '' };

function populateMesaCategoriaFilter() {
  const select = document.getElementById('mesa-filtro-categoria');
  const actual = select.value;
  const categorias = [...new Set(getAllGuests().map(g => g.categoria))].sort();
  select.innerHTML = `<option value="todas">Todas las categorías</option>` +
    categorias.map(c => `<option value="${c}" ${c===actual?'selected':''}>${c}</option>`).join('');
}

function getFilteredLibres(all) {
  return all.filter(g => {
    if (g.mesa) return false;
    if (mesaFiltros.lado !== 'todos' && g.lado !== mesaFiltros.lado) return false;
    if (mesaFiltros.categoria !== 'todas' && g.categoria !== mesaFiltros.categoria) return false;
    if (mesaFiltros.busqueda && !g.nombre.toLowerCase().includes(mesaFiltros.busqueda)) return false;
    return true;
  });
}

document.getElementById('mesa-buscador').addEventListener('input', e => {
  mesaFiltros.busqueda = e.target.value.toLowerCase().trim();
  renderMesas();
});
document.getElementById('mesa-filtro-lado').addEventListener('change', e => {
  mesaFiltros.lado = e.target.value;
  renderMesas();
});
document.getElementById('mesa-filtro-categoria').addEventListener('change', e => {
  mesaFiltros.categoria = e.target.value;
  renderMesas();
});

// ============================================================
// MESAS: TOGGLE VISTA LISTA / MAPA + PDF DINÁMICO
// ============================================================
let currentMesaView = 'lista';

document.getElementById('btn-vista-lista').addEventListener('click', () => {
  currentMesaView = 'lista';
  document.getElementById('btn-vista-lista').classList.add('active');
  document.getElementById('btn-vista-mapa').classList.remove('active');
  document.getElementById('plano-mesas').style.display = 'grid';
  document.getElementById('mapa-mesas').style.display = 'none';
  document.getElementById('btn-pdf-mesas').textContent = '📄 Exportar PDF (lista)';
});
document.getElementById('btn-vista-mapa').addEventListener('click', () => {
  currentMesaView = 'mapa';
  document.getElementById('btn-vista-mapa').classList.add('active');
  document.getElementById('btn-vista-lista').classList.remove('active');
  document.getElementById('plano-mesas').style.display = 'none';
  document.getElementById('mapa-mesas').style.display = 'block';
  document.getElementById('btn-pdf-mesas').textContent = '📄 Exportar PDF (mapa)';
  renderSeatMap();
});
document.getElementById('btn-pdf-mesas').addEventListener('click', () => {
  if (currentMesaView === 'mapa') exportMapaPDF();
  else exportMesasPDF();
});

function refreshMesasViews() {
  renderMesas();
  if (document.getElementById('mapa-mesas').style.display !== 'none') renderSeatMap();
}

// ============================================================
// MESAS: VISTA LISTA (agrupada + multi-selección + REORDENAR)
// ============================================================
function renderMesas() {
  populateMesaCategoriaFilter();
  const plano = document.getElementById('plano-mesas');
  plano.innerHTML = '';
  const all = getAllGuests();

  mesas.forEach(mesa => {
    const asignados = all.filter(g => g.mesa === mesa.id);
    const librosFiltrados = getFilteredLibres(all);
    const lleno = asignados.length >= mesa.capacidad;
    const pct = Math.min(100, (asignados.length / mesa.capacidad) * 100);
    const expandido = mesaExpanded[mesa.id] || asignados.length <= MESA_COMPACT_THRESHOLD;

    const card = document.createElement('div');
    card.className = 'mesa-card';
    card.dataset.mesaId = mesa.id;
    card.innerHTML = `
      <span class="mesa-drag-handle" draggable="true" data-id="${mesa.id}" title="Arrastrar para reordenar mesas">⠿</span>
      <button class="btn-delete-mesa" data-id="${mesa.id}">🗑️</button>
      <div class="mesa-shape">
        <input type="text" class="mesa-edit-nombre" value="${mesa.nombre}" data-id="${mesa.id}">
        <div class="mesa-edit-cap"><span>${asignados.length}/</span>
          <input type="number" class="mesa-edit-capacidad" value="${mesa.capacidad}" min="${asignados.length}" data-id="${mesa.id}">
        </div>
      </div>
      <div class="capacity-bar"><div class="capacity-fill ${lleno ? 'full' : ''}" style="width:${pct}%"></div></div>
      <div class="mesa-guests" data-mesa-drop="${mesa.id}">
        ${renderMesaGuestsHTML(mesa, asignados, expandido)}
      </div>
      <div class="mesa-add-guest">
        <button class="btn-toggle-add" data-mesa="${mesa.id}" ${lleno ? 'disabled' : ''}>${lleno ? '🚫 Mesa llena' : '➕ Añadir invitados (varios)'}</button>
        <div class="mesa-add-panel" data-mesa="${mesa.id}" style="display:none;">
          ${librosFiltrados.length ? librosFiltrados.map(g => `
            <label class="mesa-check-item">
              <input type="checkbox" value="${g.id}">
              ${g.nombre} <small>${g.categoria} · ${g.lado === 'novio' ? '🤵' : '👰'}</small>
            </label>`).join('') : '<p class="hint">No hay invitados que coincidan con el filtro</p>'}
          <button class="btn-add-selected" data-mesa="${mesa.id}">Añadir seleccionados</button>
        </div>
      </div>`;
    plano.appendChild(card);
  });

  plano.querySelectorAll('.mesa-edit-nombre').forEach(inp => inp.addEventListener('input', e => {
    mesas.find(m => m.id === e.target.dataset.id).nombre = e.target.value;
    setData('boda_mesas', mesas);
  }));
  plano.querySelectorAll('.mesa-edit-capacidad').forEach(inp => inp.addEventListener('change', e => {
    const mesa = mesas.find(m => m.id === e.target.dataset.id);
    const asignadosCount = all.filter(g => g.mesa === mesa.id).length;
    let val = Number(e.target.value) || asignadosCount;
    if (val < asignadosCount) val = asignadosCount;
    mesa.capacidad = val; setData('boda_mesas', mesas); refreshMesasViews();
  }));
  plano.querySelectorAll('.btn-delete-mesa').forEach(btn => btn.addEventListener('click', e => {
    const mesaId = e.target.dataset.id;
    all.forEach(g => { if (g.mesa === mesaId) { g.mesa = null; g.seat = null; } });
    mesas = mesas.filter(m => m.id !== mesaId);
    delete mesaExpanded[mesaId];
    setData('boda_mesas', mesas); setData('boda_mesa_expanded', mesaExpanded);
    saveGuests(); refreshMesasViews();
  }));
  plano.querySelectorAll('.quitar-guest').forEach(btn => btn.addEventListener('click', e => {
    const g = all.find(x => x.id === e.target.dataset.guest);
    g.mesa = null; g.seat = null;
    saveGuests(); refreshMesasViews();
  }));
  plano.querySelectorAll('.btn-toggle-mesa').forEach(btn => btn.addEventListener('click', e => {
    const mesaId = e.target.dataset.id;
    mesaExpanded[mesaId] = !mesaExpanded[mesaId];
    setData('boda_mesa_expanded', mesaExpanded);
    renderMesas();
  }));

  plano.querySelectorAll('.btn-toggle-add').forEach(btn => btn.addEventListener('click', e => {
    const panel = plano.querySelector(`.mesa-add-panel[data-mesa="${e.target.dataset.mesa}"]`);
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  }));

  plano.querySelectorAll('.btn-add-selected').forEach(btn => btn.addEventListener('click', e => {
    const mesaId = e.target.dataset.mesa;
    const panel = plano.querySelector(`.mesa-add-panel[data-mesa="${mesaId}"]`);
    const checked = [...panel.querySelectorAll('input[type="checkbox"]:checked')].map(c => c.value);
    if (checked.length === 0) return;

    const mesa = mesas.find(m => m.id === mesaId);
    const asignadosCount = all.filter(g => g.mesa === mesaId).length;
    const espacioLibre = mesa.capacidad - asignadosCount;

    if (checked.length > espacioLibre) {
      alert(`⚠️ Solo quedan ${espacioLibre} sitios libres en esta mesa. Selecciona menos invitados.`);
      return;
    }

    checked.forEach(id => {
      const g = all.find(x => x.id === id);
      if (g) { g.mesa = mesaId; g.seat = null; }
    });
    saveGuests();
    refreshMesasViews();
  }));

  setupDragAndDrop();
  setupMesaReorder();
  renderSinMesa();
  renderDashboard();
}

// ---- Reordenar mesas (drag handle) ----
function setupMesaReorder() {
  const plano = document.getElementById('plano-mesas');

  plano.querySelectorAll('.mesa-drag-handle').forEach(handle => {
    handle.addEventListener('dragstart', e => {
      e.dataTransfer.setData('application/x-mesa-id', handle.dataset.id);
      e.dataTransfer.effectAllowed = 'move';
      handle.closest('.mesa-card').classList.add('reorder-dragging');
    });
    handle.addEventListener('dragend', () => {
      handle.closest('.mesa-card').classList.remove('reorder-dragging');
    });
  });

  plano.querySelectorAll('.mesa-card').forEach(card => {
    card.addEventListener('dragover', e => {
      if (e.dataTransfer.types.includes('application/x-mesa-id')) {
        e.preventDefault();
        card.classList.add('mesa-drop-target');
      }
    });
    card.addEventListener('dragleave', () => card.classList.remove('mesa-drop-target'));
    card.addEventListener('drop', e => {
      card.classList.remove('mesa-drop-target');
      const sourceId = e.dataTransfer.getData('application/x-mesa-id');
      if (!sourceId) return;
      e.preventDefault();
      e.stopPropagation();
      const targetId = card.dataset.mesaId;
      if (sourceId === targetId) return;
      const fromIdx = mesas.findIndex(m => m.id === sourceId);
      const toIdx = mesas.findIndex(m => m.id === targetId);
      if (fromIdx === -1 || toIdx === -1) return;
      const [moved] = mesas.splice(fromIdx, 1);
      mesas.splice(toIdx, 0, moved);
      setData('boda_mesas', mesas);
      refreshMesasViews();
    });
  });
}

function renderMesaGuestsHTML(mesa, asignados, expandido) {
  if (asignados.length === 0) return '<span style="color:#aaa;font-size:0.8rem;">Sin invitados</span>';

  const grouped = {};
  asignados.forEach(g => { (grouped[g.categoria] = grouped[g.categoria] || []).push(g); });

  if (!expandido) {
    const badges = Object.entries(grouped).map(([cat, list]) =>
      `<span class="chip cat-badge">${cat} (${list.length})</span>`
    ).join('');
    return `<div class="mesa-compact-row">${badges}</div>
      <button class="btn-toggle-mesa" data-id="${mesa.id}">👁️ Ver los ${asignados.length} nombres</button>`;
  }

  const grupos = Object.entries(grouped).map(([cat, list]) => `
    <div class="mesa-cat-group">
      <span class="mesa-cat-label">${cat} (${list.length})</span>
      <div class="mesa-cat-chips">
        ${list.map(g => `<span class="chip" draggable="true" data-guest-id="${g.id}">${g.nombre}<button data-guest="${g.id}" class="quitar-guest">✕</button></span>`).join('')}
      </div>
    </div>
  `).join('');

  const toggleBtn = asignados.length > MESA_COMPACT_THRESHOLD
    ? `<button class="btn-toggle-mesa" data-id="${mesa.id}">🔼 Compactar</button>` : '';

  return grupos + toggleBtn;
}

function setupDragAndDrop() {
  document.querySelectorAll('.chip[draggable="true"]').forEach(chip => {
    chip.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', chip.dataset.guestId);
      chip.classList.add('dragging');
    });
    chip.addEventListener('dragend', () => chip.classList.remove('dragging'));
  });

  document.querySelectorAll('[data-mesa-drop]').forEach(zone => {
    zone.addEventListener('dragover', e => {
      if (!e.dataTransfer.types.includes('application/x-mesa-id')) {
        e.preventDefault();
        zone.classList.add('drag-over');
      }
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      if (e.dataTransfer.types.includes('application/x-mesa-id')) return; // dejar que suba al card (reordenar)
      e.preventDefault();
      zone.classList.remove('drag-over');
      const guestId = e.dataTransfer.getData('text/plain');
      const mesaId = zone.dataset.mesaDrop;
      const mesa = mesas.find(m => m.id === mesaId);
      const all = getAllGuests();
      const asignadosCount = all.filter(g => g.mesa === mesaId).length;
      const guest = all.find(g => g.id === guestId);
      if (!guest) return;
      if (guest.mesa !== mesaId && asignadosCount >= mesa.capacidad) { alert('⚠️ Esta mesa está llena'); return; }
      guest.mesa = mesaId; guest.seat = null;
      saveGuests(); refreshMesasViews();
    });
  });

  const sinMesaZone = document.getElementById('sin-mesa-dropzone');
  sinMesaZone.addEventListener('dragover', e => {
    if (!e.dataTransfer.types.includes('application/x-mesa-id')) {
      e.preventDefault();
      sinMesaZone.classList.add('drag-over');
    }
  });
  sinMesaZone.addEventListener('dragleave', () => sinMesaZone.classList.remove('drag-over'));
  sinMesaZone.addEventListener('drop', e => {
    if (e.dataTransfer.types.includes('application/x-mesa-id')) return;
    e.preventDefault();
    sinMesaZone.classList.remove('drag-over');
    const guestId = e.dataTransfer.getData('text/plain');
    const guest = getAllGuests().find(g => g.id === guestId);
    if (guest) { guest.mesa = null; guest.seat = null; saveGuests(); refreshMesasViews(); }
  });
}

function renderSinMesa() {
  const all = getAllGuests();
  const filtrados = getFilteredLibres(all);
  const totalSinMesa = all.filter(g => !g.mesa).length;
  document.getElementById('count-sin-mesa').textContent = totalSinMesa;
  const box = document.getElementById('lista-sin-mesa');
  box.innerHTML = filtrados.map(g => `<span class="chip" draggable="true" data-guest-id="${g.id}" title="${g.categoria} · ${g.lado === 'novio' ? 'Novio' : 'Novia'}">${g.nombre}</span>`).join('')
    || `<span style="color:#aaa;font-size:0.85rem;">${totalSinMesa === 0 ? '¡Todos asignados! 🎉' : 'Ningún invitado coincide con el filtro'}</span>`;
  box.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', chip.dataset.guestId); chip.classList.add('dragging'); });
    chip.addEventListener('dragend', () => chip.classList.remove('dragging'));
  });
}

document.getElementById('form-mesa').addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('input-mesa-nombre').value.trim();
  const capacidad = Number(document.getElementById('input-mesa-capacidad').value) || 10;
  if (!nombre) return;
  mesas.push({ id: uid(), nombre, capacidad, pos: null });
  setData('boda_mesas', mesas); refreshMesasViews();
  e.target.reset(); document.getElementById('input-mesa-capacidad').value = 10;
});

// ============================================================
// EXPORTAR PDF: VISTA LISTA
// ============================================================
function exportMesasPDF() {
  const all = getAllGuests();
  let body = `<h1>💍 Distribución de Mesas</h1><p class="meta">Rodrigo &amp; Gema · 16 de octubre de 2027 · ${mesas.length} mesas · ${all.filter(g=>g.mesa).length} invitados asignados</p>`;

  mesas.forEach(mesa => {
    const asignados = all.filter(g => g.mesa === mesa.id);
    body += `<h2>${mesa.nombre} (${asignados.length}/${mesa.capacidad})</h2>`;
    if (asignados.length === 0) {
      body += '<p class="empty">Sin invitados asignados.</p>';
    } else {
      body += '<table><thead><tr><th>Nombre</th><th>Categoría</th><th>Lado</th></tr></thead><tbody>';
      asignados.forEach(g => body += `<tr><td>${g.nombre}</td><td>${g.categoria}</td><td>${g.lado === 'novio' ? 'Novio' : 'Novia'}</td></tr>`);
      body += '</tbody></table>';
    }
  });

  const sinMesa = all.filter(g => !g.mesa);
  body += `<h2>Sin mesa asignada (${sinMesa.length})</h2>`;
  if (sinMesa.length === 0) {
    body += '<p class="empty">¡Todos los invitados tienen mesa asignada! 🎉</p>';
  } else {
    body += '<table><thead><tr><th>Nombre</th><th>Categoría</th><th>Lado</th></tr></thead><tbody>';
    sinMesa.forEach(g => body += `<tr><td>${g.nombre}</td><td>${g.categoria}</td><td>${g.lado === 'novio' ? 'Novio' : 'Novia'}</td></tr>`);
    body += '</tbody></table>';
  }

  openPdfWindow('Distribución de Mesas — Rodrigo & Gema', body);
}

// ============================================================
// EXPORTAR PDF: VISTA MAPA (dibujo de mesas y sillas)
// ============================================================
function exportMapaPDF() {
  const all = getAllGuests();

  if (mesas.length === 0) {
    alert('⚠️ Crea al menos una mesa para exportar el mapa.');
    return;
  }

  mesas.forEach(mesa => {
    const asignados = all.filter(g => g.mesa === mesa.id);
    normalizeSeats(mesa, asignados);
  });
  saveGuests();

  let tablesHtml = '';
  mesas.forEach(mesa => {
    const asignados = all.filter(g => g.mesa === mesa.id);
    tablesHtml += renderMesaSeatBlockStatic(mesa, asignados);
  });

  const body = `
    <h1>🗺️ Mapa de Mesas</h1>
    <p class="meta">Rodrigo &amp; Gema · 16 de octubre de 2027 · ${mesas.length} mesas</p>
    <div class="pdf-mapa-grid">${tablesHtml}</div>
  `;

  openPdfWindowMapa('Mapa de Mesas — Rodrigo & Gema', body);
}

function renderMesaSeatBlockStatic(mesa, asignados) {
  const N = mesa.capacidad, R = 78, CX = 105, CY = 105;
  let seatsHtml = '';
  for (let i = 0; i < N; i++) {
    const angle = (2 * Math.PI * i / N) - Math.PI / 2;
    const cx = CX + R * Math.cos(angle);
    const cy = CY + R * Math.sin(angle);
    const guest = asignados.find(g => g.seat === i);
    seatsHtml += `
      <div class="pdf-seat ${guest ? 'occ' : 'empty'}" style="left:${cx}px;top:${cy}px;">
        <div class="pdf-seat-avatar">${guest ? '🧑' : '＋'}</div>
        ${guest ? `<div class="pdf-seat-name">${guest.nombre}</div>` : ''}
      </div>`;
  }
  return `
    <div class="pdf-table-block">
      <div class="pdf-table-title">${mesa.nombre} <span>(${asignados.length}/${mesa.capacidad})</span></div>
      <div class="pdf-circle-container">
        <div class="pdf-table-center">${asignados.length}/${mesa.capacidad}</div>
        ${seatsHtml}
      </div>
    </div>`;
}

function openPdfWindowMapa(title, bodyHtml) {
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title}</title>
  <style>
    @page { size: A4 landscape; margin: 12mm; }
    body{font-family:'Poppins',Arial,sans-serif;color:#16233a;padding:20px;margin:0;}
    h1{color:#0a2647;border-bottom:3px solid #2c74b3;padding-bottom:10px;font-size:1.6rem;margin-bottom:4px;}
    .meta{color:#7a8698;margin-bottom:20px;font-size:0.9rem;}
    .pdf-mapa-grid{display:flex;flex-wrap:wrap;gap:26px;justify-content:flex-start;}
    .pdf-table-block{width:210px;text-align:center;break-inside:avoid;page-break-inside:avoid;margin-bottom:10px;}
    .pdf-table-title{font-weight:600;color:#0a2647;margin-bottom:8px;font-size:0.95rem;}
    .pdf-table-title span{color:#7a8698;font-weight:400;font-size:0.82rem;}
    .pdf-circle-container{position:relative;width:210px;height:210px;margin:0 auto;}
    .pdf-table-center{
      position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
      width:88px;height:88px;border-radius:50%;
      background:radial-gradient(circle,#2c74b3,#0a2647);color:#fff;
      display:flex;align-items:center;justify-content:center;font-weight:600;font-size:0.78rem;
    }
    .pdf-seat{
      position:absolute;width:44px;height:44px;border-radius:50%;
      background:#fff;border:2px solid #2c74b3;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      transform:translate(-50%,-50%);font-size:0.9rem;
    }
    .pdf-seat.empty{border-style:dashed;border-color:#a9b4bf;background:#f4f6f9;}
    .pdf-seat-avatar{font-size:0.95rem;line-height:1;}
    .pdf-seat-name{font-size:0.5rem;font-weight:600;color:#0a2647;max-width:40px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;}
    .empty{color:#8493a3;font-style:italic;font-size:0.9rem;}
  </style></head><body>${bodyHtml}</body></html>`;
  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  w.onload = () => setTimeout(() => w.print(), 400);
}

function openPdfWindow(title, bodyHtml) {
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title}</title>
  <style>
    body{font-family:'Poppins',Arial,sans-serif;color:#16233a;padding:35px;max-width:900px;margin:0 auto;}
    h1{color:#0a2647;border-bottom:3px solid #2c74b3;padding-bottom:10px;font-size:1.7rem;}
    h2{color:#144272;margin-top:28px;font-size:1.2rem;border-bottom:1px solid #e1e7ee;padding-bottom:5px;}
    table{width:100%;border-collapse:collapse;margin-top:10px;}
    th,td{border:1px solid #e1e7ee;padding:8px 10px;text-align:left;font-size:13px;}
    th{background:#0a2647;color:#fff;}
    tr:nth-child(even){background:#f7f9fc;}
    .meta{color:#7a8698;margin-bottom:10px;font-size:0.9rem;}
    .empty{color:#8493a3;font-style:italic;font-size:0.9rem;}
    @media print { body{padding:15px;} }
  </style></head><body>${bodyHtml}</body></html>`;
  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  w.onload = () => setTimeout(() => w.print(), 300);
}

// ============================================================
// MESAS: VISTA MAPA VISUAL (mesas + sillas, ambos arrastrables)
// ============================================================
function normalizeSeats(mesa, asignados) {
  const used = new Set();
  asignados.forEach(g => {
    if (g.seat == null || g.seat >= mesa.capacidad || used.has(g.seat)) g.seat = null;
    else used.add(g.seat);
  });
  asignados.forEach(g => {
    if (g.seat == null) {
      for (let i = 0; i < mesa.capacidad; i++) {
        if (!used.has(i)) { g.seat = i; used.add(i); break; }
      }
    }
  });
}

function renderSeatMap() {
  const container = document.getElementById('mapa-mesas');
  container.innerHTML = '';
  const all = getAllGuests();

  if (mesas.length === 0) {
    container.innerHTML = '<p style="color:#cfe0f4;">Crea al menos una mesa para ver el mapa visual.</p>';
    return;
  }

  const cols = 3;
  let changedPos = false;
  mesas.forEach((mesa, i) => {
    if (!mesa.pos) {
      const col = i % cols, row = Math.floor(i / cols);
      mesa.pos = { x: col * 300 + 40, y: row * 320 + 40 };
      changedPos = true;
    }
  });
  if (changedPos) setData('boda_mesas', mesas);

  const maxX = Math.max(...mesas.map(m => m.pos.x)) + 300;
  const maxY = Math.max(...mesas.map(m => m.pos.y)) + 300;
  container.style.minWidth = maxX + 'px';
  container.style.minHeight = maxY + 'px';

  mesas.forEach(mesa => {
    const asignados = all.filter(g => g.mesa === mesa.id);
    normalizeSeats(mesa, asignados);

    const wrap = document.createElement('div');
    wrap.className = 'seatmap-table-wrap';
    wrap.style.left = mesa.pos.x + 'px';
    wrap.style.top = mesa.pos.y + 'px';
    wrap.dataset.mesaId = mesa.id;

    const title = document.createElement('div');
    title.className = 'seatmap-title';
    title.textContent = mesa.nombre;
    wrap.appendChild(title);

    const circleContainer = document.createElement('div');
    circleContainer.className = 'seatmap-circle-container';

    const center = document.createElement('div');
    center.className = 'seatmap-table-center';
    center.textContent = `${asignados.length}/${mesa.capacidad}`;
    circleContainer.appendChild(center);

    const N = mesa.capacidad, R = 95, CX = 130, CY = 130;
    for (let i = 0; i < N; i++) {
      const angle = (2 * Math.PI * i / N) - Math.PI / 2;
      const cx = CX + R * Math.cos(angle);
      const cy = CY + R * Math.sin(angle);
      const guest = asignados.find(g => g.seat === i);

      const seatDiv = document.createElement('div');
      seatDiv.className = 'seatmap-seat ' + (guest ? 'occupied' : 'empty');
      seatDiv.style.left = cx + 'px';
      seatDiv.style.top = cy + 'px';
      seatDiv.dataset.mesa = mesa.id;
      seatDiv.dataset.seat = i;

      if (guest) {
        seatDiv.draggable = true;
        seatDiv.dataset.guestId = guest.id;
        seatDiv.title = `${guest.nombre} · ${guest.categoria}`;
        seatDiv.innerHTML = `<div class="seat-avatar">🧑</div><div class="seat-name">${guest.nombre}</div>`;
      } else {
        seatDiv.innerHTML = `<div class="seat-avatar empty-avatar">＋</div>`;
      }
      circleContainer.appendChild(seatDiv);
    }

    wrap.appendChild(circleContainer);
    container.appendChild(wrap);

    makeTableDraggable(wrap, mesa, title, center);
  });

  saveGuests();
  setupSeatDragDrop();
}

function makeTableDraggable(wrapEl, mesa, ...handles) {
  handles.forEach(handle => {
    handle.addEventListener('pointerdown', e => {
      e.preventDefault();
      const startX = e.clientX, startY = e.clientY;
      const initialLeft = parseFloat(wrapEl.style.left) || 0;
      const initialTop = parseFloat(wrapEl.style.top) || 0;
      wrapEl.style.zIndex = 50;
      handle.setPointerCapture(e.pointerId);

      function onMove(ev) {
        const dx = ev.clientX - startX, dy = ev.clientY - startY;
        wrapEl.style.left = Math.max(0, initialLeft + dx) + 'px';
        wrapEl.style.top = Math.max(0, initialTop + dy) + 'px';
      }
      function onUp() {
        handle.removeEventListener('pointermove', onMove);
        handle.removeEventListener('pointerup', onUp);
        wrapEl.style.zIndex = '';
        mesa.pos = { x: parseFloat(wrapEl.style.left), y: parseFloat(wrapEl.style.top) };
        setData('boda_mesas', mesas);
      }
      handle.addEventListener('pointermove', onMove);
      handle.addEventListener('pointerup', onUp);
    });
  });
}

function setupSeatDragDrop() {
  document.querySelectorAll('.seatmap-seat.occupied').forEach(seat => {
    seat.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', seat.dataset.guestId);
      seat.classList.add('dragging');
    });
    seat.addEventListener('dragend', () => seat.classList.remove('dragging'));
  });

  document.querySelectorAll('.seatmap-seat').forEach(seat => {
    seat.addEventListener('dragover', e => { e.preventDefault(); seat.classList.add('drag-over'); });
    seat.addEventListener('dragleave', () => seat.classList.remove('drag-over'));
    seat.addEventListener('drop', e => {
      e.preventDefault();
      seat.classList.remove('drag-over');
      const guestId = e.dataTransfer.getData('text/plain');
      const mesaId = seat.dataset.mesa;
      const seatIndex = Number(seat.dataset.seat);
      handleSeatDrop(mesaId, seatIndex, guestId);
    });
  });
}

function handleSeatDrop(mesaId, seatIndex, guestId) {
  const all = getAllGuests();
  const guest = all.find(g => g.id === guestId);
  if (!guest) return;
  const mesa = mesas.find(m => m.id === mesaId);
  if (!mesa) return;

  const targetGuest = all.find(g => g.mesa === mesaId && g.seat === seatIndex);
  const prevMesa = guest.mesa, prevSeat = guest.seat;

  if (targetGuest && targetGuest.id !== guest.id) {
    targetGuest.mesa = prevMesa;
    targetGuest.seat = prevSeat;
  }
  guest.mesa = mesaId;
  guest.seat = seatIndex;

  saveGuests();
  renderSeatMap();
  renderMesas();
}

// ============================================================
// TIMELINE
// ============================================================
function renderTimeline() {
  const ul = document.getElementById('lista-timeline');
  const ordenado = [...timeline].sort((a, b) => a.hora.localeCompare(b.hora));
  ul.innerHTML = ordenado.map(t => `
    <li>
      <input type="time" value="${t.hora}" data-id="${t.id}" class="timeline-hora-input">
      <input type="text" value="${t.evento}" data-id="${t.id}" class="timeline-evento-input">
      <button class="btn-delete" data-id="${t.id}">🗑️</button>
    </li>`).join('') || '<li>Sin eventos todavía</li>';

  ul.querySelectorAll('.timeline-hora-input').forEach(inp => inp.addEventListener('input', e => {
    timeline.find(t => t.id === e.target.dataset.id).hora = e.target.value;
    setData('boda_timeline', timeline);
  }));
  ul.querySelectorAll('.timeline-evento-input').forEach(inp => inp.addEventListener('input', e => {
    timeline.find(t => t.id === e.target.dataset.id).evento = e.target.value;
    setData('boda_timeline', timeline);
  }));
  ul.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', e => {
    timeline = timeline.filter(t => t.id !== e.target.dataset.id);
    setData('boda_timeline', timeline);
    renderTimeline();
  }));

  document.getElementById('timeline-total-eventos').textContent = timeline.length;
}

document.getElementById('form-timeline').addEventListener('submit', e => {
  e.preventDefault();
  const hora = document.getElementById('timeline-hora').value;
  const evento = document.getElementById('timeline-evento').value.trim();
  if (!hora || !evento) return;
  timeline.push({ id: uid(), hora, evento });
  setData('boda_timeline', timeline);
  renderTimeline();
  e.target.reset();
});

// ============================================================
// GASTOS (divididos por concepto) + CATERING
// ============================================================
function getCateringGuestCount() { return getAllGuests().filter(g => g.asiste !== 'no').length; }
function calcularCateringTotal() { return getCateringGuestCount() * (catering.precioPersona || 0); }
function calcularTotalGastosGenerales() { return gastos.reduce((sum, g) => sum + (Number(g.coste) || 0), 0); }
function calcularTotalGastos() { return calcularTotalGastosGenerales() + calcularCateringTotal(); }
function calcularIngresosEstimados() {
  const all = getAllGuests();
  const conteo = {};
  all.forEach(g => { conteo[g.categoria] = (conteo[g.categoria] || 0) + 1; });
  let total = 0;
  Object.keys(conteo).forEach(cat => { total += (precios[cat] ?? 0) * conteo[cat]; });
  return { total, conteo };
}
function calcularTotalPagado() {
  const gastosPagados = gastos.filter(g => g.pagado).reduce((s, g) => s + (g.coste||0), 0);
  const cateringPagado = catering.pagado ? calcularCateringTotal() : 0;
  return gastosPagados + cateringPagado;
}

function renderCatering() {
  document.getElementById('catering-personas').textContent = getCateringGuestCount();
  document.getElementById('catering-precio-display').textContent = catering.precioPersona;
  document.getElementById('catering-total').textContent = calcularCateringTotal().toLocaleString('es-ES') + ' €';
  document.getElementById('catering-pagado').checked = catering.pagado;
  updateExpenseSummary();
}
document.getElementById('input-catering-precio').value = catering.precioPersona;
document.getElementById('input-catering-precio').addEventListener('input', e => {
  catering.precioPersona = Number(e.target.value) || 0;
  setData('boda_catering', catering); renderCatering();
});
document.getElementById('catering-pagado').addEventListener('change', e => {
  catering.pagado = e.target.checked;
  setData('boda_catering', catering); renderCatering(); renderDashboard();
});

function renderGastosPorConcepto() {
  const container = document.getElementById('gastos-conceptos-container');
  container.innerHTML = CONCEPTOS_GASTO.map(c => `
    <div class="concepto-block">
      <div class="concepto-header">
        <h2>${c.icon} ${c.key}</h2>
        <span class="concepto-subtotal">Subtotal: <strong id="subtotal-${slug(c.key)}">0 €</strong></span>
      </div>
      <form class="add-form concepto-form" data-concepto="${c.key}">
        <input type="text" class="concepto-detalle" placeholder="Detalle" required>
        <input type="number" class="concepto-coste" placeholder="Coste €" required>
        <label class="checkbox-label-inline"><input type="checkbox" class="concepto-pagado"> Pagado</label>
        <button type="submit">+ Añadir</button>
      </form>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>Detalle</th><th>Coste (€)</th><th>Pagado</th><th></th></tr></thead>
          <tbody id="tbody-concepto-${slug(c.key)}"></tbody>
        </table>
      </div>
    </div>
  `).join('');

  CONCEPTOS_GASTO.forEach(c => renderConceptoTable(c.key));

  container.querySelectorAll('.concepto-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const concepto = form.dataset.concepto;
      const detalle = form.querySelector('.concepto-detalle').value.trim();
      const coste = Number(form.querySelector('.concepto-coste').value) || 0;
      const pagado = form.querySelector('.concepto-pagado').checked;
      if (!detalle) return;
      gastos.push({ id: uid(), concepto, detalle, coste, pagado });
      setData('boda_gastos', gastos);
      renderConceptoTable(concepto);
      updateExpenseSummary();
      form.reset();
    });
  });
}

function renderConceptoTable(concepto) {
  const tbody = document.getElementById(`tbody-concepto-${slug(concepto)}`);
  if (!tbody) return;
  const items = gastos.filter(g => g.concepto === concepto);
  tbody.innerHTML = items.map(g => `
    <tr>
      <td><input type="text" class="table-input" value="${g.detalle}" data-id="${g.id}" data-field="detalle"></td>
      <td><input type="number" class="table-input" value="${g.coste}" data-id="${g.id}" data-field="coste"></td>
      <td><input type="checkbox" ${g.pagado?'checked':''} data-id="${g.id}" class="chk-pagado-concepto"></td>
      <td><button class="btn-delete" data-id="${g.id}">🗑️</button></td>
    </tr>
  `).join('') || `<tr><td colspan="4" style="color:#aaa;">Sin gastos añadidos</td></tr>`;

  const subtotal = items.reduce((s, g) => s + (Number(g.coste) || 0), 0);
  const subtotalEl = document.getElementById(`subtotal-${slug(concepto)}`);
  if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString('es-ES') + ' €';

  tbody.querySelectorAll('[data-field]').forEach(inp => inp.addEventListener('input', e => {
    const g = gastos.find(x => x.id === e.target.dataset.id);
    const field = e.target.dataset.field;
    g[field] = field === 'coste' ? (Number(e.target.value) || 0) : e.target.value;
    setData('boda_gastos', gastos);
    renderConceptoTable(concepto);
    updateExpenseSummary();
  }));
  tbody.querySelectorAll('.chk-pagado-concepto').forEach(chk => chk.addEventListener('change', e => {
    gastos.find(g => g.id === e.target.dataset.id).pagado = e.target.checked;
    setData('boda_gastos', gastos);
    updateExpenseSummary();
  }));
  tbody.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', e => {
    gastos = gastos.filter(g => g.id !== e.target.dataset.id);
    setData('boda_gastos', gastos);
    renderConceptoTable(concepto);
    updateExpenseSummary();
  }));
}

function renderIngresosEstimados() {
  const tbody = document.getElementById('tbody-ingresos');
  tbody.innerHTML = '';
  const { conteo } = calcularIngresosEstimados();
  Object.keys(precios).forEach(cat => {
    const n = conteo[cat] || 0;
    if (n === 0 && !['Familia','Amigas','Trabajo'].includes(cat)) return;
    const total = n * (precios[cat] || 0);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><span class="category-tag">${cat}</span></td><td>${n}</td>
      <td><input type="number" class="table-input" value="${precios[cat]}" data-cat="${cat}"></td>
      <td>${total.toLocaleString('es-ES')} €</td>`;
    tbody.appendChild(tr);
  });
  tbody.querySelectorAll('input[data-cat]').forEach(inp => inp.addEventListener('input', e => {
    precios[e.target.dataset.cat] = Number(e.target.value) || 0;
    setData('boda_precios', precios); renderIngresosEstimados(); updateExpenseSummary();
  }));
  updateExpenseSummary();
}

function updateExpenseSummary() {
  const totalGastos = calcularTotalGastos();
  const { total: totalIngresos } = calcularIngresosEstimados();
  const balance = totalIngresos - totalGastos;
  const totalPagado = calcularTotalPagado();
  const totalPendientePago = Math.max(0, totalGastos - totalPagado);

  document.getElementById('total-gastos').textContent = totalGastos.toLocaleString('es-ES') + ' €';
  document.getElementById('total-ingresos-est').textContent = totalIngresos.toLocaleString('es-ES') + ' €';
  document.getElementById('balance').textContent = balance.toLocaleString('es-ES') + ' €';
  document.getElementById('balance-card').classList.toggle('positive', balance >= 0);
  document.getElementById('total-pagado').textContent = totalPagado.toLocaleString('es-ES') + ' €';
  document.getElementById('total-pendiente-pago').textContent = totalPendientePago.toLocaleString('es-ES') + ' €';

  renderDashboard();
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const all = getAllGuests();
  const totalGastos = calcularTotalGastos();
  const { total: totalIngresos } = calcularIngresosEstimados();
  const balance = totalIngresos - totalGastos;

  document.getElementById('dash-invitados').textContent = all.length;
  document.getElementById('dash-confirmados').textContent = all.filter(g => g.asiste === 'si').length;
  document.getElementById('dash-gastos').textContent = totalGastos.toLocaleString('es-ES') + ' €';
  document.getElementById('dash-ingresos').textContent = totalIngresos.toLocaleString('es-ES') + ' €';
  document.getElementById('dash-balance').textContent = balance.toLocaleString('es-ES') + ' €';
  document.getElementById('dash-balance-card').classList.toggle('positive', balance >= 0);
  document.getElementById('dash-mesas').textContent = mesas.length;

  const orden = { alta: 0, media: 1, baja: 2 };
  const pendientes = tareas.filter(t => !t.hecho).sort((a, b) => orden[a.prioridad] - orden[b.prioridad]);
  document.getElementById('dash-tareas-count').textContent = pendientes.length;
  document.getElementById('dash-tareas-list').innerHTML = pendientes.slice(0, 8).map(t => `
    <li><span>${t.texto}</span><span class="mini-priority ${t.prioridad}">${t.prioridad}</span></li>
  `).join('') || '<li>¡Todo hecho! 🎉</li>';

  const notasActuales = getData('boda_notas', '');
  document.getElementById('dash-notas-preview').textContent = notasActuales.trim()
    ? notasActuales.slice(0, 300) + (notasActuales.length > 300 ? '...' : '')
    : 'Sin anotaciones todavía...';
}

// ============================================================
// BACKUP
// ============================================================
const BACKUP_KEYS = ['boda_novio','boda_novia','boda_tareas','boda_gastos','boda_precios','boda_musica','boda_mesas','boda_catering','boda_notas','boda_timeline','boda_mesa_expanded'];

document.getElementById('btn-export').addEventListener('click', () => {
  const backup = {};
  BACKUP_KEYS.forEach(key => { backup[key] = getData(key, null); });
  backup._exportado = new Date().toISOString();
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `backup-boda-${new Date().toISOString().slice(0,10)}.json`; a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('input-import').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const backup = JSON.parse(event.target.result);
      if (!confirm('⚠️ Esto SOBRESCRIBIRÁ los datos actuales. ¿Continuar?')) return;
      BACKUP_KEYS.forEach(key => { if (backup[key] != null) setData(key, backup[key]); });
      alert('✅ Datos importados. Recargando...');
      location.reload();
    } catch (err) { alert('❌ Archivo no válido.'); }
  };
  reader.readAsText(file);
});

// ============================================================
// INICIALIZACIÓN
// ============================================================
renderGuests('novio');
renderGuests('novia');
renderTasks();
renderMusicList('dj');
renderMusicList('iglesia');
renderMusicList('flamenco');
renderGastosPorConcepto();
renderIngresosEstimados();
renderCatering();
renderMesas();
renderTimeline();
renderDashboard();
