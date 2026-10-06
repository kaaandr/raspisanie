/* Защита от встраивания чужим сайтом: страница показывается только когда открыта сама по себе. */
(function () {
  if (window.top === window.self) { document.documentElement.classList.add('top-ok'); return; }
  try { window.top.location.replace(window.location.href); } catch (e) { /* остаётся скрытой */ }
})();
