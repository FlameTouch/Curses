let pairs = [];
const input = document.getElementById('pairInput');
const list = document.getElementById('pairList');
const errorMsg = document.getElementById('errorMsg');
const statusBar = document.getElementById('statusBar');

input.addEventListener('keydown', e => {
    if (e.key === 'Enter') addPair();
});
function parsePair(raw) {
    const eqIndex = raw.indexOf('=');
    if (eqIndex === -1) {
        return { ok: false, error: 'Missing "=" sign. Use the format: Name = Value' };
    }
    if (raw.indexOf('=', eqIndex + 1) !== -1) {
        return { ok: false, error: 'Multiple "=" signs found. Use the format: Name = Value' };
    }

    const name  = raw.slice(0, eqIndex).trim();
    const value = raw.slice(eqIndex + 1).trim();

    if (!name)  return { ok: false, error: 'Name cannot be empty.' };
    if (!value) return { ok: false, error: 'Value cannot be empty.' };

    const alphaNum = /^[a-zA-Z0-9]+$/;
    if (!alphaNum.test(name))  return { ok: false, error: 'Name must contain only letters and numbers.' };
    if (!alphaNum.test(value)) return { ok: false, error: 'Value must contain only letters and numbers.' };

    return { ok: true, name, value };
}

function addPair() {
    clearError();
    const raw = input.value;

    const result = parsePair(raw);
    if (!result.ok) {
        showError(result.error);
        return;
    }

    const { name, value } = result;

    const isDuplicate = pairs.some(p => p.name === name && p.value === value);
    if (isDuplicate) {
        showError(`"${name} = ${value}" is already in the list.`);
        return;
    }

    pairs.push({ name, value });
    input.value = '';
    renderList();
    input.focus();
}

function sortByName() {
    pairs.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    renderList();
}

function sortByValue() {
    pairs.sort((a, b) => a.value.toLowerCase().localeCompare(b.value.toLowerCase()));
    renderList();
}

function deleteSelected() {
    const selected = new Set(
        Array.from(list.selectedOptions).map(o => o.value)
    );
    if (selected.size === 0) return;

    pairs = pairs.filter(p => !selected.has(pairLabel(p)));
    renderList();
}

function pairLabel(p) {
    return `${p.name}=${p.value}`;
}

function renderList() {
    const prevSelected = new Set(
        Array.from(list.selectedOptions).map(o => o.value)
    );

    list.innerHTML = '';
    pairs.forEach(p => {
        const opt    = document.createElement('option');
        opt.value    = pairLabel(p);
        opt.textContent = pairLabel(p);
        if (prevSelected.has(opt.value)) opt.selected = true;
        list.appendChild(opt);
    });

    updateStatus();
}

function updateStatus() {
    const n = pairs.length;
    statusBar.textContent = n === 1 ? '1 pair' : `${n} pairs`;
}

function showError(msg) {
    errorMsg.textContent = msg;
    errorMsg.classList.remove('hidden');
}

function clearError() {
    errorMsg.textContent = '';
    errorMsg.classList.add('hidden');
}