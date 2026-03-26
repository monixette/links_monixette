// LifeStrategics — Content Protection Layer
// Deterrents against casual copying. Not bulletproof, but raises the bar.
(function() {
  'use strict';

  // 1. Disable right-click context menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  // 2. Disable keyboard shortcuts for View Source / Save / Select All / Copy
  document.addEventListener('keydown', function(e) {
    // Ctrl+U or Cmd+U (View Source)
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') { e.preventDefault(); return false; }
    // Ctrl+S or Cmd+S (Save Page)
    if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); return false; }
    // Ctrl+Shift+I or Cmd+Opt+I (DevTools)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') { e.preventDefault(); return false; }
    // Ctrl+Shift+J (Console)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') { e.preventDefault(); return false; }
    // Ctrl+Shift+C (Inspect Element)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') { e.preventDefault(); return false; }
    // F12
    if (e.key === 'F12') { e.preventDefault(); return false; }
  });

  // 3. Disable text selection via CSS injection
  var style = document.createElement('style');
  style.textContent = [
    'body { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }',
    // Allow selection inside form inputs and textareas (critical for clarificador)
    'input, textarea, select, [contenteditable], .report-paper, pre, code { -webkit-user-select: text !important; -moz-user-select: text !important; -ms-user-select: text !important; user-select: text !important; }'
  ].join('\n');
  document.head.appendChild(style);

  // 4. Disable drag on images
  document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') { e.preventDefault(); return false; }
  });

  // 5. Console warning
  var warnStyle = 'color:#D15152;font-size:18px;font-weight:bold;';
  var infoStyle = 'color:#C5A149;font-size:12px;';
  console.log('%c⚠ Contenido protegido', warnStyle);
  console.log('%cEste sitio y su contenido son propiedad intelectual de LifeStrategics.\nLa reproduccion, copia o distribucion no autorizada esta prohibida.\nhttps://lifestrategics.com', infoStyle);
})();
