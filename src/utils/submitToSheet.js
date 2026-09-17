const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxe7nwEMY1PPiVInJ3NoKA-Km-YfCsCsf3dVwaTXaRCmN7DsBefXOhckGlt8vS5h8Vu/exec';

export async function submitToSheet(data) {
  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Erro ao enviar dados para a planilha:', err);
  }
}
