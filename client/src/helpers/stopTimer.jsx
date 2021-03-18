// clears all setTimeouts that are active in the "window"
const StopTimer = () => {
  let id = window.setTimeout(function () { }, 0);
  while (id--) {
    window.clearTimeout(id);
  }
}

export default StopTimer;