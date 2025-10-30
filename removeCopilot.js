function removeCopilot() {
  const copilotDiv = document.querySelector('#btnShellCopilot_container');
  if (copilotDiv) {
    copilotDiv.remove();
    console.log('[Hide Copilot] Copilot supprimé.');
  } else {
    console.log('[Hide Copilot] Pas de Copilot trouvé.');
  }
}

// exécution initiale
removeCopilot();

// re-check si la page change dynamiquement (SPA)
const observer = new MutationObserver(() => removeCopilot());
observer.observe(document.body, { childList: true, subtree: true });
